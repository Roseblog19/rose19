fetch("data/posts.json")
.then(response => response.json())
.then(data => {

let container = document.getElementById("blog-list");

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
