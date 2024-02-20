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

// !Get client (with promises)
const getClient = (id) => {
    return new Promise((resolve,reject) => {
        const nameClient = clientes.find(c => c.id === id)?.nombre;

        (nameClient)? resolve(`Nombre del cliente con id ${id}: ${nameClient}`) : reject(`Cliente con id ${id} no fue encontrado...`);
    })
};

// !Get product (with promises)

const getProduct = (id) => {
    return new Promise((resolve,reject) => {
        const nameProduct = productos.find(p => p.id === id)?.nombre;

        (nameProduct)? resolve(`Nombre del producto con id ${id}: ${nameProduct}`) : reject(`El producto con id ${id} no fue encontrado...`);
    })
};


// !Get total facture (with promises)

const calculateTotalFacture = (products) => {
    return new Promise((resolve,reject) => {
        let costProducts = [];

        for (id of products){
            let product = productos.find(p => p.id === id)?.precio;
            
            (product)? costProducts.push(product) : reject(`Producto con id ${id} no fue encontrado...`);
        };
        
        const totalcost = costProducts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        resolve(`Costo total por los productos: ${totalcost}`);
    })
};

// !get info of a facture (with promises)

const getFactureInfo = (id) => {
    const facture = facturas.find(f => f.id === id);

    (facture)? resolve(facture) : reject(`La factura con id ${id} no fue encontrada...`);
}

// !Start program
const products = [101,102];

Promise.any([getClient(1), getProduct(101), calculateTotalFacture(products)])
    .then 