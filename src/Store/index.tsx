import React from "react";
import { MainStore } from "./MainStore";

const StoreContext = React.createContext({
  mainStore: new MainStore()
});

export function useStore() {
  return React.useContext(StoreContext);
}
