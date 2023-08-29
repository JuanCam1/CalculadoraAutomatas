import { funcionOpciones } from "./menu.js";
import { casoAlfabeto } from "./casos/casoAlfabeto.js";
import { casoLenguaje } from "./casos/casoLenguaje.js";
import { casoCadena } from "./casos/casoCadena.js";
import {
  modeloAlfabeto,
  modeloCadena,
  modeloLenguaje,
  modeloMenu,
} from "./modelos/modelos.js";

async function main() {
  let salir = false;
  let opcion = "Salir";

  do {
    console.log("\n");
    console.log("\x1b[35m", "Calculadora automatas y Lenguajes Formales \n");

    const { opcionValor } = await funcionOpciones(
      "opcionValor",
      "Elija la opción que desea?",
      modeloMenu
    );
    opcion = opcionValor as string;

    console.log("\n");
    switch (opcion) {
      case "Alfabeto": {
        let salirAlfabeto = false;
        let opcion = "Salir";

        do {
          const { opcionAlfabeto } = await funcionOpciones(
            "opcionAlfabeto",
            "¿Que operación de alfabeto deseas?",
            modeloAlfabeto
          );
          console.log("\n");
          opcion = opcionAlfabeto as string;

          salirAlfabeto = await casoAlfabeto(opcion, salirAlfabeto);
        } while (!salirAlfabeto);
        break;
      }

      case "Cadena": {
        let salirCadena = false;
        let opcion = "Salir";

        do {
          const { opcionCadena } = await funcionOpciones(
            "opcionCadena",
            "¿Que operación de cadena deseas?",
            modeloCadena
          );
          console.log("\n");

          opcion = opcionCadena as string;
          salirCadena = await casoCadena(opcion, salirCadena);
        } while (!salirCadena);
        break;
      }

      case "Lenguaje": {
        let salirLenguaje = false;
        let opcion = "Salir";

        do {
          const { opcionLenguaje } = await funcionOpciones(
            "opcionLenguaje",
            "¿Que operación de lenguaje deseas?",
            modeloLenguaje
          );
          console.log("\n");

          opcion = opcionLenguaje as string;
          salirLenguaje = await casoLenguaje(opcion, salirLenguaje);
        } while (!salirLenguaje);
        break;
      }

      case "Salir": {
        salir = true;
        console.clear();
        break;
      }
    }
  } while (!salir);
}

main();
