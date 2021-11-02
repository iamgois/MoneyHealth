    function health() {
        var money = document.getElementById('money').value;
        var pay = document.getElementById('pay').value;
        var rest = money - pay

    if (rest >= 0) {
        document.getElementById('resultado').innerHTML = "O valor que resta é: R$" + rest + ", agora podemos organizar!"
    }
}

function valoresDivididos() {
        var money = document.getElementById('money').value;
        var pay = document.getElementById('pay').value;
        var rest = money - pay

    document.getElementById('quarenta').innerHTML = 'R$' + 40/100 * rest;
    document.getElementById('trinta').innerHTML = 'R$' +  30/100 * rest;
    document.getElementById('vinte').innerHTML = 'R$' +  20/100 * rest;
    document.getElementById('dez').innerHTML = 'R$' +  10/100 * rest;
}