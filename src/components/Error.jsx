import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const Error = () => {
    const { error } = useContext(CotizadorContext);

    return (
        <div className="rounded-md border bg-gradient-to-br from-red-500 to-red-700 py-2.5 text-white font-bold text-center">
            <p>{error}</p>
        </div>
    )
}

export default Error;