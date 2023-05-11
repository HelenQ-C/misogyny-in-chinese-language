const url = `https://sheet.best/api/sheets/77505304-8674-4d34-822c-2168f28da640`;
let counter = 1;

console.log(`Fetching url - ${url}`);

fetch(url)
  .then(response => response.json())
  .then(data => {
      const words = data.map(item => item.word);
      console.log(words);
      data.forEach(function (word, i) {
          let placeholder = document.querySelector("#data-output");
          let newItem = document.createElement("div");
          newItem.classList.add("word");
          newItem.classList.add("word" + (i+1));
          let out = `
            <div class="wordinfo"><a href="word${i+1}/index.html">${word.Word}</a></div>
          `;
          newItem.innerHTML = out;
          placeholder.appendChild(newItem);
      });
  });
