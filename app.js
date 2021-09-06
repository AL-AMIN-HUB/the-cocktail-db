const searchButton = () => {
const searchInput = document.getElementById('search-input');
const searchText = searchInput.value;
searchInput.value = '';
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => searchDrinks(data.drinks))
};
// }

const searchDrinks = drinks => {
const drinksCard = document.getElementById('cardDrink');
    drinksCard.textContent = '';
    drinks.forEach(drink => {
    const eachDrinkCard = document.createElement('div');

    eachDrinkCard.innerHTML = `
    <div class="col">
        <div class="card h-100">
            <img style = "height: 300px;" src="${drink.strDrinkThumb}" class="card-img-top img-fluid d-block" alt="..." />
        <div class="card-body">
            <h4 class="card-title fw-bold text-center"><a class = "text-decoration-none" href="">Name: ${drink.strDrink}</a></h4>
        </div>
        <div class = "card-footer text-center">
        <p>Date: ${drink.dateModified}</p>
        </div>
        </div>
    </div>
`;
drinksCard.appendChild(eachDrinkCard);

})
}