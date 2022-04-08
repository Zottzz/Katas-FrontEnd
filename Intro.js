console.log("\n********Variables ****************\n")
var numero1 = 4 ;
var numero2 = 2 ;
console.log("Numero 1 :  " + numero1 + "  Numero 2 :  " + numero2);

console.log("\n***********Cadenas *************\n")
var frase;
frase1 = "ejemplo comillas dobles";
var frase2;
frase2 ="Ejemplo comillas simples";
var frase3;
frase3 = "ejemplo comillas invertidas";

console.log(frase1 +"\n"+ frase2 +"\n" + frase3 +"\n");

console.log("/n ***************Condicionales********");
console.log(numero1 != numero2);

console.log("/n ***************Operador logido AND ********");
console.log(true && false)

console.log("/n ***************Operadore logico OR********");
console.log(true|| false ) ;

console.log("/n ***************Arreglos********");
let listaDeNumeros = [2, 3, 5, 7, 11, 234];

console.log(listaDeNumeros[3]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);
console.log(listaDeNumeros);
console.log(listaDeNumeros.length);


let listaDePalabras = ["Exlporer","Mision Comander", "Launcher X", "Innovacion" ]
console.log(listaDePalabras);
console.log(listaDePalabras.length);


let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);


console.log("/n ***************Objetos********");

let Explorer = {
    nombre: "Nombre del explorer",
    email: "Josue:isack@hotmail.com",
    NoRegistro: 123213,
    mision:"Fronted",
    proyectos:["Abogabod", "Pasteleria","Vacunacion"],
    Proper:{
        Escuela:"Tareas",
        Profesiona:"Encontrar trabajo",
        Persona:"Dinero"
    }
};

console.log(Explorer);
console.log(Explorer.email);
console.log(Explorer.Proper);


//Flujo condicional
let number1 = 4;
let number2 = 2;
console.log("\n******** if / else ************ \n")

 if (number1 >number2) {
    console.log("El numero 1 es mayor que numero 2");
}
 else if(number1 == number2){
        console.log("Ambos numeros son iguales");
}
else {
    console.log("El numero 2 es mayor que el numero 1")  ;
}

//Ciclo condicional
    console.log("\n *************** While *********** \n")

    let numberWhile = 0 ;
    while(numberWhile <= 12 ) {
    console.log(numberWhile);
    numberWhile = numberWhile + 2;
}
console.log("Aqui ya salio de WHILE:  " + numberWhile);


//Ciclo Condicional de una itereaccion minimo DO WHILE
console.log("\n ***********************DO WHILE ************* \n")
let numeroDoWhile = 10 ;
do{
    numeroDoWhile = numeroDoWhile +2;
    console.log(numeroDoWhile);
}while (numeroDoWhile <20);
console.log("Aqui ya salio de DO  WHILE:  " + numeroDoWhile);

//Ciclo con iteraccion controlada
console.log("\n********** FOR *********\N")
let numeroFor =0;
for (numeroFor; numeroFor<=12; numeroFor= numeroFor + 1) {
    console.log(numeroFor);
}



//Opciones para evitar anidar condicionales
console.log("\n********** Switches  *********\N")
switch(prompt("¿Como esta el clima?")){
    case"lluvioso":
    console.log("No te vallas a mojar");
    break;
    case "soleado":
    console.log("Ponte bloqueador");
    break;
    case "nublado":
    console.log("Cubrete bien");
    break;
    default:
        console.log("No se como esta el clima"   )
        break;
}
console.log("aqui salimos del swtich");