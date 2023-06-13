import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, role ='admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
    return `estudante ${estudante} aprovado no curso ${curso}`
    }
}

const novoDocente = new Docente('Siso', 'siso@gmail.com', '2002/09/06')
console.log(novoDocente);
console.log(novoDocente.exibirInfo());
console.log(novoDocente.aprovaEstudante('Siso', 'Js'));