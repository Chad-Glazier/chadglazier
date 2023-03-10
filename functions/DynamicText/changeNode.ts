import { changeText, getText } from "@/functions";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { isElement } from "react-is";

/**
 * This function is used to dynamically change text, creating an
 * animation effect.
 * 
 * Since the animation effect relies entirely on modifying text,
 * this function first turns the `initialNode` and `finalNode`,
 * converts them into text by recursively searching their children.
 * 
 * Once the text is obtained from both the `initialNode` and
 * `finalNode`, the text can be animated. This is handled by
 * `changeText`.
 * 
 * Note that, since it turns the elements into text to perform
 * the animation, the elements would normally lose their styles.
 * 
 * In order to solve this, the top-level type of the `initialNode`
 * is used to wrap the text during the animation. However, since
 * the `initialNode` and `finalNode` don't have to maintain the
 * same shape, the top-level is the only type that is used. This
 * means that, during the animation, any nested HTML tags are 
 * omitted (though they are added at the end of the animation,
 * when the state is set to the `finalNode`). 
 * 
 * @param initialNode 
 * @param finalNode 
 * @param setNode
 * @param inAnimation a boolean state variable denoting whether
 * or not the animation is currently running. If it is, then the
 * function immediately returns. 
 * @param setInAnimation a state action function to set
 * `animationState` to `true` while the animation is running, and
 * setting it to `false` after the animation completes. 
 */
export default async function changeNode(
  initialNode: ReactNode,
  finalNode: ReactNode,
  setNode: Dispatch<SetStateAction<ReactNode>>,
  inAnimation?: boolean,
  setInAnimation?: Dispatch<SetStateAction<boolean>>,
  timePerCharacter: number = 30,
  timeLimit: number = 1000
): Promise<boolean> {
  if (inAnimation) return false;

  let TopLevelType = 
    isElement(initialNode) ? initialNode.type : 
    isElement(finalNode) ? finalNode.type :
    null;
  let TopLevelProps = 
    isElement(initialNode) ? initialNode.props : 
    isElement(finalNode) ? finalNode.props :
    null;

  let initialText: string = getText(initialNode);
  let finalText: string = getText(finalNode);

  if (setInAnimation) setInAnimation(true);

  await changeText(
    initialText, 
    finalText, 
    setNode, 
    TopLevelType ? 
      { type: TopLevelType, props: TopLevelProps } :
      null,
    {
      timeLimit,
      timePerCharacter
    }
  );

  setNode(finalNode);
  if (setInAnimation) setInAnimation(false);
  return true;
}