import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, dosDecimales, obtenerDiferenciaPorYears } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [cotizacion, setCotizacion] = useState(0);
    const [error, setError] = useState('');
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });
    const [cargando, setCargando] = useState(false);

    const handleCambiarDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        });
    };

    const cotizarSeguro = () => {
        // Base
        let resultado = 2000;

        // Obtener diferencia de años
        const diferencia = obtenerDiferenciaPorYears(datos.year);

        // Restar 3% por cada año
        resultado -= ((diferencia * 3) * resultado / 100);
        /*
            Americano -> 15%
            Europeo -> 30%
            Asiático -> 5%
        */
        resultado *= calcularMarca(datos.marca);

        /*
            Básico -> 20%
            Completo -> 50%
        */
        resultado *= calcularPlan(datos.plan);

        // Formatear dinero
        resultado = dosDecimales(resultado);

        setCargando(true);

        setTimeout(() => {
            setCotizacion(resultado);
            setCargando(false);
        }, 2000);

    }

    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleCambiarDatos,
                error,
                setError,
                cotizarSeguro,
                cotizacion,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export { CotizadorProvider }

export default CotizadorContext;