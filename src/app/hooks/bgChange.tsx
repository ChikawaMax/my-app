import { useEffect } from "react";

export const BgChange = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "red";
        return () => {
            document.body.style.backgroundColor = "";
        }
    }, []);
}