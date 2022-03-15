const areaTriangulo = (base, altura) => {
  return "el area del triaungulo es igual a: " + (base * altura) / 2;
};
const perimetroTriangulo = (l1, l2, l3) => {
  return "el Perimetro del triaungulo es igual a: " + (l1 + l2 + l3);
};

const areaCuadrado = (l1) => {
  return "el area del Cuadrado es igual a: " + l1 * l1;
};
const perimetroCuadrado = (l1) => {
  return "el perimetro del cuadrado es igual a: " + l1 * 4;
};

const perimetroCirculo = (diametro) => {
  return "el perimetro del circulo es igual a: " + diametro * 3.1416;
};
const areaCirculo = (radio) => {
  return "el area del circulo es igual a: " + (3.1416 * radio) ** 2;
};

// Aqui se inteeractura con el html

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
