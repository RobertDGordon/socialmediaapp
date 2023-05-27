function addCard(item) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);

  template.querySelector(".card-title").innerText = item.title;
  template.querySelector(".card-text").innerText = item.content;
  template.querySelector(".card-image").src = item.imgUrl;
  document.querySelector("#card-list").appendChild(template);
}

if ("content" in document.createElement("template")) {
  //do a fetch call to our backend
  fetch(`http://localhost:3000/feed/posts`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.result);
      //map over the result
      data.result.map((item) => {
        addCard(item); //call our addCard function
      });
    });
}
