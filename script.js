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

  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Remove';
  buttonDelete.classList.add('buttonDelete');
  buttonDelete.setAttribute("id","button"+i);
  bookDiv.appendChild(buttonDelete);
    
   i++;

  document.getElementById("button"+i).addEventListener('click', () => {
    const booksTitle = document.createElement('h2');
    booksTitle.innerText = "mandarina";
    bookDiv.appendChild(booksTitle);
  });
  
});
  
