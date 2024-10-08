import express from 'express';
import dotenv from 'dotenv';// Importa o dotenv para carregar variáveis de ambiente de um arquivo .env para o processo do Node.js.
import mustache from 'mustache-express';// Importa o mustache-express, que permite usar templates Mustache com o Express.
import path from 'path';// Importa o módulo path, que fornece utilitários para trabalhar com caminhos de arquivos e diretórios.
import mainRoutes from './routes/index';// Importa as rotas principais da aplicação a partir de `routes/index.js` ou `index.ts`.

dotenv.config();

const server = express();

server.set('view engine','mustache');// Configura o motor de visualização (view engine) do Express para usar Mustache para renderizar templates.
server.set('views', path.join(__dirname,'views'));//Define o diretório das views.
server.engine('mustache',mustache());// Configura o Express para usar o motor Mustache ao renderizar arquivos com a extensão .mustache.


server.use(express.static(path.join(__dirname, '../public'))); 
// Serve arquivos estáticos do diretório '../public'.
// 'express.static' permite acesso direto a arquivos como CSS e imagens.
// 'path.join' garante um caminho correto para 'public' em qualquer sistema.


//routtes 
server.use(mainRoutes);

server.use((req,res)=>{
    res.status(404).send('Página não encontrada'); 
});

server.listen(process.env.PORT);// Inicia o servidor na porta definida em 'process.env.PORT'.
