import { useContext } from "react";
import Formulario from "./Formulario";
import CotizadorContext from "../context/CotizadorProvider";
import Spinner from "./Spinner";
import Cotizacion from "./Cotizacion";

const AppSeguro = () => {
  const { cotizacion, cargando } = useContext(CotizadorContext);
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Coche</h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
        <Formulario />

        {cargando ? <Spinner /> : <Cotizacion />}
      </main>
    </>
  )
}

export default AppSeguro;