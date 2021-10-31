    function health() {
        var money = document.getElementById('money').value;
        var pay = document.getElementById('pay').value;
        var rest = money - pay

    if (rest <= 0) {
        document.getElementById('resultado').innerHTML = "O valor que resta é: " + rest + ", você gasta mais do que ganha!"
    } else if (rest <= 10/100 * money) {
        document.getElementById('resultado').innerHTML = "O valor que resta é: " + rest + ", Sua saúde financeira é Pessima"
    } else if (rest <= 20/100 * money) {
        document.getElementById('resultado').innerHTML = "O valor que resta é: " + rest + ", Sua saúde financeira é Ruim!"
    } else if (rest <= 40/100 * money) {
        document.getElementById('resultado').innerHTML = "O valor que resta é: " + rest + ", Sua saúde financeira é Boa!"
    } else if (rest <= 60/100 * money) {
        document.getElementById('resultado').innerHTML = "O valor que resta é: " + rest + ", Sua saúde financeira é Excelente!"
    }
}

function valoresDivididos() {
        var money = document.getElementById('money').value;
        var pay = document.getElementById('pay').value;
        var rest = money - pay

    document.getElementById('quarenta').innerHTML = 40/100 * rest;
    document.getElementById('trinta').innerHTML = 30/100 * rest;
    document.getElementById('vinte').innerHTML = 20/100 * rest;
    document.getElementById('dez').innerHTML = 10/100 * rest;
}