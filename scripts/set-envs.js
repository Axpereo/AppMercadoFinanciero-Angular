const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environments.ts';

const envFileContent = `
export const environment = {
    apiKey: "${process.env['apiKey']}",
};
`;

mkdirSync('./src/environments', { recursive:true });

writeFileSync( targetPath, envFileContent );