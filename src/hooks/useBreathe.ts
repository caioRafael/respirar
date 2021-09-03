import { useContext } from "react";
import { BreatheContext } from "../contexts/BreatheContext";

export function useBreathe() {
  return useContext(BreatheContext);
}