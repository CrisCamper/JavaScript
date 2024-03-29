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
        nombre: "Speed Max",
        precio: 50
    },
    {
        id: 102,
        nombre: "Pizza",
        precio: 75
    },
    {
        id: 103,
        nombre: "Papas rellenas",
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

// GET CLIENT

const getClient = (id, callback1) => {
    const client = clientes.find(c => c.id === id)?.nombre;

    if (client){
        callback1(null,client);
    }else{
        callback1("El cliente no existe...");
    };
};

// USING FUNCTION GET CLIENT
getClient(1, (err,client) => {
    if (err){
        console.warn(err);
        return
    }
    console.log("El nombre del cliente es: "+client);
})

// GET PRODUCT

const getProduct = (id, callback2) =>{
    const product = productos.find(p => p.id === id)?.nombre;

    if (product){
        callback2(null,product);
    }else{
        callback2("El producto no existe...")
    };
};

// USING THE FUNCTION GET PRODUCT

getProduct(101, (err,product) => {
    if(err){
        console.warn(err);
        return
    }
    console.log("El producto es: "+product);
})

// GET TOTAL FACTURE

const calculateTotalFacture = (products, callback3) => {

    let costProducts = [];

    for (id of products){
        let product = productos.find(p => p.id === id)?.precio;
        if(product){
            costProducts.push(product);
        }else{
            callback3(`El producto con la id ${id} no existe... `);
            return
        };
    };

    // Sum the values in costProducts array using reduce
    const totalCost = costProducts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    callback3(null, totalCost)
};

// USING THE FUNCTION CALCULATE TOTAL FACTURE

const products = [101,102]

calculateTotalFacture(products, (err, totalCost) => {
    if(err){
        console.warn(err);
        return
    };
    console.log("Costo total: "+totalCost);
})

// GET INFO OF A FACTURE

const getFactureInfo = (id, callback4) => {
    const facture = facturas.find(f => f.id === id);

    if (facture){
        callback4(null, facture)
    }else{
        callback4(`Factura con id ${id} no existe...`)
    }
}

// USING THE FUNCTION GET INFO OF A FACTURE

getFactureInfo(1001, (err,facture) => {
    if(err){
        console.warn(err);
        return
    }

    for (datos in facture){
        console.log(datos+": "+facture[datos])
    }
})