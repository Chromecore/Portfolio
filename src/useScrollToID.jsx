import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToID = () =>
{
    const location = useLocation();

    useEffect(() =>
    {
        if (location.hash)
        {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element)
            {
                element.scrollIntoView();
            }
        }
    }, [location]);
};

export default useScrollToID;