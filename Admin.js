import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role ='admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso,vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin = new Admin ('Amanda', 'amanda@gmail.com', '2003/04/01')
console.log(novoAdmin.criarCurso('Js', 20))