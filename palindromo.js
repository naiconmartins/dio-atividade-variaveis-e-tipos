
//solução 1 para encontrar palindromos
function verificaPalindromo(string) {
    if(!string) return; /* verifica se a variável vem como nula, vazia ou indefinida*/

    return string.split("").reverse().join("") === string; /* cria uma string, depois reverte as letras de trás para frente, une a nova palavra 
    gerada com join e por fim verifica se ela é igual a string recebida*/

}

console.log(verificaPalindromo("ovo"));


//Solução 2 para verificar palindromo

function verificaPalindromo2(string) {
    if (!string) return;

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 - i]) {
            return false;
        }

    }

    return true;
}

console.log(verificaPalindromo2("abba"));