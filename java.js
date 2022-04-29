var l = document.querySelector('.progress-value')

l.addEventListener('animationend', function(){
    var p = document.querySelector('.logo')
    p.innerHTML = '<img style="border-radius: 5px" src="assets/JeremBG.jpeg" alt="">'
    console.log(p)
} )
