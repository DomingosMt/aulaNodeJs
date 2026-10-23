import chalk from "chalk"
import os from "os"
import fs from "fs"

// const fs = require("fs");
// const os = require("os");
// const chalk = require("chalk");

// console.log("Aula de node");

// console.log("Sistema Operacional: ", os.platform())
// console.log("Arquitetura: ", os.arch())
// console.log("Usuário: ", os.userInfo())
// console.log("Diretório: ", os.homedir())

console.log(chalk.blue.bold("Hello World"));

function mostrarMensagem(tipo, mensagem) {
    switch (tipo) {
        case 'info':
            console.log(chalk.blue('[INFO]: '), mensagem);
            break
        case 'alert':
            console.log(chalk.yellow('[ALERT]: '), mensagem);
            break
        case 'error':
            console.log(chalk.red('[ERROR]: '), mensagem);
            break
        case 'success':
            console.log(chalk.green('[SUCCESS]: '), mensagem);
            break
    }
}

mostrarMensagem('error', 'Email ou senha incorretos.')
mostrarMensagem('alert', 'A versão do seu computador está desatualizada')
mostrarMensagem('success', 'Login efetuado!')
mostrarMensagem('info', `${os.platform()}`)

fs.writeFileSync('mensagem.txt', 'Teste para escrever em outro arquivo.')
console.log(fs.readFileSync("mensagem.txt", "utf-8"))