const submitHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const errors = validateForm(formData);
  if(errors) {
    const searchForm = document.querySelector("#searchForm");
    const newErrorDiv = document.createElement("div");
    newErrorDiv.innerHTML = `<div class="error" id="searchError">Please enter a search term</div>`;
    searchForm.appendChild(newErrorDiv);
  }
  else {
    const allArticles = document.querySelectorAll("article");
    allArticles.forEach((article) => {
      const articleName = article.querySelector("h2").innerHTML;
      const searchInput = formData.get("searchTerm");
      if(articleName.toLowerCase().includes(searchInput.toLowerCase())) {
        article.classList.remove("hidden");
      }
      else {
        article.classList.add("hidden")
      }
    });
  }
}

//Validate the form: the form must have a check if it is blank
function validateExists(value) {
  return value && value.trim();
}

function validateForm(formData) {
  if(!validateExists(formData.get("searchTerm"))) {
    return "Please enter a search term";
  }
  return null;
}








//create an eventListener to the search form on the HTML
const main = () => {
  //get the form element
  const form = document.querySelector("#searchForm");
  //attach the submit handler
  form.addEventListener("submit", submitHandler)
};

window.addEventListener("DOMContentLoaded", main);

