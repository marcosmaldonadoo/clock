function carregar(){
    var horario = document.getElementById('horario')
    var imagem = document.getElementById('foto')
    var mensagem = document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()
    horario.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        imagem.src = 'assets/img/fotomanha.png'
        document.body.style.background = '#e3b007'
        mensagem.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        imagem.src = 'assets/img/fototarde.png'
        document.body.style.background = '#c06b2e'
        mensagem.innerHTML = 'Boa tarde!'   
    } else {
        imagem.src = 'assets/img/fotonoite.png'
        document.body.style.background = '#0c3d83'
        mensagem.innerHTML = 'Boa noite!'
    }
}