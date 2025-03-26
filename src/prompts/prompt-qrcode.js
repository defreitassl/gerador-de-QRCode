import chalk from "chalk"

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRCODE: ")
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QRcode (1 - Imagem ou 2 - Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Tipo inválido, escolha entre 1 ou 2"),
        required: true
    }
]

export default promptQRCode