// This function loads pokemon data from the Pokemon API
function fetchSimpsonsJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
 
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data; // response.data instead of response.json() with fetch
      })
      .then(function(quotes) {
        console.log('data decoded from JSON:', quotes[0]);
        // Build a block of HTML
        const quoteHtml = `
        <h2>${quotes[0].character}</h2>
          <p><strong>${quotes[0].quote}</strong></p>
          <img src="${quotes[0].image}" />
        `;
        document.querySelector('#simpson').innerHTML = quoteHtml;
      });
  }

  const quoteButton = document.getElementById("newquote");
  console.log(quoteButton);
  quoteButton.addEventListener("click", () => {
      fetchSimpsonsJSON()}
      );
  
  fetchSimpsonsJSON();
  