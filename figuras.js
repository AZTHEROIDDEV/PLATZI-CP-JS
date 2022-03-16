const areaTriangulo = (base, altura) => {
  return "el area del triangulo es igual a: " + (base * altura) / 2;
};
const perimetroTriangulo = (lado1, lado2, lado3) => {
  return `el Perimetro del triangulo es igual a: ${lado1 + lado2 + lado3}`;
};

function areaCuadrado(l1) {
    return "el area del Cuadrado es igual a: " + l1 * l1;
}
const perimetroCuadrado = (l1) => {
  return "el perimetro del cuadrado es igual a: " + l1 * 4;
};

const perimetroCirculo = (diametro) => {
  return "el perimetro del circulo es igual a: " + diametro * 3.1416;
};
const areaCirculo = (radio) => {
  return "el area del circulo es igual a: " + (3.1416 * (radio ** 2));
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

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    
    console.log(typeof value1);
    console.log(typeof value2);
    console.log(typeof value3);
  
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
  }
  
  function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const value1 = input1.value;
    const value2 = input2.value;
   
    const area = areaTriangulo(value1, value2);
    alert(area);
  }


  function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = (input.value)*2;
  
  
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
  }
  
  function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
  
    const area = areaCirculo(value);
    alert(area);
  }

