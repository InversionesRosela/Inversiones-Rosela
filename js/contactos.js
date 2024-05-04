document.addEventListener("DOMContentLoaded", function() {
    var roundbtn = document.getElementById('roundbtn');
    var contactos = document.getElementById('contactos');

    roundbtn.addEventListener('click', function() {
        roundbtn.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!roundbtn.contains(event.target)) {
            roundbtn.classList.remove('open');
        }
    });
});
