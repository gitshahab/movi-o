import { useEffect } from "react"

export const useTitle = (str) => {
    useEffect(() => {
        document.title = `${str}-movi-o`;
    }, [str]);
    
    return str;
}
