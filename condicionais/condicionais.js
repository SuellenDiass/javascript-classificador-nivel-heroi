

/* Todos esses exemplos usam a estrutura `if`, `else if` e `else` para definir a mensagem com base no valor de `heroiXp` e também usam loops `for`, `while` e `do-while` para repetir as verificações até encontrar uma correspondência.
 */
/* **Usando `if`, `else if` e `else` com loop `for`**:
 */
```javascript
let heroiXp = 9000;
let mensagem;

for (let i = 1; i <= 8; i++) {
    if (i === 1 && heroiXp < 1000) {
        mensagem = "Ferro";
    } else if (i === 2 && heroiXp >= 1001 && heroiXp <= 2000) {
        mensagem = "Bronze";
    } else if (i === 3 && heroiXp >= 2001 && heroiXp <= 5000) {
        mensagem = "Prata";
    } else if (i === 4 && heroiXp >= 6001 && heroiXp <= 7000) {
        mensagem = "Ouro";
    } else if (i === 5 && heroiXp >= 7001 && heroiXp <= 8000) {
        mensagem = "Platina";
    } else if (i === 6 && heroiXp >= 8001 && heroiXp <= 9000) {
        mensagem = "Ascendente";
    } else if (i === 7 && heroiXp >= 9001 && heroiXp <= 10000) {
        mensagem = "Imortal";
    } else if (i === 8) {
        mensagem = "Radiante";
    }
    
    if (mensagem) break; // Sai do loop se a mensagem for definida
}

console.log(mensagem);
```

/* **Usando `if`, `else if` e `else` com loop `while`**: */

```javascript
let heroiXp = 9000;
let mensagem;
let i = 1;

while (i <= 8) {
    if (i === 1 && heroiXp < 1000) {
        mensagem = "Ferro";
    } else if (i === 2 && heroiXp >= 1001 && heroiXp <= 2000) {
        mensagem = "Bronze";
    } else if (i === 3 && heroiXp >= 2001 && heroiXp <= 5000) {
        mensagem = "Prata";
    } else if (i === 4 && heroiXp >= 6001 && heroiXp <= 7000) {
        mensagem = "Ouro";
    } else if (i === 5 && heroiXp >= 7001 && heroiXp <= 8000) {
        mensagem = "Platina";
    } else if (i === 6 && heroiXp >= 8001 && heroiXp <= 9000) {
        mensagem = "Ascendente";
    } else if (i === 7 && heroiXp >= 9001 && heroiXp <= 10000) {
        mensagem = "Imortal";
    } else if (i === 8) {
        mensagem = "Radiante";
    }
    
    if (mensagem) break; // Sai do loop se a mensagem for definida
    i++;
}

console.log(mensagem);
```

/* **Usando `if`, `else if` e `else` com loop `do-while`**: */

```javascript
let heroiXp = 9000;
let mensagem;
let i = 1;

do {
    if (i === 1 && heroiXp < 1000) {
        mensagem = "Ferro";
    } else if (i === 2 && heroiXp >= 1001 && heroiXp <= 2000) {
        mensagem = "Bronze";
    } else if (i === 3 && heroiXp >= 2001 && heroiXp <= 5000) {
        mensagem = "Prata";
    } else if (i === 4 && heroiXp >= 6001 && heroiXp <= 7000) {
        mensagem = "Ouro";
    } else if (i === 5 && heroiXp >= 7001 && heroiXp <= 8000) {
        mensagem = "Platina";
    } else if (i === 6 && heroiXp >= 8001 && heroiXp <= 9000) {
        mensagem = "Ascendente";
    } else if (i === 7 && heroiXp >= 9001 && heroiXp <= 10000) {
        mensagem = "Imortal";
    } else if (i === 8) {
        mensagem = "Radiante";
    }
    
    if (mensagem) break; // Sai do loop se a mensagem for definida
    i++;
} while (i <= 8);

console.log(mensagem);
```

