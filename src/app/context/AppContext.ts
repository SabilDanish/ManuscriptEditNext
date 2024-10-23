import { createContext } from "react";
import { MainContextType } from "../utils/interfaces";



export const MainContext = createContext<MainContextType>({
    selectedAddons: [],
    setSelectedAddons: () => {},
    freeService: [],
    setFreeService: () => {},
    checkedItems: {},
    setCheckedItems: () => {},
    removeFreeService: () => {},
    prices: 0,
    setPrices: () => {}
});