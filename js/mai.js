const box =document.querySelector(".box");


fetch("https://restcountries.com/v3.1/all").then(response=>response.json())
.then(data=>data.forEach(country => {
box.innerHTML+=`

<div class="card" style="width: 18rem;">
  <img src="${country.flags.png}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${country.name.common}</h5>
    <p class="card-text">${country.population}</p>
    <p class="card-text">${country.region}</p>
    <p class="card-text">${country.capital}</p>
    
  </div>
</div>





`
    
}))