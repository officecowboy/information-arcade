function generator() {

  const btn = document.querySelector("#button")
  let picUrl = "https://api.catboys.com/img"
  let textUrl = "https://cracked-wisdom.herokuapp.com/quotes/random"

  fetch(picUrl)
    .then(res => res.json())
    .then(data => {
      let image = document.querySelector(".pics");
      image.src = data.url;
    })

  fetch(textUrl)
    .then(res => res.json())
    .then(data => {
      let quote = document.querySelector(".quote");
      quote.innerHTML = data[0].quote;
      let author = document.querySelector(".author");
      author.innerHTML = "–" + data[0].author;
    })

  btn.addEventListener("click", function () {

    fetch(picUrl)
      .then(res => res.json())
      .then(data => {
        let image = document.querySelector(".pics");
        image.src = data.url
      })

    fetch(textUrl)
      .then(res => res.json())
      .then(data => {
        let quote = document.querySelector(".quote");
        quote.innerHTML = data[0].quote;
        let author = document.querySelector(".author");
        author.innerHTML = "–" + data[0].author;
      })
  })

}

generator()
