// ARRAY DE EMPLEADOS
const empleados = [
    {
        id: 1,
        nombre: "Juan Camilo"
    },

    {
        id: 2,
        nombre: "Sebastian Alfredo"
    },

    {
        id: 3,
        nombre: "Maria Tereza"
    }
];

// ARRAY DE SALARIOS
const salarios = [
    {
        id:1,
        salario:1500
    },

    {
        id:2,
        salario:3000
    }
];

// // FUNCIÓN CALLBACK
// const getEmpleado = (id, callback) => {
//     const empleado = empleados.find(emp => emp.id === id);
    
//     if (empleado){
//         callback(empleado);
//     };
// };

// // LLAMANDO A LA FUNCIÓN CALLBACK
// getEmpleado(3, (e)=> {
//     console.log("id: "+e.id);
//     console.log("Nombre: "+e.nombre);
// });

// Funcion callback

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e => e.id === id)?.nombre;
    const salario = salarios.find(s => s.id === id)?.salario;

    if (empleado && salario){
        callback(null,empleado,salario);
    }else{
        callback("El empleado o el salario no existe");
    }
    
}

getEmpleado(2, (err,emp,sal) =>{
    if (err){
        return console.error("ERROR: "+err);
    }
    console.info(`El empleado ${emp} Tiene un salario de ${sal}`);
})