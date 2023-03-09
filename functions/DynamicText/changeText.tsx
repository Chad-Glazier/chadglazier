import { Dispatch, JSXElementConstructor, ReactNode, SetStateAction } from "react";
import { sleep, randomLetter } from "@/functions";

/**
 * Takes the `initialState`, and animates it until it ends up as
 * `finalState`.
 * 
 * If you're using this to change the text within a `ReactElement`, you
 * may pass the element's `type` and `props` into the `wrapper` argument.
 * Doing this will ensure that the animation sets it to match the `type`
 * with the appropriate classes, rather than just plaintext which might
 * have different styles.
 * 
 * @param initialState the initial state as a string
 * @param finalState the final state as a string
 * @param setState the function to set the state of the string
 */
export default async function changeText(
  initialState: string,
  finalState: string,
  setState: Dispatch<SetStateAction<ReactNode>>,
  wrapper: {
    type: JSXElementConstructor<any> | string,
    props: any
  } | null = null,
  options: {
    timeLimit: number | null,
    timePerCharacter: number
  } = {
    timeLimit: null,
    timePerCharacter: 30
  }
) {
  // Calculate the delay for each iteration
  let delay: number;
  if (options.timeLimit) {
    delay = Math.min(
      options.timeLimit / (Math.abs(finalState.length - initialState.length) + Math.max(finalState.length, initialState.length)),
      options.timePerCharacter
    );
  } else {
    delay = options.timePerCharacter;
  }

  let currentState: string = initialState;

  // iterate until the current state matches the final state
  for (let iteration = 0; true; initialState.length == 0 ? iteration += 1/2 : iteration++) {
    if (iteration > finalState.length && currentState.length == finalState.length) {
      setState(finalState);
      return;
    }

    // adjust the size on each iteration by 1 until the current 
    // state has the right size
    if (currentState.length > finalState.length) {
      currentState = currentState.slice(0, -1);
    } else if (currentState.length < finalState.length) {
      currentState += randomLetter();
    }

    if (
      ! (
        currentState.length > finalState.length &&
        currentState.substring(0, finalState.length) == finalState        
      )
    ) {
      currentState = currentState
        .split("")
        .map((character: string, index: number) => {
          if (
            finalState.length > index &&
            (
              iteration > index ||
              finalState[index].match(/[\s\[\]]/) || (
                finalState === initialState ?
                  false :
                  finalState[index] == currentState[index]
              )
            )
          ) {
            return finalState[index];
          }
          return randomLetter();
        })
        .join("");      
    } else {
      if (iteration % (Math.floor(initialState.length / (finalState.length || 1)))) {
        currentState = currentState.slice(0, -1)
      }
    }

    // update the state
    if (wrapper) {
      setState(
        <wrapper.type {...wrapper.props}>
          {currentState}
        </wrapper.type>
      )
    } else {
      setState(currentState);
    }
    await sleep(delay);
  };
}

