import { propmInput } from "../menu.js";
import { enumLenguaje } from "../modelos/modelos.js";
import {
  concatenacionLenguaje,
  convertirEnArray,
  interseccionLenguaje,
  inversaLenguaje,
  potenciacionLenguaje,
  restaLenguaje,
  unionLenguaje,
} from "../tipos/lenguaje.js";

export const casoLenguaje = async (opcion: string, salir: boolean) => {
  switch (opcion) {
    case enumLenguaje.Concatenacion: {
      console.log("Vacio utilizar @");
      const { lenguaje1 } = await propmInput(
        "lenguaje1",
        "Digite su primer lenguaje, separado por comas"
      );

      const { lenguaje2 } = await propmInput(
        "lenguaje2",
        "Digite su segundo alfabeto, separado por comas"
      );

      const datosConcatenacion = concatenacionLenguaje(
        lenguaje1.toString(),
        lenguaje2.toString()
      );
      console.log("\n", `L1.L2 = ${datosConcatenacion}`, "\n");
      break;
    }

    case enumLenguaje.Potencia: {
      console.log("Vacio utilizar @");
      const { lenguaje } = await propmInput(
        "lenguaje",
        "Digite lenguaje, separado por comas"
      );

      const { potencia } = await propmInput("potencia", "Digite la potencia");
      const arrayLenguaje = convertirEnArray(lenguaje.toString());
      const valor = valorUnicode(Number(potencia));

      if (Number(potencia) === 0) {
        console.log("\n", `L${valor} = {0}`, "\n");
        break;
      }

      if (Number(potencia) === 1) {
        console.log("\n", `L${valor} = {${arrayLenguaje.toString()}}`, "\n");
        break;
      }

      const datosPotencia = potenciacionLenguaje(
        arrayLenguaje,
        Number(potencia)
      );

      console.log("\n", `L${valor} = {${datosPotencia.toString()}}`, "\n");

      break;
    }

    case enumLenguaje.Kleene: {
      console.log("Vacio utilizar @");
      const { lenguaje } = await propmInput(
        "lenguaje",
        "Digite lenguaje, separado por comas"
      );

      const potencia = 3;
      const arrayLenguaje = convertirEnArray(lenguaje.toString());
      const datosKleene = potenciacionLenguaje(arrayLenguaje, potencia);
      datosKleene.unshift("@"), datosKleene.push("...");
      console.log("\n", `L\u002A = {${datosKleene}}`, "\n");
      break;
    }

    case enumLenguaje.positiva: {
      console.log("Vacio utilizar @");
      const { lenguaje } = await propmInput(
        "lenguaje",
        "Digite lenguaje, separado por comas"
      );

      const potencia = 3;
      const arrayLenguaje = convertirEnArray(lenguaje.toString());
      const datosPositiva = potenciacionLenguaje(arrayLenguaje, potencia);
      datosPositiva.push("...");
      console.log("\n", `L+ = {${datosPositiva}}`, "\n");
      break;
    }

    case enumLenguaje.Trasposicion: {
      console.log("Vacio utilizar @");
      const { lenguaje } = await propmInput(
        "lenguaje",
        "Digite lenguaje, separado por comas"
      );

      const datosInversa = inversaLenguaje(lenguaje.toString());
      console.log("\n", `L\u1D3F = {${datosInversa.toString()}}`, "\n");
      break;
    }

    case enumLenguaje.Union: {
      console.log("Vacio utilizar @");
      const { lenguaje1 } = await propmInput(
        "lenguaje1",
        "Digite el primer lenguaje, separado por comas"
      );

      const { lenguaje2 } = await propmInput(
        "lenguaje2",
        "Digite el segundo lenguaje, separado por comas"
      );

      const datosUnion = unionLenguaje(
        lenguaje1.toString(),
        lenguaje2.toString()
      );
      console.log("\n", `L1UL2 = ${datosUnion}`, "\n");
      break;
    }

    case enumLenguaje.Interseccion: {
      console.log("Vacio utilizar @");
      const { lenguaje1 } = await propmInput(
        "lenguaje1",
        "Digite el primer lenguaje, separado por comas"
      );

      const { lenguaje2 } = await propmInput(
        "lenguaje2",
        "Digite el segundo lenguaje, separado por comas"
      );

      const datosInterseccion = interseccionLenguaje(
        lenguaje1.toString(),
        lenguaje2.toString()
      );
      console.log("\n", `L1⋂L2 = ${datosInterseccion}`, "\n");
      break;
    }

    case enumLenguaje.Resta: {
      console.log("Vacio utilizar @");
      const { lenguaje1 } = await propmInput(
        "lenguaje1",
        "Digite el primer lenguaje, separado por comas"
      );

      const { lenguaje2 } = await propmInput(
        "lenguaje2",
        "Digite el segundo lenguaje, separado por comas"
      );

      const datosResta1 = restaLenguaje(
        lenguaje1.toString(),
        lenguaje2.toString(),
        "l1-l2"
      );

      const datosResta2 = restaLenguaje(
        lenguaje1.toString(),
        lenguaje2.toString(),
        "l2-l1"
      );

      console.log("\n", `L1-L2 = ${datosResta1.toString()}`, "\n");
      console.log("\n", `L2-L1 = ${datosResta2.toString()}`, "\n");
      break;
    }

    case enumLenguaje.Salir: {
      salir = true;
      console.clear();
      break;
    }
    default: {
      console.log("Elija una opcion valida \n");
      break;
    }
  }

  return salir;
};

const valorUnicode = (potencia: number) => {
  let valor;
  switch (potencia) {
    case 0: {
      valor = "\u2070";
      break;
    }
    case 1: {
      valor = "\u00B9";
      break;
    }
    case 2: {
      valor = "\u00B2";
      break;
    }
    case 3: {
      valor = "\u00B3";
      break;
    }
    case 4: {
      valor = "\u2074";
      break;
    }
    case 5: {
      valor = "\u2075";
      break;
    }
    case 6: {
      valor = "\u2076";
      break;
    }
    case 7: {
      valor = "\u2077";
      break;
    }
    case 8: {
      valor = "\u2078";
      break;
    }
    case 9: {
      valor = "\u2079";
      break;
    }
  }

  return valor;
};
