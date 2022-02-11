const { crearArchivoTabla } = require('./helpers/multiplicar');
const { argv } = require('./config/yargs')


console.clear();
// Enviar datos desde la consola
// const [,,arg3] = process.argv
// const [, base] = arg3.split('=')
// console.log(base)
// let base = 212217321929;

crearArchivoTabla(argv.base , argv.lista, argv.limite )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado exitosamente'))
    .catch(err => console.log(err))