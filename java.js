var l = document.querySelector('.progress-value')

l.addEventListener('animationend', function(){
    var p = document.querySelector('.logo')
    var c = document.querySelector('.charge')
    p.innerHTML = '<img src="assets/JeremBG.jpeg" alt=""><p style="font-size:1em;margin-top: 51px;">Bon y\'a pas encore site alors voilà une photo de BG pour vous faire patienter</p>'
    c.innerHTML = '<p>Terminé !</p>'
    console.log(p)
} )
