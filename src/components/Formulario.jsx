import { Fragment, useContext } from "react";
import { marcas, years, planes } from "../constants";
import CotizadorContext from "../context/CotizadorProvider";
import Error from "./Error";

const Formulario = () => {
    const { datos, handleCambiarDatos, error, setError, cotizarSeguro } = useContext(CotizadorContext);

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setError('');

        cotizarSeguro();
    }
    return (
        <>
            {error && <Error />}
            <form onSubmit={handleSubmit} noValidate>
                <div className="my-6">
                    <label htmlFor="marca" className="block mb-3 font-bold text-gray-600 uppercase">Marca</label>

                    <select id="marca" name="marca" className="w-full p-3 bg-white border border-gray-200" value={datos?.marca} onChange={e => handleCambiarDatos(e)}>
                        <option value="">-- Seleccionar --</option>

                        {marcas.map(marca => (
                            <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="my-6">
                    <label htmlFor="year" className="block mb-3 font-bold text-gray-600 uppercase">Año</label>

                    <select id="year" name="year" className="w-full p-3 bg-white border border-gray-200" value={datos?.year} onChange={e => handleCambiarDatos(e)}>
                        <option value="">-- Seleccionar --</option>

                        {years.map(year => (
                                <option key={year} value={year}>{year}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="my-6">
                    <label htmlFor="plan" className="block mb-3 font-bold text-gray-600 uppercase">Elige un Plan</label>

                    <div className="flex gap-3 items-center">
                        {planes.map(plan => (
                            <Fragment key={plan.id}>
                                <label>{plan.nombre}</label>

                                <input type="radio" name="plan" value={plan.id} onChange={e => handleCambiarDatos(e)} />
                            </Fragment>
                        ))}
                    </div>
                </div>

                <input
                    type="submit"
                    className="mt-4 w-full rounded-md bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario;