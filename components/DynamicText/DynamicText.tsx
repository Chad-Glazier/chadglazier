import { changeNode } from "@/functions";
import style from "./DynamicText.module.css";
import { PropsWithChildren, Children, useEffect, useState, ReactNode, SetStateAction, Dispatch } from "react";
import { isElement, isPortal } from "react-is";

interface DynamicTextProps extends PropsWithChildren {
  noLoop?: boolean;
  onload?: boolean;
  interval?: number;
  className?: string;
};

/**
 * Used to provide a way to cycle through text and apply an animated effect.
 * When given a single element, it still provides the animation.
 * 
 * @param children These children are cycled through as a circular buffer;
 * only one is displayed at a time. To rotate through the children, you can
 * click on the element. Note that the selected child is wrapped in a `span` 
 * tag.
 * @param className Any `className` given to `DynamicText` will be applied
 * to the `span` element that gets returned (i.e., the parent of the selected
 * child).
 * @param noLoop When set, indicates that the text should *not* loop back to
 * the first child when it's set on the last. Instead, it will just keep animating
 * the last child
 * @param onload When set, indicates that the text should animate itself upon
 * mounting.
 * @param manual When set, indicates that the text should change to the
 * specified child and not change any further, and the change should take
 * place over the specified period of time.
 * @param interval When set with a number, this text will automatically cycle
 * through it's children every given number of seconds.
 */
export default function DynamicText(
  { children, noLoop, onload, interval, className }: DynamicTextProps
) {
  const [inAnimation, setInAnimation] = useState(false);

  if (
    typeof children === "string" ||
    typeof children === "number" ||
    typeof children === "boolean" ||
    children === null || 
    children === undefined ||
    isPortal(children) ||
    !Array.isArray(children)
  ) {
    const [child, selectChild] = useState(children);

    useEffect(() => {
      if (onload) {
        changeNode(
          child,
          child,
          selectChild,
          inAnimation,
          setInAnimation,
          50
        );        
      }
    }, [])

    useEffect(() => {
      if (interval) {
        let intervalId = setInterval(() => {
          changeNode(
            child,
            child,
            selectChild,
            inAnimation,
            setInAnimation
          );  
        }, interval * 1000)
        return () => clearInterval(intervalId);
      }
    }, [])
  
    return (
      <span 
        className={style.main + (className ? " " + className : "")}
        onClick={async () => {
          changeNode(
            child,
            child,
            selectChild,
            inAnimation,
            setInAnimation
          );            
        }}
      >
        {child}
      </span>
    );
  }

  const [childIndex, setChildIndex] = useState(0);
  const [child, selectChild] = useState(children[0]);

  const nextIndex = () => {
    if (noLoop) {
      return Math.min(childIndex + 1, children.length - 1);
    }
    return (childIndex + 1) % children.length;
  }

  useEffect(() => {
    if (onload) {
      changeNode(
        children[childIndex],
        children[childIndex],
        selectChild,
        inAnimation,
        setInAnimation,
        50
      );        
    }
  }, []);

  useEffect(() => {
    if (interval) {
      let intervalId = setInterval(moveToNextChild, interval * 1000)
      return () => clearInterval(intervalId);
    }
  }, [childIndex]);

  const moveToNextChild = async () => {
    const nodeWasChanged: boolean = await changeNode(
      children[childIndex],
      children[nextIndex()],
      selectChild,
      inAnimation,
      setInAnimation
    );
    if (nodeWasChanged) {
      setChildIndex(nextIndex());
    }
  }

  return (
    <span 
      className={style.main + (className ? " " + className : "")}
      onClick={moveToNextChild}
    >
      {child}
    </span>
  );
}

