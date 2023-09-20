/* Neste código, usamos a estrutura `switch` com `case` e a expressão `true` como argumento para o `switch`, pois estamos avaliando expressões booleanas nas condições dos `case`. Dependendo do valor de `heroiXp`, a variável `mensagem` receberá a mensagem correspondente e, em seguida, imprimimos essa mensagem no console. O `default` é usado caso nenhuma das condições anteriores seja atendida. */


let heroiXp = 9000;
let mensagem;

switch (true) {
    case heroiXp < 1000:
        mensagem = "Ferro";
        break;
    case heroiXp >= 1001 && heroiXp <= 2000:
        mensagem = "Bronze";
        break;
    case heroiXp >= 2001 && heroiXp <= 5000:
        mensagem = "Prata";
        break;
    case heroiXp >= 6001 && heroiXp <= 7000:
        mensagem = "Ouro";
        break;
    case heroiXp >= 7001 && heroiXp <= 8000:
        mensagem = "Platina";
        break;
    case heroiXp >= 8001 && heroiXp <= 9000:
        mensagem = "Ascendente";
        break;
    case heroiXp >= 9001 && heroiXp <= 10000:
        mensagem = "Imortal";
        break;
    default:
        mensagem = "Radiante";
}

console.log(mensagem);


