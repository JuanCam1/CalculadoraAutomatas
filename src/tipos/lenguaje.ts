export const concatenacionLenguaje = (lenguaje1: string, lenguaje2: string) => {
    const arrayAlfabeto1 = convertirEnArray(lenguaje1);
    const arrayAlfabeto2 = convertirEnArray(lenguaje2);
    const longitudAlfabeto1 = arrayAlfabeto1.length;
    const longitudAlfabeto2 = arrayAlfabeto2.length;
  
    const datosConcatenados: string[] = [];
  
    if (longitudAlfabeto2 > longitudAlfabeto1) {
      for (let i = 0; i <= longitudAlfabeto2 - 1; i++) {
        for (let j = 0; j <= longitudAlfabeto1 - 1; j++) {
          datosConcatenados.push(`${arrayAlfabeto1[j]}${arrayAlfabeto2[i]}`);
        }
      }
    } else {
      for (let i = 0; i <= longitudAlfabeto1 - 1; i++) {
        for (let j = 0; j <= longitudAlfabeto2 - 1; j++) {
          datosConcatenados.push(`${arrayAlfabeto1[i]}${arrayAlfabeto2[j]}`);
        }
      }
    }
    return `{${datosConcatenados.toString()}}`;
  };
  
  export function potenciacionLenguaje(
    language: string[],
    exponent: number
  ): string[] {
    if (exponent === 0) {
      return [""];
    }
  
    const result:string[] = [];
    for (const cadena of language) {
      const partialLanguage = potenciacionLenguaje(language, exponent - 1);
      for (const partialSymbol of partialLanguage) {
        result.push(`${cadena}${partialSymbol}`);
      }
    }  
    return result;
  }
  
  export function inversaLenguaje(lenguaje: string): string[] {
    const arrayLenguaje = convertirEnArray(lenguaje);
  
    let arrayRevertido = arrayLenguaje.map((cad) =>
      cad.split("").reverse().join("")
    );
    return arrayRevertido;
  }
  
  export function unionLenguaje(lenguaje1: string, lenguaje2: string) {
    const arrayLenguaje1 = removeDuplicates(convertirEnArray(lenguaje1));
    const arrayLenguaje2 = removeDuplicates(convertirEnArray(lenguaje2));
    const newArray: string[] = [];
  
    arrayLenguaje1.forEach((item) => {
      if (!newArray.includes(item)) {
        newArray.push(item);
      }
      return;
    });
  
    arrayLenguaje2.forEach((item) => {
      if (!newArray.includes(item)) {
        newArray.push(item);
      }
      return;
    });
    return `{${newArray.toString()}}`;
  }
  
  export function interseccionLenguaje(lenguaje1: string, lenguaje2: string) {
    const arrayLenguaje1 = convertirEnArray(lenguaje1);
    const arrayLenguaje2 = convertirEnArray(lenguaje2);
    const lengthLen1 = arrayLenguaje1.length;
    const lengthLen2 = arrayLenguaje2.length;
    const newArray: string[] = [];
  
    if (lengthLen1 > lengthLen2) {
      arrayLenguaje1.forEach((item) => {
        if (arrayLenguaje2.includes(item)) {
          newArray.push(item);
        }
        return;
      });
    } else {
      arrayLenguaje2.forEach((item) => {
        if (arrayLenguaje1.includes(item)) {
          newArray.push(item);
        }
        return;
      });
    }
    return `{${newArray.toString()}}`;
  }
  
  export function restaLenguaje(
    lenguaje1: string,
    lenguaje2: string,
    opcion: string
  ) {
    const arrayLenguaje1 = convertirEnArray(lenguaje1);
    const arrayLenguaje2 = convertirEnArray(lenguaje2);
    const newArray: string[] = [];
  
    if (opcion === "l1-l2") {
      arrayLenguaje1.forEach((item) => {
        if (!arrayLenguaje2.includes(item)) {
          newArray.push(item);
        }
        return;
      });
    }
  
    if (opcion === "l2-l1") {
      arrayLenguaje2.forEach((item) => {
        if (!arrayLenguaje1.includes(item)) {
          newArray.push(item);
        }
        return;
      });
    }
    return `{${newArray.toString()}}`;
  }
  
  export function convertirEnArray(texto: string) {
    const array = texto.split(",");
  
    return array;
  }
  
  function removeDuplicates(array:string[]) {
    return [...new Set(array)];
  }
  