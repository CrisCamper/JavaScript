// ARRAY CLIENTS 
const clientes = [
    {
        id: 1,
        nombre: "Juan",
        direccion: "Calle A, Ciudad"
    },
    {
        id: 2,
        nombre: "Maria",
        direccion: "Calle B, Ciudad"
    }
];

// ARRAY PRODUCTS
const productos = [
    {
        id: 101,
        nombre: "Producto 1",
        precio: 50
    },
    {
        id: 102,
        nombre: "Producto 2",
        precio: 75
    },
    {
        id: 103,
        nombre: "Producto 3",
        precio: 100
    }
];

// ARRAY FACTURES
const facturas = [
    {
        id: 1001,
        clienteId: 1,
        productos: [101, 102],
        total: 0
    },
    {
        id: 1002,
        clienteId: 2,
        productos: [103],
        total: 0
    }
];

// // Function to get client's name
// const getClient = (id) => {
//     return new Promise((resolve, reject) => {
//         const nameClient = clientes.find(c => c.id === id)?.nombre;

//         (nameClient)? resolve("Nombre del cliente: "+nameClient) : reject(`No se encontró el cliente con el id ${id}...` )
//     })
// }

// // Using the function get client's name
// getClient(0)
//     .then((result)=> {console.log(result)})
//     .catch((error)=> {console.error(error)});

// !PROMESA DE NUMERO PAR O IMPAR

const parImpar = (num) => {
    return new Promise((resolve, reject) => {
        console.warn("Esperando respuesta")
        if (num % 2 === 0){
            setTimeout(()=>{
                resolve(`Este mensaje se ejecutó porque el numero ${num} es par`);
            }, 2000);
        }else{
            setTimeout(()=>{
                reject(`Este mensaje se ejecutó porque el numero ${num} no es par`);
            }, 2000);
        };
    })
};

parImpar(190).then((positive)=>{console.warn(positive)}).catch((negative)=>{console.error(negative)});