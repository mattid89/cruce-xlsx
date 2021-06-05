// Requiring the module
const reader = require('xlsx');
fs = require('fs');

// Leo el archivo
const file = reader.readFile('./assets/cruce.xlsx');

// Inicializo la variable donde voy a guardar la data a imprimir en el archivo json
// let data = [];

// Obtengo los nombres de las Sheets
const sheetNames = file.SheetNames;
// Obtengo las Sheets
const sheets = file.Sheets;


// Obtengo los primeros 10 registros de la primer hija
const primerHojaAsJson = reader.utils.sheet_to_json(sheets[sheetNames[0]], {blankrows: true});

const cliente1000 = primerHojaAsJson.filter( row => row['Cliente'] === 100000 );


cliente1000.forEach( linea => {
	const organizacion = linea['Organización ventas'].toString();
	console.log('organizacion', organizacion);
	console.log('valor columna buscada', linea[organizacion]);


	if (linea[organizacion] === '#N/A') {
		console.log('tiene ventas en la organizacion');
	} else if (linea[organizacion] === undefined) {
		console.log('NO EXISTE LA COLUMNA');
	} else 
		console.log('NO tiene ventas en la organizacion');
	}
);


// Ejemplo de como leer el contenido del archivo
// for (let i = 0; i < sheets.length; i++) {
// 	const temp = reader.utils.sheet_to_json(
// 		file.Sheets[sheets[i]]
// 	)
// 	temp.forEach((res) => {
// 		data.push(res)
// 	})
// }



// console.log(cliente1000);

// Guardo el resultado en un archivo json
// fs.writeFile('./output/cruce.json', JSON.stringify(cliente1000), (err) => {
// 	if (err) return console.log(err);
// 	console.log('cruce');
// });
