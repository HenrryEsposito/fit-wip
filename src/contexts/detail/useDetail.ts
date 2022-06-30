import { useContext } from "react";
import { DetailContext } from "./context";

export function useDetailContext() {
  const context = useContext(DetailContext);

  if (!context) {
    throw new Error(
      "The DetailContext it's mean to be used by its childrens components only."
    );
  }

  return context;
}
