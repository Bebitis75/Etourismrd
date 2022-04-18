/*jshint esversion: 6 */
const star= document.querySelectorAll(".stars");
const stars = document.querySelectorAll(" .stars a");

stars.forEach((star, idx) => {
  star.addEventListener("click",() =>{
    star.classList.add("disabled");

    stars.forEach((otrastar , otroidx) =>{
      if(otroidx <= idx){
        otrastar.classList.add("active");
      }
    });
    console.log(`La estrella ${idx + 1} fue tocada`);
  });
});
