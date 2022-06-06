const fs = require('fs');
//subo la lista de autos a la memoria
var Lautos = JSON.parse(fs.readFileSync('./autos.json', 'utf-8'));
//objeto concesionaria con funcionalidades
let concesionaria = {
    archivo: './autos.json',

    buscarAuto: function (patenteBuscada){
        autoBuscado = Lautos.filter(function(auto){
        return auto.patente === patenteBuscada})
        return autoBuscado.length == 1? autoBuscado:null 
    },
    listar: function(){
        console.log(Lautos);
        /*Lautos.forEach(function(array,i){
        console.log((1 + i) + ". " + array.marca + " - " + array.modelo)
        })*/
    },
    venderAuto: function(patenteBuscada) {
        let autoV =this.buscarAuto(patenteBuscada);
        autoV != null? autoV[0].vendido = true: 
        console.log("no existe");
        autoV != null? console.log(autoV):"";
        return this.escribirJON(Lautos);
    },
    escribirJON: function(Lautos){
        let stringJson = JSON.stringify(Lautos)//hay que escribir el json con writefile}
        fs.writeFileSync('./autos.json',stringJson)
    },
    autosParaLaVenta:function (){
        //Lautos = this.leerArchivo()
        autosPVta = Lautos.filter(function(auto){
        return auto.vendido === false})
        //return autosPVta //!= undefined? autosPVta :null 
        if(autosPVta == []){return null}
        else{return autosPVta;}
    },
    autosNuevos: function(){
        let autosPVta = this.autosParaLaVenta();
        autosNvos = autosPVta.filter(function(auto){
        return auto.km < 100})
        return autosNvos != []? autosNvos :null
    },
    listaDeVentas : function(){
        listaVta = Lautos.filter(function(auto){
            return auto.vendido === true})
        listaVta.forEach(function(array,i){
            console.log((1 + i) + ". " + array.precio )})
    },
    totalDeVentas : function(){
        listaVta = Lautos.filter(function(auto){
            return auto.vendido === true})
            var arrayVta = [0];
            listaVta.forEach(function(array,i){
            let arratVta = arrayVta.push(array.precio)})
            var sum = arrayVta.reduce(function(acum,num){return acum+num});
            console.log(sum);       
    },
    puedeComprar: function(auto,nombre,inp5,inp6){
        this.buscarAuto(auto)
        let auto2 = autoBuscado
        let cuota = auto2[0].precio/auto2[0].cuotas;
        let total = auto2[0].precio
        return (cuota <= inp5 &&
             total <= inp6)?true:false
       },
    autosQuePuedeComprar: function(inp4,inp5,inp6){
        let LVta = this.autosParaLaVenta()
        //console.log(inp5)
        //console.log(inp6)
        LVta.forEach(function(auto,i){
            console.log(auto.patente)
            concesionaria.puedeComprar(auto.patente,inp4,inp5,inp6) == true?
            console.log(auto):""
        })
       },
}

module.exports = concesionaria 
//concesionaria.puedeComprar(0,0,0,"APL123","Juan",30000,200000)
//console.log(arrayVta)
