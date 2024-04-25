// Soma
function somar(){
    var som1 = Number(document.getElementById('som1').value)
    var som2 = Number(document.getElementById('som2').value)
    var somRes= (som1 + som2).toFixed(2)

    var iptSom= document.getElementById('iptSom')
    iptSom.value= somRes

    var somR= document.getElementById('somR')
    somR.innerHTML = `O resultado da soma de ${som1} e ${som2} é <strong>${somRes.replace('.', ',')}</strong>`
}

//Subtração
function subtrair(){
    var sub1 = Number(document.getElementById('sub1').value)
    var sub2 = Number(document.getElementById('sub2').value)
    var subRes= (sub1 - sub2).toFixed(2)

    var iptSub= document.getElementById('iptSub')
    iptSub.value= subRes

    var subR= document.getElementById('subR')
    subR.innerHTML = `O resultado da subtração de ${sub1} e ${sub2} é <strong>${subRes.replace('.', ',')}</strong>`
}

//Multiplicação
function multiplicar(){
    var mul1 = Number(document.getElementById('mul1').value)
    var mul2 = Number(document.getElementById('mul2').value)
    var mulRes= (mul1 * mul2).toFixed(2)

    var iptM= document.getElementById('iptM')
    iptM.value= mulRes

    var subR= document.getElementById('subR')
    mulR.innerHTML = `O resultado da multiplicação de ${mul1} e ${mul2} é <strong>${mulRes.replace('.', ',')}</strong>`
}

//Divisão
function dividir(){
    var div1 = Number(document.getElementById('div1').value)
    var div2 = Number(document.getElementById('div2').value)
    var divRes= (div1 / div2).toFixed(2)

    var iptD= document.getElementById('iptD')
    iptD.value= divRes

    var divR= document.getElementById('divR')
    divR.innerHTML = `O resultado da divisão de ${div1} e ${div2} é <strong>${divRes.replace('.', ',')}</strong>`
}

//Potenciação
function elevar(){
    var pot1 = Number(document.getElementById('pot1').value)
    var pot2 = Number(document.getElementById('pot2').value)
    var potRes= (pot1 ** pot2).toFixed(2)

    var iptP= document.getElementById('iptP')
    iptP.value= potRes

    var potR= document.getElementById('potR')
    potR.innerHTML = `O resultado da potenciação de ${pot1} e ${pot2} é <strong>${potRes.replace('.', ',')}</strong>`
}