function mais() {
    let flexnone = document.querySelectorAll('.flexnone')
    let mais = document.getElementById('mais')
    let menos = document.getElementById('menos')

    mais.style.display='none'
    menos.style.display='block'

    flexnone.forEach(function(elemento) {
        elemento.style.display = 'grid';
    });
}

function menos() {
    let flexnone = document.querySelectorAll('.flexnone')
    let mais = document.getElementById('mais')
    let menos = document.getElementById('menos')

    mais.style.display='block'
    menos.style.display='none'

    flexnone.forEach(function(elemento) {
        elemento.style.display = 'none';
    });
}