import "./styles.css";

function expandArticleBody() {
  const buttons = document.querySelectorAll(".expand_button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const article = button.closest("article");
      if(button.innerText === "V") {
        article.querySelector(".article_body").style.display="none";
        button.innerText = ">";
      } else {
        article.querySelector(".article_body").style.display = "block";
        button.innerText = "V";
      }
    });
  });
}

function highlightArticle() {
   let highlightBtns = document.querySelectorAll(".highlightBtn");
  highlightBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      let button = event.target;
     let article = button.parentNode.parentNode.parentNode;
      console.log(article.classList);
      if(button.innerText === '+') {
        article.classList.add("highlight");
        button.innerText = '-';
      } else {
        article.classList.remove("highlight");
        button.innerText = '+';
      }
    });
  });
}



function main() {
  expandArticleBody();
  highlightArticle();
}

main();
