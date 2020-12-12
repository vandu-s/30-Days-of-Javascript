const reviews = [{
        id: 0,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 1,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 2,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 3,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];






// local reviews data
// const img = document.getElementById("person-img");
// const author = document.getElementById("author");
// const job = document.getElementById("job");
// const info = document.getElementById("info");

// const prevBtn = document.querySelector(".prev-btn");
// const nextBtn = document.querySelector(".next-btn");
// const randomBtn = document.querySelector(".random-btn");



const personImg = document.getElementById('person-img');
const authorName = document.getElementById('author');
const authorJob = document.getElementById('job');
const authorInfo = document.getElementById('info');
const cartWrapper = document.querySelector('article')
    // console.log(cartWrapper);
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

function showPerson() {
    const data = reviews[currentItem];
    // console.log(data);
    cartWrapper.id = data.id;
    authorName.innerHTML = data.name;

    personImg.src = data.img;
    authorJob.innerHTML = data.job;
    authorInfo.innerHTML = data.text;
    // console.log('hand shake')

}
nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();


});
prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});


randomBtn.addEventListener('click', () => {
    let randomItem = Math.floor(Math.random() * reviews.length);
    console.log(randomItem);
    currentItem = randomItem;
    showPerson();

});
// window.addEventListener("DOMContentLoaded", function() {
//     showPerson(currentItem);
// });

// function showPerson(person) {
//     const data = reviews[person];
//     // console.log(data);
//     cartWrapper.id = data.id;
//     authorName.innerHTML = data.name;

//     personImg.src = data.img;
//     authorJob.innerHTML = data.job;
//     authorInfo.innerHTML = data.text;
//     // console.log('hand shake')

// }
// // console.log(counter)
// nextBtn.addEventListener('click', () => {
//     currentItem++;
//     if (currentItem > reviews.length - 1) {
//         currentItem = 0;
//     }
//     showPerson(currentItem);


// });
// prevBtn.addEventListener('click', () => {
//     currentItem--;
//     if (currentItem < 0) {
//         currentItem = reviews.length - 1;
//     }
//     showPerson(currentItem);
// });