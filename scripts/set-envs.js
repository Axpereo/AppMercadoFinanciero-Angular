const { writeFileSync, mkdirSync } = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environments.ts';

const envFileContent = `
export const environment = {
    apiKeyValores: "${process.env['apiKeyValores']}",
    apiKeyNoticias: "${process.env['apiKeyNoticias']}",
    apiKeyBancos: "${process.env['apiKeyBancos']}",
};
`;

mkdirSync('./src/environments', { recursive:true });

writeFileSync( targetPath, envFileContent );