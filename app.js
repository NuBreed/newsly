// imports



// selections
const toggleBtn = document.querySelector('.nav-btn');
const aside = document.querySelector('.aside');
const asideBtn = document.querySelector('.close-btn');
const category = document.querySelector('.categories');

toggleBtn.addEventListener('click', function() {
    aside.style.display = 'block';
});
asideBtn.addEventListener('click', function() {
    aside.style.display = 'none';
});



//search btn
const form = document.querySelector('.form');
form.addEventListener('submit', function(e) {
        e.preventDefault()
        const inputCity = document.querySelector('#city');
        const inputCategory = document.querySelector('#category')
        if (e.target === inputCity) {
            const country = inputCity.value
        }
        if (e.target === inputCategory) {}
        displayData(inputCity.value, inputCategory.value);


    })
    // window loading
window.addEventListener('load', function() {

    displayData('us', 'general')
})

// using selection buttons
const navBtn_1 = document.querySelector('.nav-btn-1')
const selectCountry = document.querySelector('#select-countries')
navBtn_1.addEventListener('click', function() {
    displayData(selectCountry.value, 'general')

})



//Api fetching

const sportCenter = document.querySelector('.news-center');
const sportly = document.querySelector('.sport-card-title');
async function newsPage(country, category) {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1bda0c6b39d542ea959b79077454ca70`;
    let response = await fetch(url);
    const data = await response.json();

    return data;
}

async function displayData(country, category) {
    const sport = await newsPage(country, category);
    const newSport = sport.articles;

    const newbe = newSport.map((newsport) => {
            const {
                source: { name },
                author,
                title,
                description,
                url,
                urlToImage: image,
                content,
            } = newsport;
            return ` <article class="news-card">
              <h4 class="news-title">${title}</h4>
              <img src="${image}" alt="" class="sport-img img" />

            <button class="btn news-btn">
            <a href="${url}" target="_blank">Details</a>
            </button>
            </article>`;
        })
        .join('');
    sportCenter.innerHTML = newbe
    document.querySelector('.block-title').textContent = category + ' ' + 'news'


}



// hero-slider

const slides = document.querySelectorAll('.slides')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
let index = 0;
prevBtn.addEventListener('click', () => {
    nextImage('next');
})

nextBtn.addEventListener('click', () => {
    nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') {
        index++
        if (index == slides.length) {
            index = 0
        }
    } else {
        if (index == 0) {
            index = slides.length - 1;

        } else {
            index--
        }
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show');
    }
    slides[index].classList.add('show');

}