
export const obtenerDiferenciaPorYears = year => {
    return new Date().getFullYear() - year
}

export const calcularMarca = marca => {
    let incremento = 0;

    switch (marca) {
        case "1":
            incremento = 1.3;
            break;
        case "2":
            incremento = 1.15;
            break;
        case "3":
            incremento = 1.85;
            break;
        default:
            break;
    }

    return incremento;
}

export const calcularPlan = plan => {
    return plan === "1" ? 1.2 : 1.5;
}

export const dosDecimales = numero => {
    let cadenaNumero = numero.toString();
    let regex = /(\d*.\d{0,2})/;

    return parseFloat(cadenaNumero.match(regex)[0]);
}