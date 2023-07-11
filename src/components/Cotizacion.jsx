import { useContext, useMemo } from "react";
import CotizadorContext from "../context/CotizadorProvider";
import { marcas, planes } from "../constants";

const Cotizacion = () => {
    const { cotizacion, datos } = useContext(CotizadorContext);
    const { marca, plan, year } = datos;

    if (cotizacion == 0) return;

    const [marcaCotizacion] = useMemo(() =>
        marcas.filter(marcaState => marcaState.id == Number(marca)),
        [cotizacion]
    );
    const [planCotizacion] = useMemo(() =>
        planes.filter(planState => planState.id == Number(plan)),
        [cotizacion]
    );

    return (
        <div className="bg-gray-100 text-center mt-8 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Resumen
            </h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {marcaCotizacion?.nombre}
            </p>

            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {planCotizacion?.nombre}
            </p>

            <p className="my-2">
                <span className="font-bold">Año del Coche: </span>
                {year}
            </p>

            <p className="my-4 text-2xl">
                <span className="font-bold">Total de Cotización: </span>
                {cotizacion % 1 == 0 ? cotizacion : cotizacion.toString().replace('.', ',')} €
            </p>
        </div>
    )
}

export default Cotizacion;