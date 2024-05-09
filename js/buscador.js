
document.getElementById('search').addEventListener('input', function () {
    var searchText = this.value.toLowerCase();
    var cards = document.querySelectorAll('.card');
    cards.forEach(function (card) {
        var cardText = card.querySelector('h3').textContent.toLowerCase();
        if (cardText.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});