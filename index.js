
const funciones = require("./operaciones");


function parsearTerminos(texto) {

  const resultado = {};
  texto.forEach(function (item, nro) {
    
    if (item.includes("+")) {
        resultado.primerTermino = texto[nro - 1] 
        resultado.operador = texto[nro]
        resultado.segundoTermino = texto[nro + 1]
    }  
   
  });
   

  texto.forEach(function (item, nro){
    if (item.includes("-")) {
      resultado.primerTermino = texto[nro - 1] 
      resultado.operador = texto[nro]
      resultado.segundoTermino = texto[nro + 1]
    }  
    
  });

  texto.forEach(function (item,nro) {
    if (item.includes("/")) {
     resultado.primerTermino = texto[nro - 1] 
     resultado.operador = texto[nro]
     resultado.segundoTermino = texto[nro + 1]
    }

  });

  texto.forEach(function (item, nro) {
    if (item.includes("*")) {
      resultado.primerTermino = texto[nro - 1] 
      resultado.operador = texto[nro]
      resultado.segundoTermino = texto[nro + 1]
    }  
    
  });

  return resultado
   
   
}

function ejecutarOperacion(objetoOperacion) {
  const mapa = {

    "+": funciones.suma,
    "-": funciones.resta,
    "*": funciones.multiplicacion,
    "/": funciones.division,
    
  };

  const simbolo = objetoOperacion.operador;
  const ejecutor = mapa[simbolo];
  
  return ejecutor(Number(objetoOperacion.primerTermino), Number(objetoOperacion.segundoTermino));
     
};

function main() {
  const operacionParceada = parsearTerminos(process.argv.slice(2));
  const result = ejecutarOperacion(operacionParceada);
  console.log(result);
}
main();
  

  
  
