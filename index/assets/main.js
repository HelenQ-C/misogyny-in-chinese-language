const url = `https://sheet.best/api/sheets/77505304-8674-4d34-822c-2168f28da640`;
let wordCounter = 1; // Initialize the counter variable for word classes
let meaningCounter = 1; // Initialize the counter variable for meaning classes
let englishCounter = 1;
let omCounter = 1;
let placeholder = document.querySelector("#grid-container");
let phone = document.querySelector("#phone-grid");
let data = []; 

fetch(url)
  .then(response => response.json())
  .then(result => {
    data = result; 

    renderData(data); 
    renderData2(data); 


    const allButton = document.querySelector("#filter-all");
    allButton.addEventListener("click", () => {
      renderData(data); 
      renderData2(data); 
      updateCount(data.length, data.length);
    });

    const imposedButton = document.querySelector("#filter-imposed");
    imposedButton.addEventListener("click", () => {
      const filteredData = data.filter(item => item.ImposedMeaning === "TRUE");
      renderData(filteredData); 
      renderData2(filteredData); 
      updateCount(filteredData.length, data.length);
    });

    const femButton = document.querySelector("#filter-fem");
    femButton.addEventListener("click", () => {
      const filteredData = data.filter(item => item.ContainsTheFemaleRadical === "TRUE");
      renderData(filteredData); 
      renderData2(filteredData); 
      updateCount(filteredData.length, data.length);
    });

    const type1Button = document.querySelector("#filter-humi");
    type1Button.addEventListener("click", () => {
      const type1Button = data.filter(item => item.Types === "性行为羞辱");
      renderData(type1Button); 
      renderData2(type1Button); 
      updateCount(type1Button.length, data.length);
    });

    function updateCount(filteredCount, totalCount) {
      const countElement = document.querySelector("#count");
      countElement.textContent = `Total of: ${filteredCount} out of ${totalCount}`;
    }

  });

function renderData(data) {
  // Clear the placeholder
  placeholder.innerHTML = "";

  // Render the data
  data.forEach(function (item, i) {
    let newItem = document.createElement("div");
    newItem.classList.add("word");
    newItem.classList.add("word" + (i + 1));
    let out = `
      <div><a href="../../word${i + 1}/index.html">${item.Word}</a></div>
    `;
    newItem.innerHTML = out;
    placeholder.appendChild(newItem);
  });
  
  data.forEach(function (mean, i) {
          let newItem2 = document.createElement("div");
          newItem2.classList.add("mean");
          newItem2.classList.add("mean" + (i+1));
          let out = `
            <div>${mean.Meaning}</div>
          `;
          newItem2.innerHTML = out;
          placeholder.appendChild(newItem2);
      });
  
   data.forEach(function (trans, i) {
          let newItem3 = document.createElement("div");
          newItem3.classList.add("trans");
          newItem3.classList.add("trans" + (i+1));
          let out = `
            <div>${trans.EnglishTranslation}</div>
          `;
          newItem3.innerHTML = out;
          placeholder.appendChild(newItem3);
      });
  
      data.forEach(function (origin, i) {
          let newItem4 = document.createElement("div");
          newItem4.classList.add("origin");
          newItem4.classList.add("origin" + (i+1));
          let out = `
            <div>${origin.OriginalMeaning}</div>
          `;
          newItem4.innerHTML = out;
          placeholder.appendChild(newItem4);
      });

      data.forEach(function (originen, i) {
        let newItem7 = document.createElement("div");
        newItem7.classList.add("originen");
        newItem7.classList.add("originen" + (i+1));
        let out = `
          <div>${originen.OriginalMeaningInEnglish}</div>
        `;
        newItem7.innerHTML = out;
        placeholder.appendChild(newItem7);
    });

      data.forEach(function (fem, i) {
          let newItem5 = document.createElement("div");
          newItem5.classList.add("fem");
          newItem5.classList.add("fem" + (i+1));
          let out = `
            <div>${fem.ContainsTheFemaleRadical}</div>
          `;
          newItem5.innerHTML = out;
          placeholder.appendChild(newItem5);
      });

      data.forEach(function (type, i) {
        let newItem6 = document.createElement("div");
        newItem6.classList.add("type");
        newItem6.classList.add("type" + (i+1));
        let out = `
          <div>${type.Types}</div>
        `;
        newItem6.innerHTML = out;
        placeholder.appendChild(newItem6);
    });

}

function renderData2(dataPhone) {
  // Clear the placeholder
  phone.innerHTML = "";

  // Render the data
  dataPhone.forEach(function (item, i) {
    let phoneItem = document.createElement("div");
    phoneItem.classList.add("item-phone");
    phoneItem.classList.add("item-phone" + (i + 1));
    let out = `
      <div class="wordp wordp${i + 1}"><a href="word${i + 1}/index.html">${item.Word}</a></div>
      <br>
      <div class="head1">Meaning:</div><div class="meaningp meaningp${i + 1}">${item.Meaning}</div>
      <div class="transp transp${i + 1}">${item.EnglishTranslation}</div>
      <br>
      <div class="head2">Original Meaning:</div><div class="originp originp${i + 1}">${item.OriginalMeaning}</div>
      <div class="originenp originenp${i + 1}">${item.OriginalMeaningInEnglish}</div>
      <br>
      <div class="head3">Contains the "Female" Radical:</div><div class="femp femp${i + 1}">${item.ContainsTheFemaleRadical}</a></div>
      <br>
      <div class="head4">Type</div><div class="typep typep${i + 1}">${item.Types}</a></div>
      <hr style="height:1px;border-width:0;color:#871E1E;background-color:#871E1E">
    `;
    phoneItem.innerHTML = out;
    phone.appendChild(phoneItem);
  });
}