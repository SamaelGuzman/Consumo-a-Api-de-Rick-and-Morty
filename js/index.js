function getCharacters (done) {


    const results =  fetch("https://rickandmortyapi.com/api/character")
    results
    .then  (response => response.json())
    .then(data => {
        done(data);
    })


}

getCharacters(data => {
    
    data.results.forEach(personaje => {

const article = document.createRange().createContextualFragment(/*html*/`

<article>

<div class="container">
<div class="card">
  <img
    src="${personaje.image}"
    alt="1"
  />
  <p>${personaje.name}</p>
  <p>${personaje.status}</p>
  <p>${personaje.location.name}</p>

</div>

</article>

`)


const main = document.querySelector("main");
    main.append(article)
        
    });





})