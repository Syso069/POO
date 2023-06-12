const user = {
    nome: "Siso",
    email: "siso@gmail.com",
    nascimento: "2002/06/09",
    role: "estudante",
    ativo: true,
    exibirInfo: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Amanda",
    email: "amanda@gmail.com",
    nascimento: "2003/01/04",
    role: "admin",
    ativo: true,
    criarCurso() {
        console.log("Curso criado!");
    }
}

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfo();

