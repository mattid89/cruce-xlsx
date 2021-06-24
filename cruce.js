// Requiring the module
const xlsx = require('xlsx');
fs = require('fs');

// Leo el archivo
const file = xlsx.readFile('./assets/cruce.xlsx');

// Inicializo la variable donde voy a guardar la data a imprimir en el archivo json
// let data = [];

// Obtengo los nombres de las Sheets
const sheetNames = file.SheetNames;
// Obtengo las Sheets
const sheets = file.Sheets;


// PRIMER PRUEBA

// obtengo la primer hoja en formato json
// const primerHojaAsJson = xlsx.utils.sheet_to_json(sheets[sheetNames[0]], {blankrows: true});
// obtengo el cliente 100000
// const cliente1000 = primerHojaAsJson.filter( row => row['Cliente'] === 100000 );

// Iteracion de los registros del excel
// cliente1000.forEach( linea => {
// 	const organizacion = linea['Organización ventas'].toString();
// 	console.log('organizacion', organizacion);
// 	console.log('valor columna buscada', linea[organizacion]);


// 	if (linea[organizacion] === '#N/A') {
// 		console.log('tiene ventas en la organizacion');
// 	} else if (linea[organizacion] === undefined) {
// 		console.log('NO EXISTE LA COLUMNA');
// 	} else 
// 		console.log('NO tiene ventas en la organizacion');
// 	}
// );


// Ejemplo de como leer el contenido del archivo
// for (let i = 0; i < sheets.length; i++) {
// 	const temp = xlsx.utils.sheet_to_json(
// 		file.Sheets[sheets[i]]
// 	)
// 	temp.forEach((res) => {
// 		data.push(res)
// 	})
// }

const primerHoja = sheets[sheetNames[0]];

const range = xlsx.utils.decode_range(primerHoja['!ref'])
const startRow = range.s.r;
const startCol = range.s.c;
const endCol = range.e.c;
const endRow = range.e.r;
// const counter = config.offset;

console.log(startRow, startCol, endCol, endRow);

// for (const key in primerHoja) {
// 	if (Object.hasOwnProperty.call(primerHoja, key)) {
// 		const element = primerHoja[key];
// 		console.log(element)

// 	}
// }

// console.log(prueba)
// Guardo el resultado en un archivo json
// fs.writeFile('./output/cruce.json', JSON.stringify(prueba), (err) => {
// 	if (err) return console.log(err);
// 	console.log('cruce');
// });
