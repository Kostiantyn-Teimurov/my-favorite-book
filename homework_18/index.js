const textElement = document.getElementById("text");

fetch("https://kostiantyn-teimurov.github.io/my-favorite-book/homework_18/book.json")
.then((res) => res.json())
.then((obj) => {
    // console.log(obj);
    const { title, author, year } = obj;
    textElement.innerText = `Title: ${title}; Author: ${author}; Year: ${year}`;
})