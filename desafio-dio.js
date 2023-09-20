/* Crie uma variável para armazenar o nome e a quantidade de experiència (XP) de um herói */

/* depois utilize uma estrutura de decisão para apresentar algumas das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1001 e 2000 = Bronze
Se XP for entre 2001 e 5000 = Prata 
Se XP for entre 6001 e 7000 = Ouro
Se XP for entre 7001 e 8000 = Platina 
Se XP for entre 8001 e 9000 = Ascendente
Se XP for entre 9001 e 10000 = Imortal
Se XP for maior ou igual a 10001 = Radiante

saida
Ao final deve se exibir uma mensagem:

O Heroi de nome{nome} está no nível de {nivel}

 */

/* Neste código, eu adicionei uma variável nivel para armazenar o nível do herói com base na XP, e usei essa variável na última instrução console.log para exibir a mensagem final com o nome e o nível do herói. Certifique-se de substituir os valores fictícios heroiXp e nomeHeroi pelos valores reais do seu herói. */

let heroiXp = 10000; // Substitua o valor pela quantidade real de XP do herói
let nomeHeroi = "Pokemon"; // Substitua pelo nome real do herói

let nivel;

if (heroiXp < 1000) {
    nivel = "Ferro";
} else if (heroiXp >= 1001 && heroiXp <= 2000) {
    nivel = "Bronze";
} else if (heroiXp >= 2001 && heroiXp <= 5000) {
    nivel = "Prata";
} else if (heroiXp >= 6001 && heroiXp <= 7000) {
    nivel = "Ouro";
} else if (heroiXp >= 7001 && heroiXp <= 8000) {
    nivel = "Platina";
} else if (heroiXp >= 8001 && heroiXp <= 9000) {
    nivel = "Ascendente";
} else if (heroiXp >= 9001 && heroiXp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O Heroi de nome ${nomeHeroi} está no nível de ${nivel}`);


