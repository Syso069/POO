const  user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function() {
        return this.nome;
    }
}

const novoUser = Object.create(user);
novoUser.init("Amanda", "amanfa@gmail.com");
console.log(novoUser.exibirInfos());