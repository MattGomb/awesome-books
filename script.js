/* 1. create an empty array to fill it with objects ********************DONE

 2. the add button ******************DONE
 pushes an object into the array ****** NOT YET

3. we need to display all added objects *************ALMOST

4. every object has a remove button too

5. remove  buttons have a function/event to remove the same object

6. 

*/

const bookApp = document.querySelector('#booksInput');

const booksArray = [

];

let i =0;

let titleInput;
/* THE INPUTS*/
document.getElementById('buttonInput').addEventListener('click', () => {

    titleInput = document.querySelector('#titleInput');
    titleInput2 = titleInput.value

    authorInput = document.querySelector('#authorInput');
    authorInput2 = authorInput.value
    
    let newBook = {
      id: i,
      title: titleInput2,
      author: authorInput2,
    }
    
    //console.log(i);
    booksArray.push(newBook);
    console.log(booksArray[i]);

    i++;

/* THE DOM*/

    
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('NewBook');
    bookApp.appendChild(bookDiv);
    
    const bookTitle = document.createElement('h2');
    bookTitle.innerText = newBook.title;
    bookDiv.appendChild(bookTitle);

    const bookAuthor = document.createElement('h2');
    bookAuthor.innerText = newBook.author;
    bookDiv.appendChild(bookAuthor);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Remove";
    deleteButton.setAttribute("id","buttonDelete")
    bookDiv.appendChild(deleteButton);

});

document.getElementById('buttonDelete').addEventListener('click', () => {
  function removeItem(booksArray, id) {
    const index = booksArray.indexOf(id);
    if (index > -1) {
      booksArray.splice(index, 1);
    }
    return booksArray;
  }
  removeItem();
});

/*
let title; 
let authorINput; 


book {
    author = Shaksperae
}

function NewBook (title, author) {
    new.title = input.title;
    new.author= input.author;
}
*/
