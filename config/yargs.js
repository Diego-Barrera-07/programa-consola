const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        },
        'l':{
            alias: 'lista',
            type: 'boolean',
            demandOption: true,
            default: false,
            describe: 'Muestra la lista si es verdadera'
        },
        'h':{
            alias: 'limite',
            type: 'number',
            demandOption: true,
            describe: 'Es el numero limite hasta donde se realiza la multiplicación'
        }
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero';
        }
        if (isNaN(argv.h)) {
            throw 'El limite debe ser un numero';
        }
        if (argv.h == '') {
            throw 'Debes deifinir un limite';
        }
        return true;
    })
    .argv

    module.exports = {
        argv
    }