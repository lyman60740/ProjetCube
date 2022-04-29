var l = document.querySelector('.progress-value')

l.addEventListener('animationend', function(){
    var p = document.querySelector('.logo')
    var c = document.querySelector('.charge')
    p.innerHTML = '<iframe width="1" height="1" src="https://www.youtube.com/embed/OdnK_sitSyw?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><img style="border-radius:10px;" src="assets/JeremMerguez.jpg"></img><p style="font-size:1.5em;margin-top: 51px;font-family: "Poppins, sans-serif;">MAIS QUI FAIT LA FÊTE ICI ?</p>'
    c.innerHTML = '<p>Terminé !</p>'

} )

