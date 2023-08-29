import inquirer from "inquirer";
import { modeloMenu } from "./modelos/modelos.js";

export const funcionOpciones = async (
  nombre: string,
  message: string,
  datos: string[]
) => {
  if (nombre !== "opcionValor") {
    console.log(
      "***************************************************************************** \n"
    );
  }
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: nombre,
      message: message,
      choices: datos,
    },
  ]);
  return answers;
};

export async function propmInput(nombre: string, message: string) {
  const answers = await inquirer.prompt({
    type: "input",
    name: nombre,
    message: `${message}:`,
  });

  return answers;
}
