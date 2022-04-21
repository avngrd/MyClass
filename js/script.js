const DEFAULT_CATEGORY = 'All';

const cardsData = [
    {
        image:'img/picture-1.svg',
        category: 'Java Script',
        title: 'Полный курс по JavaScript',
        rating: 4.3,
        duration: 5,
        price:4999
    },
    {
        image:'img/picture-2.svg',
        category: 'Wordpress',
        title: 'WordPress для новичков',
        rating: 3.7,
        duration: 7,
        price:6700
    },
    {
        image:'img/picture-3.svg',
        category: 'PHP',
        title: 'PHP. Практический курс',
        rating: 4.9,
        duration: 15,
        price:5400
    },
    {
        image:'img/picture-4.svg',
        category: 'Python',
        title: 'Django 3. Сервис по сбору данных',
        rating: 3.3,
        duration: 5,
        price:3200
    },
    {
        image:'img/picture-5.svg',
        category: 'CSS',
        title: 'Полное руководство по CSS',
        rating: 4.7,
        duration: 4,
        price:6599
    },
    {
        image:'img/picture-6.svg',
        category: 'HTML',
        title: 'Верстальщик',
        rating: 4.7,
        duration: 11,
        price:8599
    },
    {
        image:'img/picture-1.svg',
        category: 'Node.JS',
        title: 'Node JS. Практический курс',
        rating: 3.5,
        duration: 5,
        price:10000
    },
    {
        image:'img/picture-2.svg',
        category: 'Angular',
        title: 'Полное руководство по Angular',
        rating: 3.7,
        duration: 19,
        price:7000
    },
    {
        image:'img/picture-3.svg',
        category: 'Vue JS',
        title: 'Vue JS для новичков',
        rating: 4.7,
        duration: 6,
        price:3700
    },
    {
        image:'img/picture-4.svg',
        category: 'Django',
        title: 'Django 3. Сервис по сбору данных',
        rating: 4.1,
        duration: 3,
        price:2999
    },
    {
        image:'img/picture-5.svg',
        category: 'Redux Framework',
        title: 'Полное руководство по Redux',
        rating: 3.8,
        duration: 12,
        price:6599
    },
    {
        image:'img/picture-6.svg',
        category: 'Linux',
        title: 'Полное руководство по Linux',
        rating: 4.2,
        duration: 24,
        price:4599
    },
    {
        image:'img/picture-1.svg',
        category: 'Bootstrap',
        title: 'Все о Bootstrap',
        rating: 3.9,
        duration: 6,
        price:3799
    },
    {
        image:'img/picture-2.svg',
        category: 'Java Script',
        title: 'Полное руководство по Java Script',
        rating: 4.7,
        duration: 8,
        price:9990
    },
    {
        image:'img/picture-3.svg',
        category: 'Wordpress',
        title: 'Wordpress для продвинутых',
        rating: 4.3,
        duration: 10,
        price:7000
    },
    {
        image:'img/picture-4.svg',
        category: 'React',
        title: 'Полное руководство по React',
        rating: 3.4,
        duration: 5,
        price:6300
    },
    {
        image:'img/picture-5.svg',
        category: 'PHP',
        title: 'PHPStorm - курс',
        rating: 4.4,
        duration: 6,
        price:5999
    },
    {
        image:'img/picture-6.svg',
        category: 'Python',
        title: 'Полное руководство по Python',
        rating: 4.7,
        duration: 16,
        price:7900
    },
    {
        image:'img/picture-1.svg',
        category: 'CSS',
        title: 'Стилизация сайтов',
        rating: 3.7,
        duration: 19,
        price:5500
    },
    {
        image:'img/picture-2.svg',
        category: 'HTML',
        title: 'Все о HTML',
        rating: 4.9,
        duration: 32,
        price:4000
    },
    {
        image:'img/picture-3.svg',
        category: 'Node.JS',
        title: 'Node.JS для продвинутых',
        rating: 3.5,
        duration: 7,
        price:3000
    },
    {
        image:'img/picture-4.svg',
        category: 'Angular',
        title: 'Полное руководство по Angular',
        rating: 4.7,
        duration: 9,
        price:2000
    },
    {
        image:'img/picture-5.svg',
        category: 'Vue JS',
        title: 'Vue JS - стартовый курс',
        rating: 4.9,
        duration: 10,
        price:7500
    },
    {
        image:'img/picture-6.svg',
        category: 'Django',
        title: 'Django 3 для начинающих',
        rating: 4.6,
        duration: 15,
        price:9000
    },
    {
        image:'img/picture-1.svg',
        category: 'Redux Framework',
        title: 'Redux Framework - для новичков',
        rating: 4.9,
        duration: 4,
        price:5000
    }
];

function renderMarkup(target, markup){
    target.innerHTML = '';
    target.insertAdjacentHTML('afterbegin', markup);
}

function removeActiveClasses(elementsList){
    elementsList.forEach(function(itElement){
        itElement.classList.remove("active");
    })
}

