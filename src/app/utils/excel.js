const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = xlsx.readFile('./meta_file.xlsx');
const sheet_name = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheet_name];

const data = xlsx.utils.sheet_to_json(worksheet);

const transformedData = data.reduce((acc, row) => {
    let key = row['New Url'].split("/").filter(val => val && val !== '#');
    key = key.length === 2 ? 'main' : key[key.length - 1];
    acc[key] = {
        title: row['New Title'],
        description: row['New Description']
    };
    return acc;
}, {});

const output = `export const data = ${JSON.stringify(transformedData, null, 2)};`;
fs.writeFileSync('./metaFile.js', output);

