import { createContext } from "react";
import { IDetailContext } from "./interfaces/IDetailContext";

export const DetailContext = createContext<IDetailContext>(
  {} as IDetailContext
);
