import { changeNode } from "@/functions";
import style from "@/styles/DynamicText.module.css";
import { PropsWithChildren, Children, useEffect, useState, ReactNode, SetStateAction, Dispatch } from "react";
import { isElement, isPortal } from "react-is";

interface DynamicTextProps extends PropsWithChildren {
  noToggle?: boolean;
  onload?: boolean;
}

export default function DynamicText(
  { children, noToggle, onload }: DynamicTextProps
) {
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

    if (onload) {
      useEffect(() => {
        changeNode(
          child,
          child,
          selectChild,
          1000
        );
      }, [])
    }
  
    return (
      <span 
        className={style.main}
        onClick={async () => {
          await changeNode(
            child,
            child,
            selectChild,
            500
          )
        }}
      >
        {child}
      </span>
    );
  }

  const [childIndex, setChildIndex] = useState(0);
  const [child, selectChild] = useState(children[0]);

  const nextIndex = () => {
    if (noToggle) {
      return Math.min(childIndex + 1, children.length - 1);
    }
    return (childIndex + 1) % children.length;
  }

  const moveToNextChild = async () => {
    await changeNode(
      children[childIndex],
      children[nextIndex()],
      selectChild
    )
    setChildIndex(nextIndex());
  }

  if (onload) {
    useEffect(() => {
      changeNode(
        children[childIndex],
        children[childIndex],
        selectChild
      );
    }, [])
  }

  return (
    <span 
      className={style.main}
      onClick={moveToNextChild}
    >
      {child}
    </span>
  );
}

