var l = document.querySelector('.progress-value')

l.addEventListener('animationend', function(){
    var p = document.querySelector('.logo')
    var c = document.querySelector('.progress')
    p.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/2zj790ncE5A?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><iframe width="0" height="0" src="https://www.youtube.com/embed/-se0o7rhGko?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><p style="font-size:1.5em;margin-top: 51px;font-family: "Poppins, sans-serif;">Bon y\'a pas encore site alors voilà une photo de BG pour vous faire patienter</p>'
    c.innerHTML = '<p>LEZGO !</p>'
    console.log(p)
} )

