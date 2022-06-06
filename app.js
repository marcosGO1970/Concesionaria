
let concesionaria = require('./funcionDeTareas.js')
let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };
let inputArg2 = process.argv[2] //accion
let inputArg3 = process.argv[3] //patente
let inp4= persona.nombre//nombre comprador
const inp5 = persona.capacidadDePagoEnCuotas//capacidadDePagoEnCuotas
const inp6 = persona.capacidadDePagoTotal//capacidadDePagoTotal

// Hago un switch con los escenarios

    switch (inputArg2){
        case undefined:
            console.log("Tienes que pasar una acción.")
            break
        case "buscar"://busca por patente
            concesionaria.buscarAuto(inputArg3)
            autoBuscado.length == 1?console.log(autoBuscado):console.log("No existe ese auto")
            break
        case "vender"://busca por patente y asigna vendido
            concesionaria.venderAuto(inputArg3)
            break
        case "listar"://lista todos: vendidos y por vender
            concesionaria.listar()
            break
        case "autos nuevos"://lista de autos con menos de 100 km
            concesionaria.autosNuevos();
            console.log(autosNvos); 
            break;
        case "para venta": //lista de los autos para venta
            concesionaria.autosParaLaVenta()
            console.log('Autos para la venta-----------')
            console.log('------------------------------')
            console.log(autosPVta);
            break;
        case "lista ventas"://lista importe ventas realizadas por auto
            concesionaria.listaDeVentas();
            break;
        case "total ventas"://con reduce suma las ventas
            concesionaria.totalDeVentas();
            break;
        case "puede comprar"://revisa si el cliente puede comprar un auto
            concesionaria.puedeComprar(inputArg3,inp4,inp5,inp6)
            break;
        case "autos que puede comprar"://revisa todos lo el cliente puede comprar
            concesionaria.autosQuePuedeComprar(inp4,inp5,inp6)
            break;
        default:
            console.log("No entiendo qué quieres hacer.");
            break;
    }
