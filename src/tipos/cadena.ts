export const longitudCadena = (cadena: string) => {
    return cadena.length.toString();
  };
  
  export const concatenacionCadena = (cadena1: string, cadena2: string) => {
    return cadena1.concat(cadena2);
  };
  
  export const potenciacionCadena = (cadena: string, potencia: number) => {
    let cadenaPotenciada: string = cadena;
  
    if (potencia === 0) return "@";
  
    for (let i = 0; i < potencia - 1; i++) {
      cadenaPotenciada += cadena;
    }
    return cadenaPotenciada;
  };
  
  export const inversaCadena = (cadena: string) => {
    return cadena.split("").reverse().join("");
  };
  