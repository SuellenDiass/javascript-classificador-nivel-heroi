/* Criando   uma estrutura de repetição para calcular as mensagens com base no valor de `heroiXp` usando `for`, `while` e `do-while`. Aqui estão exemplos de como fazer isso com cada um desses loops: */

/* **Usando o loop `for`**: */

```javascript
let heroiXp = 9000;
let mensagem;

for (let i = 1; i <= 8; i++) {
    switch (i) {
        case 1:
            if (heroiXp < 1000) mensagem = "Ferro";
            break;
        case 2:
            if (heroiXp >= 1001 && heroiXp <= 2000) mensagem = "Bronze";
            break;
        case 3:
            if (heroiXp >= 2001 && heroiXp <= 5000) mensagem = "Prata";
            break;
        case 4:
            if (heroiXp >= 6001 && heroiXp <= 7000) mensagem = "Ouro";
            break;
        case 5:
            if (heroiXp >= 7001 && heroiXp <= 8000) mensagem = "Platina";
            break;
        case 6:
            if (heroiXp >= 8001 && heroiXp <= 9000) mensagem = "Ascendente";
            break;
        case 7:
            if (heroiXp >= 9001 && heroiXp <= 10000) mensagem = "Imortal";
            break;
        case 8:
            mensagem = "Radiante";
            break;
    }

    if (mensagem) break; // Sai do loop se a mensagem for definida
}

console.log(mensagem);
```

/* **Usando o loop `while`**: */

```javascript
let heroiXp = 9000;
let mensagem;
let i = 1;

while (i <= 8) {
    switch (i) {
        case 1:
            if (heroiXp < 1000) mensagem = "Ferro";
            break;
        case 2:
            if (heroiXp >= 1001 && heroiXp <= 2000) mensagem = "Bronze";
            break;
        case 3:
            if (heroiXp >= 2001 && heroiXp <= 5000) mensagem = "Prata";
            break;
        case 4:
            if (heroiXp >= 6001 && heroiXp <= 7000) mensagem = "Ouro";
            break;
        case 5:
            if (heroiXp >= 7001 && heroiXp <= 8000) mensagem = "Platina";
            break;
        case 6:
            if (heroiXp >= 8001 && heroiXp <= 9000) mensagem = "Ascendente";
            break;
        case 7:
            if (heroiXp >= 9001 && heroiXp <= 10000) mensagem = "Imortal";
            break;
        case 8:
            mensagem = "Radiante";
            break;
    }

    if (mensagem) break; // Sai do loop se a mensagem for definida
    i++;
}

console.log(mensagem);
```

/* **Usando o loop `do-while`**: */


let heroiXp = 9000;
let mensagem;
let i = 1;

do {
    switch (i) {
        case 1:
            if (heroiXp < 1000) mensagem = "Ferro";
            break;
        case 2:
            if (heroiXp >= 1001 && heroiXp <= 2000) mensagem = "Bronze";
            break;
        case 3:
            if (heroiXp >= 2001 && heroiXp <= 5000) mensagem = "Prata";
            break;
        case 4:
            if (heroiXp >= 6001 && heroiXp <= 7000) mensagem = "Ouro";
            break;
        case 5:
            if (heroiXp >= 7001 && heroiXp <= 8000) mensagem = "Platina";
            break;
        case 6:
            if (heroiXp >= 8001 && heroiXp <= 9000) mensagem = "Ascendente";
            break;
        case 7:
            if (heroiXp >= 9001 && heroiXp <= 10000) mensagem = "Imortal";
            break;
        case 8:
            mensagem = "Radiante";
            break;
    }

    if (mensagem) break; // Sai do loop se a mensagem for definida
    i++;
} while (i <= 8);

console.log(mensagem);
