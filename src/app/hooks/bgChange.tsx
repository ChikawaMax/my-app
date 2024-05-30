import { useEffect } from "react";

export const bgChange = () => {
    useEffect(() => {
        document.body.style.backgroundColor = "red";
        return () => {
            document.body.style.backgroundColor = "";
        }
    }, []);
}