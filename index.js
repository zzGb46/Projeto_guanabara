function carregar(){
let msg =document.getElementById("msg")
let img = document.getElementById("foto")
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    // bom dia
}
else if(hora >= 12 && hora <18){
// boa tarde
}else{
    // boa noite
}

}

