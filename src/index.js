const usuario = {
    nome: "Bilbo",
    sobrenome: "Baggins",
    nascimento: "22/09/1290",
    idade: 111,
    altura: 1.25,
    genero: "Masculino",
    email: "precious2@middleearthmail.com",
    senha: "Smaug13",
    lembreteSenha: "Dragão",

    fazerAniversario: function(anos) {
        this.idade += anos;
        console.log("Parabéns para mim!");
        console.log("Eu estou velho, Gandalf!");
        console.log(this.idade);                        
    },

    admirarAnel: function() {
        console.log("\n- Acariciando o anel...");
        console.log("My precious!");         
    },

    fazerCaraFeia: function() {
        console.log("\nGWAAAAAAHHH!\n");        
    }

}
console.log(`\nNome: ${usuario.nome} ${usuario.sobrenome}`);
console.log(`Data de nascimento: ${usuario.nascimento}`);
console.log(`Idade: ${usuario.idade}`);
console.log(`Altura: ${usuario.altura}`);
console.log(`Gênero: ${usuario.genero}`);
console.log(`E-mail: ${usuario.email}`);
console.log("Senha: **********");
console.log(`Lembrete de Senha: ${usuario.lembreteSenha}\n`);

usuario.fazerAniversario(1);
usuario.admirarAnel();
usuario.fazerCaraFeia();