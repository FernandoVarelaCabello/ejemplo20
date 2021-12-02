let registrosHTML=document.getElementById('registrosHTML');
let arrayregistros=[];

async function leeRegistros(){

    const respuesta = await fetch("data/registros.json");
    const registros = await respuesta.json();

    return registros;
}
 async function muestraregistros(){
try{
     arrayregistros = await leeRegistros();
}
catch(e){
console.log("Error generado:  " + e);
}
   console.log(arrayregistros);
   arrayregistros.forEach(function (item, index) {
    registrosHTML.innerHTML = registrosHTML.innerHTML + item.nombre + " " + item.apellido + "<br>";

    });
   //registrosHTML.innerHTML = registrosHTML.innerHTML + arrayregistros.nombre + " " + arrayregistros.apellido;
   
}

muestraregistros();
