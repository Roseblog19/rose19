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
