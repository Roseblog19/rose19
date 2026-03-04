fetch("data/posts.json")
.then(response => response.json())
.then(data => {

let container = document.getElementById("blog-container");

data.forEach(post => {

container.innerHTML += `

<div class="card">

<img src="${post.image}" class="card-img">

<h3>${post.title}</h3>

<p>${post.description}</p>

<a href="post.html?id=${post.id}">
Read More
</a>

</div>

`;

});

});
container.innerHTML += `

<div class="card">

<img src="${post.image}" class="card-img">

<h3>${post.title}</h3>

<p>${post.description}</p>

<a href="post.html?id=${post.id}">
Read More
</a>

</div>

`;
let featuredContainer = document.getElementById("featured-posts");

data.forEach(post => {

if(post.featured){

featuredContainer.innerHTML += `

<div class="card">

<img src="${post.image}" class="card-img">

<h3>${post.title}</h3>

<p>${post.description}</p>

<a href="post.html?id=${post.id}">
Read More
</a>

</div>

`;

}

});

