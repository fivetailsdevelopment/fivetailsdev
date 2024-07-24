const portfolioTracks = document.querySelectorAll(".track-line");
const portfolioCards = document.querySelectorAll(".portfolio-cards");
const portfolioCardContent = document.querySelectorAll(".portfolio-card-content");
const portfolioLabels = document.querySelectorAll(".portfolio-labels");

const observerTrack = new IntersectionObserver(portfolioTracksIn)
const observerCard = new IntersectionObserver(portfolioCardsIn)
const observerContent = new IntersectionObserver(portfolioCardContentIn)
const observerLabels = new IntersectionObserver(portfolioLabelIn)

const addObserver = (e) => {
    let observer = new IntersectionObserver ((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById('nav-menu').classList.add('whiteBackground');
            } else {
                document.getElementById('nav-menu').classList.remove('whiteBackground');
            }
        })
    })
    observer.observe(e);
}


const scrollTrigger = (selector) => {
    let element = [];
    element = document.querySelectorAll(selector);
      element.forEach(e => {
        addObserver(e)
    })
}

scrollTrigger('.scroll-reveal')


function portfolioTracksIn(entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("track-animate", entry.isIntersecting)
    })
}

function portfolioCardsIn(entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("card-animate", entry.isIntersecting)
    })
}

function portfolioCardContentIn(entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("content-animate", entry.isIntersecting)
    })
}

function portfolioLabelIn(entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("content-animate", entry.isIntersecting)
    })
}


portfolioTracks.forEach(track => {observerTrack.observe(track)});
portfolioCards.forEach(card => {observerCard.observe(card)});
portfolioCardContent.forEach(item => {observerContent.observe(item)});
portfolioLabels.forEach((item) => {observerLabels.observe(item)});
