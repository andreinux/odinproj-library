const myLibrary = [];


function Book (title, author, release, haveRead){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.release = release;
    this.haveRead = haveRead;
}
//yohooooooo
Book.prototype.readStatus = function (){
    this.haveRead = !this.haveRead;
}


function addBookToLibrary (title, author, release, haveRead){
    const newbook = new Book (title, author, release, haveRead);
    myLibrary.push(newbook);
}

addBookToLibrary("Harry Potter" , "J.K Rowling" , 1990, "haveRead");
addBookToLibrary("Romeo & Juliet" , "Sheakspeare", 1980, "havRead");
console.log(myLibrary);



const container = document.querySelector("#container");

function displayBooks (){
        container.innerHTML = "";

    myLibrary.forEach((book)=> {
        
        let card = document.createElement("div");
        card.classList.add("card");

        card.dataset.id = book.id;


        let title = document.createElement("p");
        let author = document.createElement("p");
         let release = document.createElement("p");
          let haveRead = document.createElement("p");

          title.textContent = book.title;
          author.textContent = book.author;
          release.textContent = book.release;
          haveRead.textContent = book.haveRead ? "Read" : "Not Read";

          container.append(card);

          let removeBtn = document.createElement("button");
          removeBtn.classList.add("removeBtn");
          removeBtn.textContent = "Remove Book";


          removeBtn.addEventListener("click" , ()=> {
            const id = card.dataset.id;

           const index = myLibrary.findIndex(book=> book.id === id);
           myLibrary.splice(index, 1);

           displayBooks();
        })


          let readStatusBtn = document.createElement("button");
          readStatusBtn.classList.add("readStatusBtn");
          readStatusBtn.textContent = "Have Read?";

          readStatusBtn.addEventListener("click" , ()=> {
            book.readStatus();
            readStatusBtn.textContent = book.haveRead? "Read": "Not Read";
            displayBooks();
          })


        card.append(title, author ,release,haveRead,removeBtn, readStatusBtn);
         
    })
}


//display call 
displayBooks();

// new book function

let newBook = document.querySelector("#newBook-btn");
let form = document.querySelector("#newBook-form");

newBook.addEventListener("click", ()=> {
    form.classList.remove("hidden");
})

//submit and add to library

let submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click" , (e)=> {
    e.preventDefault();
    

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let release = document.querySelector("#release").value;
    let haveRead = document.querySelector("#haveRead").value;

    addBookToLibrary(title, author, release, haveRead);
    displayBooks();

    //hide form again

    form.classList.add("hidden");
    form.reset();

})

//remove book function
