import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Mariana', 'mariana@gmail.com', '2004/01/01')
// console.log(novoUser.exibirInfo())

const novoAdmin = new Admin('Jao', 'jao@gmail.com', '2004/01/01')
console.log(novoAdmin.nome)

novoAdmin.nome = ''
console.log(novoAdmin.nome)


