export const unionAlfabeto = (alfabeto1: string, alfabeto2: string) => {
    const coma = ",";
    const unionAlfabetos = alfabeto1.concat(coma, alfabeto2);
    return `{${unionAlfabetos}}`;
  };
  
  //Creado
  export const pertenenciaAlfabeto = (
    alfabeto: string,
    busqueda: string
  ): string => {
    const isPertenece = alfabeto.includes(busqueda);
    return isPertenece ? "B ∈ A" : "B ∉ A";
  };
  
  //Creado
  export const interseccionAlfabeto = (alfabeto1: string, alfabeto2: string) => {
    const arrayAlfabeto1 = convertirEnArray(alfabeto1);
    const longitudAlfabeto1 = arrayAlfabeto1.length;
    const arrayAlfabeto2 = convertirEnArray(alfabeto2);
    const longitudAlfabeto2 = arrayAlfabeto2.length;
    const datosIntersectados: string[] = [];
  
    if (longitudAlfabeto1 > longitudAlfabeto2) {
      arrayAlfabeto1.forEach((item) => {
        if (arrayAlfabeto2.includes(item)) {
          datosIntersectados.push(item);
        }
      });
    } else {
      arrayAlfabeto2.forEach((item) => {
        if (arrayAlfabeto1.includes(item)) {
          datosIntersectados.push(item);
        }
      });
    }
  
    if (datosIntersectados.length === 0) {
      return "0";
    }
  
    return `{${datosIntersectados.toString()}}`;
  };
  
  //Creado
  export const complementoAlfabeto = (alfabeto1: string, alfabeto2: string) => {
    const arrayAlfabeto1 = convertirEnArray(alfabeto1);
    const longitudAlfabeto1 = arrayAlfabeto1.length;
    const arrayAlfabeto2 = convertirEnArray(alfabeto2);
    const longitudAlfabeto2 = arrayAlfabeto2.length;
    const datosComplementados: string[] = [];
  
    if (longitudAlfabeto1 > longitudAlfabeto2) {
      arrayAlfabeto1.forEach((item) => {
        if (!arrayAlfabeto2.includes(item)) {
          datosComplementados.push(item);
        }
      });
    } else {
      arrayAlfabeto2.forEach((item) => {
        if (!arrayAlfabeto1.includes(item)) {
          datosComplementados.push(item);
        }
      });
    }
    return `{${datosComplementados.toString()}}`;
  };
  
  export const diferenciaAbsolutaAlfabeto = (
    alfabeto1: string,
    alfabeto2: string
  ) => {
    const arrayAlfabeto1 = convertirEnArray(alfabeto1);
    const arrayAlfabeto2 = convertirEnArray(alfabeto2);
    const datosAbsolutos: string[] = [];
  
    arrayAlfabeto1.forEach((item) => {
      if (!arrayAlfabeto2.includes(item)) {
        datosAbsolutos.push(item);
      }
    });
    return `{${datosAbsolutos}}`;
  };
  
  export const diferenciaSimetricaAlfabeto = (
    alfabeto1: string,
    alfabeto2: string
  ) => {
    const arrayAlfabeto1 = convertirEnArray(alfabeto1);
    const arrayAlfabeto2 = convertirEnArray(alfabeto2);
    const datosIntersectados: string[] = [];
  
    arrayAlfabeto1.forEach((item) => {
      if (!arrayAlfabeto2.includes(item)) {
        datosIntersectados.push(item);
      }
    });
  
    arrayAlfabeto2.forEach((item) => {
      if (!arrayAlfabeto1.includes(item)) {
        datosIntersectados.push(item);
      }
    });
    return `{${datosIntersectados}}`;
  };
  
  function convertirEnArray(texto: string) {
    const array = Array.from(texto, (x) => x !== "," && x !== " " && x).filter(
      (item) => item !== false
    );
  
    return array as string[];
  }
  