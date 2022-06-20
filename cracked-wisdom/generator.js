function generator() {

  const btn = document.querySelector("#button")
  let picUrl = "https://cracked-wisdom.herokuapp.com/phones/random"
  let textUrl = "https://cracked-wisdom.herokuapp.com/quotes/random"

  let image = document.querySelector(".pics");
  image.src = "no-brain-loading.gif";
  let quote = document.querySelector(".quote");
  let author = document.querySelector(".author");

  fetch(picUrl)
    .then(res => res.json())
    .then(data => {
      image.src = data[0].url;
    })

  fetch(textUrl)
    .then(res => res.json())
    .then(data => {
      quote.innerHTML = data[0].quote;
      author.innerHTML = "– " + data[0].author;
    })

  btn.addEventListener("click", function () {

    fetch(picUrl)
      .then(res => res.json())
      .then(data => {
        image.src = data[0].url;
      })

    fetch(textUrl)
      .then(res => res.json())
      .then(data => {
        quote.innerHTML = data[0].quote;
        author.innerHTML = "–" + data[0].author;
      })
  })

}

generator()
