import { enumAlfabetos } from "../modelos/modelos.js";
import {
  unionAlfabeto,
  pertenenciaAlfabeto,
  interseccionAlfabeto,
  complementoAlfabeto,
  diferenciaAbsolutaAlfabeto,
  diferenciaSimetricaAlfabeto,
} from "../tipos/alfabeto.js";
import { propmInput } from "../menu.js";

export const casoAlfabeto = async (opcion: string, salir: boolean) => {
  switch (opcion) {
    case enumAlfabetos.Union: {
      const { alfabeto1 } = await propmInput(
        "alfabeto1",
        "Digite su primer alfabeto, separado por comas"
      );

      const { alfabeto2 } = await propmInput(
        "alfabeto2",
        "Digite su segundo alfabeto, separado por comas"
      );

      const datosUnion = unionAlfabeto(
        alfabeto1.toString(),
        alfabeto2.toString()
      );
      console.log("\n", `AUB = ${datosUnion}`, "\n");
      break;
    }

    case enumAlfabetos.Pertenecia: {
      const { alfabeto } = await propmInput(
        "alfabeto",
        "Digite su alfabeto, separado por comas"
      );

      const { busqueda } = await propmInput(
        "busqueda",
        "Digite lo que desea buscar"
      );

      const resultadoPertenecia = pertenenciaAlfabeto(
        alfabeto.toString(),
        busqueda.toString()
      );

      console.log("\n", resultadoPertenecia, "\n");
      break;
    }

    case enumAlfabetos.Interseccion: {
      const { alfabeto1 } = await propmInput(
        "alfabeto1",
        "Digite su primer alfabeto, separado por comas"
      );

      const { alfabeto2 } = await propmInput(
        "alfabeto2",
        "Digite su segundo alfabeto, separado por comas"
      );

      const resultadoInterseccion = interseccionAlfabeto(
        alfabeto1.toString(),
        alfabeto2.toString()
      );

      console.log("\n", `A⋂B = ${resultadoInterseccion}`, "\n");
      break;
    }

    case enumAlfabetos.Complemento: {
      const { alfabeto1 } = await propmInput(
        "alfabeto1",
        "Digite su primer alfabeto, separado por comas"
      );

      const { alfabeto2 } = await propmInput(
        "alfabeto2",
        "Digite su segundo alfabeto, separado por comas"
      );

      const resultadoComplemento = complementoAlfabeto(
        alfabeto1.toString(),
        alfabeto2.toString()
      );

      console.log("\n", `B' = ${resultadoComplemento}`, "\n");
      break;
    }

    case enumAlfabetos.Absoluta: {
      const { alfabeto1 } = await propmInput(
        "alfabeto1",
        "Digite su primer alfabeto, separado por comas"
      );

      const { alfabeto2 } = await propmInput(
        "alfabeto2",
        "Digite su segundo alfabeto, separado por comas"
      );

      const resultadoAbsoluta = diferenciaAbsolutaAlfabeto(
        alfabeto1.toString(),
        alfabeto2.toString()
      );

      console.log("\n", `A\\B = ${resultadoAbsoluta}`, "\n");
      break;
    }

    case enumAlfabetos.Simetrica: {
      const { alfabeto1 } = await propmInput(
        "alfabeto1",
        "Digite su primer alfabeto, separado por comas"
      );

      const { alfabeto2 } = await propmInput(
        "alfabeto2",
        "Digite su segundo alfabeto, separado por comas"
      );

      const resultadoSimetrica = diferenciaSimetricaAlfabeto(
        alfabeto1.toString(),
        alfabeto2.toString()
      );

      console.log("\n", `A∆B = ${resultadoSimetrica}`, "\n");
      break;
    }

    case enumAlfabetos.Salir: {
      salir = true;
      console.clear();
      break;
    }

    default: {
      console.log("Elija una opcion valida");
      console.log("\n");
      break;
    }
  }
  return salir;
};

// const convertirString = (cadena: string | number) => {
//   if (typeof cadena == "string") return cadena;

//   return cadena.toString();
// };
