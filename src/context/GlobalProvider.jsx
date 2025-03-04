import { createContext, useContext, useReducer } from "react"
import { IconActiveReducer } from "./IconActiveReducer";
import { iniIcons } from "./IconData";

const Context = createContext();

export const UseGlobalContext = () =>{
    const context = useContext(Context)
    return context;
}

export const GlobalProvider = ({children}) => {
    const [iconActive, dispatchIcons] = useReducer(IconActiveReducer , iniIcons)

    const idIconsActive = iconActive.filter(icon => icon.active).map(icon => icon.id);

    const add_RemoveIcons = (icon) => {
      dispatchIcons({
            type: "TOGGLE_FILTER",
            payload: icon
        });
    };


  return (
    <Context.Provider value={{
      add_RemoveIcons,
        iconActive,
        idIconsActive
    }}>
        {children}
    </Context.Provider>
  )
}
