document.addEventListener('DOMContentLoaded', async () => {
    await carregarProjetos();
});

let produtos = [];
var swiperInstance;

async function carregarProjetos() {
    try {
        const response = await fetch('http://127.0.0.1:5500/data/produtos.json');
        const dados = await response.json();
        produtos = dados.produtos;
        gerarListaProjetos(produtos);
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}

function gerarListaProjetos(itens) {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = '';

    itens.forEach(item => {
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add('swiper-slide');

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.image;

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('card-title');
        titleContainer.textContent = item.title;

        const cardPrices = document.createElement('div');
        cardPrices.classList.add('card-prices');
        
        const cardPrice = document.createElement('span');
        cardPrice.classList.add('card-price');
        cardPrice.textContent = item.prices.originalPrice;

        const discountedPrice = document.createElement('span');
        discountedPrice.classList.add('card-discount');
        discountedPrice.textContent = item.prices.discountedPrice;

        const installments = document.createElement('span');
        installments.classList.add('card-installments');
        installments.textContent = item.prices.installments;

        cardPrices.appendChild(cardPrice);
        cardPrices.appendChild(discountedPrice);
        cardPrices.appendChild(installments);

        const button = document.createElement('button');
        button.textContent = 'Comprar';
        
        card.appendChild(img);
        card.appendChild(titleContainer);
        card.appendChild(cardPrices);
        card.appendChild(button);

        swiperSlide.appendChild(card);
        swiperWrapper.appendChild(swiperSlide);
    });

    swiperInstance = new Swiper(".mySwiperJS", {
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}

