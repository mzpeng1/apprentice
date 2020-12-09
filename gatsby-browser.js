import React from "react";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import { StateProvider } from "./src/context/StateProvider";
import reducer, {initialState} from "./src/context/reducer";

export const wrapRootElement = ({ element }) => (
    <StateProvider initialState={initialState} reducer={reducer}>{element}</StateProvider>
)