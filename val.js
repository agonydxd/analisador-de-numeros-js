let num = document.querySelector('input#number')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n,  l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        lista.style.textAlign = 'center'
    }else{
        alert('[ERROR] valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione os valores primeiros')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
       
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.style.textAlign = 'center'
        res.style.color = '#8bc2e4'
        res.style.fontWeight = 'bold'
        res.style.fontFamily = 'arial'
        res.innerHTML = ''
        res.innerHTML += `<p>O total de elementos são ${tot}</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma dos números é  ${soma}</p>`
        res.innerHTML += `<p>A média dos números  é ${media}</p>`
        
        
        

    }
}