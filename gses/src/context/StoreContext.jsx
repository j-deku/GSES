import { useState } from "react";
import { Children } from "react";
import { createContext } from "react";

export const createStoreContext = createContext();
const contextProvider = ({Children}) =>{
    const [userData, setUserdata] = useState([]);


    const contextValue = () =>{
        userData,
        setUserdata,
    }

    <contextProvider.provider>
        <contextValue.childre/>
    </contextProvider.provider>
}


export default contextProvider;