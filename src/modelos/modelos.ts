export const modeloMenu = ["Alfabeto", "Cadena", "Lenguaje", "Salir"];

export const modeloAlfabeto = [
  "Unión",
  "Pertenecia",
  "Intersección",
  "Complemento",
  "Diferencia Absoluta",
  "Diferencia Simetrica",
  "Salir",
];

export const modeloCadena = [
  "Longitud",
  "Concatenación",
  "Potenciación",
  "Inversa",
  "Salir",
];

export const modeloLenguaje = [
  "Concatenación",
  "Potencia",
  "Trasposición",
  "Unión",
  "Intersección",
  "Resta",
  "Clausura de Kleene",
  "Clausura Positiva",
  "Salir",
];

export const enum enumLenguaje {
  Concatenacion = "Concatenación",
  Potencia = "Potencia",
  Trasposicion = "Trasposición",
  Union = "Unión",
  Interseccion = "Intersección",
  Resta = "Resta",
  Kleene = "Clausura de Kleene",
  positiva = "Clausura Positiva",
  Salir = "Salir",
}

export const enum enumCadena {
  Longitud = "Longitud",
  Concatenacion = "Concatenación",
  Potenciacion = "Potenciación",
  Inversa = "Inversa",
  Salir = "Salir",
}

export const enum enumAlfabetos {
  Union = "Unión",
  Pertenecia = "Pertenecia",
  Interseccion = "Intersección",
  Complemento = "Complemento",
  Absoluta = "Diferencia Absoluta",
  Simetrica = "Diferencia Simetrica",
  Salir = "Salir",
}
