const reviews = [
    {
      id: 1,
      name: "Ash Williams",
      job: "the chosen one / S mart manager ",
      img:
        "person-1.png",
      text:
        "While Ash is still a mortal human being, his numerous encounters with the forces of evil have pushed his body to the extreme both as a younger and older man.",
    },
    {
      id: 2,
      name: "Beetlejuice",
      job: "Bio-exorcist",
      img:
        "bj.png",
      text:
        "Beetlejuice is a very rude, crude, and womanizing ghost. He also gets a little crazy at times. Though he seems fun on screen, it is clear he is not a pleasant person to have around in real life",
    },
    {
      id: 3,
      name: "Pazuzu",
      job: "king of the demons",
      img:
        "exo.png",
      text:
        "Pazuzu was considered the king of the demons of the wind, and the son of the god Hanbi. In The Exorcist Pazuzu appears as a demon who possesses Regan MacNeil.",
    },
    {
      id: 4,
      name: "Freddy Krueger",
      job: "Dream Demon",
      img:
        "fred2.jpg",
      text:
        "Freddy can enter the dreams of anyone on Elm Street in Springwood (provided that there is enough fear of him), and whatever injuries he inflicts on them in the dream world will cross over into the real world. ",
    },
  ];

//select items//
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// the valor of the fist items //
let currentItem = 0; 

window.addEventListener('DOMContentLoaded', function(){
 showPerson();
})

function showPerson (){
  const item  = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem =0;
  }
  showPerson();
})

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0 ){
    currentItem = reviews.length -1;
  }
  showPerson();
})

randomBtn.addEventListener('click',function(){
 currentItem = Math.floor(Math.random() * reviews.length);
 showPerson();

})