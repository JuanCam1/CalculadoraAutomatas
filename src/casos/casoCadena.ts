import { propmInput } from "../menu.js";
import { enumCadena } from "../modelos/modelos.js";
import {
  concatenacionCadena,
  inversaCadena,
  longitudCadena,
  potenciacionCadena,
} from "../tipos/cadena.js";

export const casoCadena = async (opcion: string, salir: boolean) => {
  switch (opcion) {
    case enumCadena.Longitud: {
      const { cadena1 } = await propmInput("cadena1", "Digite su cadena");

      const datosLongitud = longitudCadena(cadena1.toString());

      console.log("\n", `Long A = ${datosLongitud}`, "\n");
      break;
    }

    case enumCadena.Concatenacion: {
      const { cadena1 } = await propmInput(
        "cadena1",
        "Digite su primera cadena"
      );

      const { cadena2 } = await propmInput(
        "cadena2",
        "Digite su segunda cadena"
      );

      const datosConcatenacion = concatenacionCadena(
        cadena1.toString(),
        cadena2.toString()
      );
      console.log("\n", datosConcatenacion, "\n");
      break;
    }

    case enumCadena.Potenciacion: {
      const { cadena } = await propmInput("cadena", "Digite su cadena");

      const { potencia } = await propmInput("potencia", "Digite la potencia");

      const datosPotencia = potenciacionCadena(
        cadena.toString(),
        Number(potencia)
      );
      console.log("\n", datosPotencia, "\n");
      break;
    }

    case enumCadena.Inversa: {
      const { cadena } = await propmInput("cadena", "Digite su cadena");

      const datosInversa = inversaCadena(cadena.toString());
      console.log("\n", datosInversa, "\n");
      break;
    }
    case enumCadena.Salir: {
      salir = true;
      console.clear();
      break;
    }
    default: {
      console.log("Elija una opcion valida");
      break;
    }
  }
  return salir;
};
