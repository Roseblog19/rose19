const params = new URLSearchParams(window.location.search);

const postId = params.get("id");

fetch("data/posts.json")
.then(response => response.json())
.then(data => {

let post = data.find(p => p.id == postId);

let container = document.getElementById("post-content");

container.innerHTML = `

<h1>${post.title}</h1>

<img src="${post.image}" class="post-img">

<p>${post.description}</p>

<p>
This is the full blog article. Here you can explain AI tools,
guides, tutorials and strategies in detail.
</p>

`;

});
