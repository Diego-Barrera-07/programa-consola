const fs = require('fs');
const colors = require('colors');
const crearArchivoTabla = async( base , mostrar, limite) => {
    try {
        
        let salida = '';
        let hasta = limite;
        for (let i = 0; i < hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`.inverse);
        }
        if(mostrar !== false){
        console.log('==============================='.rainbow)
        console.log('Tabla del numero '.blue.bold, base )
        console.log('==============================='.rainbow)

        console.log(salida)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt ha sido creada`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivoTabla
}