/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from "react";
import { DetailContext } from "./context";

export function DetailContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [thumbPath, setThumbPath] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <DetailContext.Provider
      value={{ thumbPath, detail, setThumbPath, setDetail }}
    >
      {children}
    </DetailContext.Provider>
  );
}
