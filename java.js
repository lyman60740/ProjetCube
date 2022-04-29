var l = document.querySelector('.progress-value')

l.addEventListener('animationend', function(){
    var p = document.querySelector('.logo')
    p.innerHTML = '<img src="assets/JeremBG.jpeg" alt="">'
    console.log(p)
} )
