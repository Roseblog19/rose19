fetch("data/posts.json")
.then(response => response.json())
.then(data => {

let container = document.getElementById("blog-container");

data.forEach(post => {

container.innerHTML += `

<div class="card">

<h3>${post.title}</h3>

<p>${post.description}</p>

<a href="post.html?id=${post.id}">
Read More
</a>

</div>
`;

});

});
document.getElementById("search").addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});
  document.getElementById("category").addEventListener("change", function(){

let value = this.value;

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

if(value === "all"){
card.style.display="block";
}else if(card.innerText.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});


});
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function filterPosts(){

let searchValue = searchInput.value.toLowerCase();
let categoryValue = categorySelect.value;

let cards = document.querySelectorAll(".card");

cards.forEach(card => {

let text = card.innerText.toLowerCase();

let categoryMatch =
categoryValue === "all" || text.includes(categoryValue.toLowerCase());

let searchMatch = text.includes(searchValue);

if(searchMatch && categoryMatch){
card.style.display="block";
}else{
card.style.display="none";
}

});

}

searchInput.addEventListener("keyup", filterPosts);
categorySelect.addEventListener("change", filterPosts);




