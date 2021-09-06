const searchInput = document.getElementById('search-input');
const searchButton = () => {
const searchText = searchInput.value;
searchInput.value = '';
document.getElementById('cardDrink').innerHTML = '';
const errorMess = document.getElementById('errorSearch');

if(searchText === ''){
    const err = document.createElement('h4');
    errorMess.innerText = '';
    err.classList = 'text-white , bg-dark , p-2 , text-center , rounded-3 , w-25 , d-inline-block , mt-5'
    err.innerText = 'Please!! give a valid name';
    errorMess.appendChild(err);
    document.getElementById('cardDrink').innerHTML = '';
}
else{
    errorMess.innerText = '';
const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
fetch(url)
.then(res => res.json())
.then(data => searchDrinks(data.drinks))
};
};

const searchDrinks = drinks => {
const drinksCard = document.getElementById('cardDrink');
//     drinksCard.textContent = '';
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