function createCategories() {
    
    const categories = new Set;

    cardsData.forEach(function(cardData) {
        categories.add(cardData.category);
    })

    return Array.from(categories);
}


const cardsList = document.querySelector('.cards');

function renderCards(currentCardsData = cardsData){ 
    const cards = currentCardsData.map(function(cardData) {
        return `<li class="cards-item" data-category="${cardData.category}">
        <article class="card">
        <div class="card-img-background">
            <img src="${cardData.image}" width="142" height="132" alt="Парень рисует таблицу">
        </div>
        <div class="card-content">
            <h2>
            <a href="#">${cardData.title}</a>
            </h2>
            <p>Освой самый популярный язык программирования — JavaScript, и научись применять знания на практике</p>
            <dl class="card-meta-list">
            <div class="card-meta card-meta-raiting">
                <dt>
                <span class="visually-hidden">Рейтинг</span>
                <svg>
                    <use xlink:href="#star"></use>
                </svg>
                </dt>
                <dd>${cardData.rating}</dd>
            </div>
            <div class="card-meta card-meta-time">
                <dt>
                <span class="visually-hidden">Время прочтения</span>
                <svg>
                    <use xlink:href="#time"></use>
                </svg>
                </dt>
                <dd>${cardData.duration} часа</dd>
            </div>
            <div class="card-meta card-meta-price">
            <dt>
            <span class="visually-hidden">Цена</span>
            <dd>${cardData.price}P</dd>
            </dt>
            </dl>
        </div>
        </article>
    </li>`;
    }).join('');

    renderMarkup(cardsList, cards)    
}

renderCards()

const categoriesList = document.querySelector('.hashtags');
const categories = [].concat([`All`],createCategories());

let currentCategory = DEFAULT_CATEGORY;

const categoriesData = categories.map(function(categoryName) {
  return `<li class="hashtag">
          <a href="#" data-category="${categoryName}">${categoryName}</a>
        </li>`;
}).join(``);

categoriesList.innerHTML = ``;
categoriesList.insertAdjacentHTML(`afterbegin`, categoriesData);


function getCurrentData(category){
    if(category === DEFAULT_CATEGORY){
        return [...cardsData];
    } else {
      return [...cardsData].filter(function(card){
        return card.category === category;
      })
    }
}

function getSortedDuration(){
    cardsData.sort(function(minDuration,maxDuration){
        if(minDuration['duration'] < maxDuration['duration']) return -1;
    })
}

function getSortedRaiting(){
    cardsData.sort(function(minRaiting,maxRaiting){
        if(minRaiting['rating'] < maxRaiting['rating']) return - 1;
    })
}

function getSortedPrice(){
    cardsData.sort(function(minPrice,maxPrice){
        if(minPrice['price'] < maxPrice['price']) return -1;
    })
}



function changeThemes() {

    const themesBar = document.querySelector(".theme-list");
    const htmlElement = document.querySelector("html");
    const themesButton = themesBar.querySelectorAll("theme-button");

    function themesButtonsClickHandler(evt){
        evt.preventDefault;
        targetButton = evt.target.closest("li");

        htmlElement.dataset.themeName = targetButton.dataset.theme;

        removeActiveClasses(themesButton);
        targetButton.querySelector(".theme-button").classList.add("active");
    }    
themesBar.addEventListener("click", themesButtonsClickHandler)
}

function CardsFilters() {
    const changeFilterButtons = document.querySelector(".card-view-buttons");
    const allChangeFilterButtons = changeFilterButtons.querySelectorAll(".card-view-button");
    const cardsField = document.querySelector(".cards");

    function filtersButtonsClickHandler(evt) {
        evt.preventDefault();
        targetButton = evt.target.closest('li');

        cardsField.classList.remove("standard")
        cardsField.classList.remove("compact")
        
        if (targetButton.dataset.filter != undefined) {
            cardsField.classList.add(targetButton.dataset.filter);
        }
        removeActiveClasses(allChangeFilterButtons);
        targetButton.querySelector(".card-view-button").classList.add("active");
    }

    changeFilterButtons.addEventListener("click", filtersButtonsClickHandler);
}

changeThemes();
CardsFilters();
createCategories();


function onCategoriesListClick(evt) {
    evt.preventDefault();

    const button = evt.target.closest('a');

    if (!button) {
        return;
    } 
  
    currentCategory = button.dataset.category;

    const currentData = getCurrentData(currentCategory);
    renderCards(currentData);
};

categoriesList.addEventListener('click', onCategoriesListClick);

const sortList = document.querySelector('.sort-list');

function onSortingListClick(evt){
    evt.preventDefault();

    const button = evt.target.closest('a');

    if (!button){
        return;
    }
    if(button.dataset.duration){ 
        const currentDuration = getSortedDuration();
        renderCards(currentDuration);
    }
    if(button.dataset.raiting){
        const currentRaiting = getSortedRaiting();
        renderCards(currentRaiting);
    }
    if(button.dataset.price){
        const currentPrice = getSortedPrice();
        renderCards(currentPrice);
    }
    
}  

sortList.addEventListener('click', onSortingListClick);