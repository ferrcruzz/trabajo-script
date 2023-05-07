// Pedir al usuario que ingrese datos
let input1 = prompt("Ingrese un dato:");
let input2 = prompt("Ingrese otro dato:");

// Verificar si los datos son números
if (!isNaN(input1) && !isNaN(input2)) {
    // Si ambos datos son números, realizar suma
    let resultado = parseFloat(input1) + parseFloat(input2);
    console.log("El resultado de la suma es: " + resultado);
} else {
    // Si los datos no son números, realizar concatenación
    let resultado = input1 + " " + input2;
    alert("El resultado de la concatenación es: " + resultado);
}