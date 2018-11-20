
function gettiempo(newtiempo,con) {

  for (var i = 0; i < 1; i--) {
    if (newtiempo>0) {
      time.push(newtiempo);
      break;
    }else {
      alert("ERROR, el valor debe ser mayor a 0");
      newtiempo=Number(prompt("introduce el tiempo de vuelta o introduce salir"));
    }
  }
  }
function salir(salida) {
  if (salida=="si") {
    salida="si"
  }else {
    salida="no"
  }
}
function resultadoM(time) {
  for (var i = 0; i < time.length; i++) {
    if (time[i]<mejorRes) {
      mejorRes=time[i]
    }
}
}
function resultadoP(time) {
  for (var i = 0; i < time.length; i++) {
    if (time[i]>peorRes) {
      peorRes=time[i]
    }
}
}
function mediaV(time) {
  let sumavueltas=0
  let variables=0
  for (var i = 0; i < time.length; i++) {
    sumavueltas=sumavueltas + time[i]
    variables=time.length
    tiempoMedio=(sumavueltas/variables)
  }
}




var time=[ ]
var mejorRes=1000;
var peorRes=0;
var tiempoMedio=0;
var newtiempo=0;
var salida=0



while (salida!="si") {

  newtiempo=Number(prompt("introduce el tiempo de vuelta o introduce salir"));
  gettiempo(newtiempo);
  salida=prompt("¿deseas salir?(si o no)")
  salir(salida);
  console.log(time);
}

resultadoM(time);
console.log("el mejor tiempo es "+ mejorRes);

resultadoP(time);
console.log("el peor tiempo es "+ peorRes);

mediaV(time);
console.log("la media de tiempos es "+ tiempoMedio);
