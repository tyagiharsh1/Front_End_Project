const accesKey = "UM9Az3ezTlNQWv5GmVvWdU0NnB0q_9xLWKwRCO9kl9U"

const searchform = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const searchMoreBtn = document.getElementById("show-more-btn")
let keyword = "";
let page = 1;
async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12 `;
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResult.innerHTML = "";
  }
  // console.log(data); 
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target = "_blank";
    imagelink.appendChild(image);
    searchResult.appendChild(imagelink);
  })
  searchMoreBtn.style.display = "block";

}
searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
})
searchMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
})