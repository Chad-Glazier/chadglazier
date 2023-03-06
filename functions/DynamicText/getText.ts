import { ReactNode } from "react";

/**
 * Recursively searches the node for text, and combines it all
 * into a string.
 * 
 * @param node the `ReactNode` to search
 * @returns all of the text discovered, as a single string
 */
export default function getText(
  node: ReactNode
): string {
  if (
    typeof node === "string" || 
    typeof node === "number"
  ) {
    return node.toString();
  }
  
  if (Array.isArray(node)) {
    return node.map(getText).join("");
  }
  
  if (node && typeof node === "object" && "props" in node) {
    const { children } = node.props;
    if (children) {
      return getText(children);
    }
  }

  return "";
}