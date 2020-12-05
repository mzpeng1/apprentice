import React from "react";
import { StateProvider } from "./src/context/StateProvider";
import reducer, {initialState} from "./src/context/reducer";

export const wrapRootElement = ({ element }) => (
    <StateProvider initialState={initialState} reducer={reducer}>{element}</StateProvider>
)