//1.
let respuesta= prompt("¿Eres bellisimo/a?");
console.log("respuesta" + respuesta );
if(respuesta=="SI"|| respuesta=="si"|| respuesta == "Si"){
    alert ("Ciertamente");}
   else if(respuesta=="NO"|| respuesta=="no"|| respuesta == "No"){
    alert ("No te creo");
   }
   else{
    alert ("respuesta invalida");
   }

//2.
let num= prompt("dime un numero");
let numero= parseInt (num);
console.log("el numero es" + numero );
if(numero % 2 == 0){
    alert( numero + "es divisible entre 2");
}
else{
    alert(numero +  "NO es divisible entre 2");
}
//3.
num= prompt("dime un numero");
 numero= parseInt (num);
console.log("el numero es" + numero );
if(numero % 2 == 0){
    alert( numero  + " es par");
}
else{
    alert(numero  +  " NO es par");
}
//4.
 num= prompt("dime tu numero de cliente");
 numero= parseInt (num);
console.log("el numero es" + numero );
if(numero  == 1000){
    alert( "Gansate un Premio");
}
else{
    alert(numero  +  " Lo sentimos, sigue participando");
}
//5.

let num1= prompt("dime un numero");
let numero1= parseInt(num1);
let num2 = prompt ("Dime otro numero");
let numero2 = parseInt (num2);
if(numero1<numero2){
    alert(numero1 + " es menor");
} 
else{
    alert(numero2 + " es menor");
}

//6.

num1= prompt("dime un numero");
numero1= parseInt(num1);
num2 = prompt ("Dime otro numero");
numero2 = parseInt (num2);
let num3 = prompt ("Dime otro numero");
let numero3 = parseInt (num3);

if (numero1==numero2){
    if (numero1 < numero3){
        alert(numero1 + " es menor");
    }
    else{
        alert(numero3 + " es menor");
    }
}
else if (numero1=numero3){
    if (numero1 < numero2){
        alert(numero1 + " es menor");
    }
    else{
        alert(numero2 + " es menor");
    }
}
else if (numero2=numero3){
    if (numero1 < numero2){
        alert(numero1 + " es menor");
    }
    else{
        alert(numero2 + " es menor");
    }
}

else if(numero1<numero2 && numero1<numero3){
    alert(numero1 + " es menor"); 
}
else if(numero2<numero1 && numero2<numero3){
    alert(numero2 + " es menor"); 
}
else if(numero3<numero1 && numero3<numero2){
    alert(numero3 + " es menor"); 
}
//7.
let dia= prompt ("ingresa un dia de la semana");

if(dia.toLowerCase()== "lunes"){
    alert("horario de atencion hasta las 5 p.m");
}
else if (dia.toLowerCase() == "viernes"){
    alert("horario de atencion hasta las 12 m");
}
else if (dia.toLowerCase() == "sabado" || dia.toLowerCase() == "domingo" ){
    alert("fines de semana no hay atencion");
}
else{
    alert("Verifica con tu asesor los horarios de atencion");

}
//8.
let calificacion= prompt("ingresa tu calificacion");
let calif= parseInt(calificacion);
if(calif<1 || calif>10){
    alert("La calificacion no es correcta");
}
else if(calif<6){
    alert("Reprobado");
}
else if(calif>=6 && calif<=8){
    alert("Regular");
}
else if(calif=9){
    alert("BIen");
}
else if(calif=10){
    alert("Excelente");
}
//9.
let topping= prompt("Digita el topping que deseas")

if(topping.toLowerCase()=="oreo"){
    alert("EL precio es 10 MXN")
}
else if(topping.toLowerCase()=="kitkat"){   
    alert("EL precio es 15 MXN")
}
else if(topping.toLowerCase()=="brownie"){
    alert("EL precio es 20 MXN")
}
else{
    alert("no tenemos este topping, lo sentimos. EL precio del helado sin topping es 50MXN")
}

//10-11.

let nivel = prompt("A cual nivel deseas ingresar?");
let costoTotal;
let costoMes;
let beca;
let nombreBeca;
if (nivel.toLowerCase() == "course") {
    costoMes = 4999
    costoTotal = costoMes * 2
    beca = prompt("Tienes alguna beca");
}
else if (nivel.toLowerCase() == "carrera") {
    costoMes = 3999
    costoTotal = costoMes * 6
    beca = prompt("Tienes alguna beca");
}
else if (nivel.toLowerCase() == "master") {
    costoMes = 2999
    costoTotal = costoMes * 12
    beca = prompt("Tienes alguna beca?");

}
else {
    alert("Ese curso no lo ofrecemos")
}
if (beca.toLocaleLowerCase() == "si") {

    nombreBeca = prompt("dime el nombre de tu beca");
  
    if (nombreBeca.toLowerCase() == "facebook") {
        costoMes = costoMes * 0.8;
        costoTotal = costoTotal * 0.8;
        
    }
    else if (nombreBeca.toLowerCase() == "google") {
        costoTotal = costoTotal * 0.75;
        costoMes = costoMes * 0.75;
    }
    else if (nombreBeca.toLowerCase() == "jesua") {
        costoTotal = costoTotal * 0.5;
        costoMes = costoMes * 0.5;
    }
}

alert("El costo mensual con descuento es " + costoMes + " y el costo total del curso es " + costoTotal);*/

//12.

let tipoCoche;
let precioKm;
let kmRecorridos;
let litros;
let costoTotalV;

tipoCoche= prompt("cual es tu tipo de vehiculo?");
if(tipoCoche.toLowerCase()=="coche"){
    precioKm= 0.2

}
else if(tipoCoche.toLowerCase()=="moto"){
    precioKm= 0.1
    
}
else if(tipoCoche.toLowerCase()=="autobus"){
    precioKm= 0.5
    
}
kmRecorridos= prompt("Cuantos kilometros ha recorrido?");
costoTotalV= precioKm*kmRecorridos;
litros= prompt("Cuantos litros ha consumido?");

if (litros>=0 && litros<=100){
    costoTotalV= costoTotalV+5;
}
else{
    costoTotalV= costoTotalV+10;
}
alert("El costo total es "+ costoTotalV);
