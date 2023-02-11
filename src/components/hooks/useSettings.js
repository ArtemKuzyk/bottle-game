// import { createContext } from "react";
import {createContext, useContext} from "react";

export const SettingsContext = createContext('');

export const SettingsProvider = SettingsContext.Provider;

export const useSettings = () => useContext(SettingsContext);
