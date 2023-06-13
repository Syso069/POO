export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || "estudante"
        this.ativo = ativo
    }   

    exibirInfo() {
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User ('Siso', 'siso@gmail.com', '2002/09/06')