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

/*window.addEventListener('load', () => {
  const arr = JSON.parse(window.localStorage.getItem('bookarr'));
  const booksArray = document.querySelector('#booksInput');
  /*arr.forEach((item) => {
    booksArray.innerHTML += `<div class="bookDiv">
    <h2 class="title-author">"${item.title}" by ${item.author}</h2>
    <button id=${arr.indexOf(item)} onclick="deleting(this.id)" class="buttonDelete">Remove</button>
    </div>`;
  });
});
*/
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
  
  booksArray.push(newBook);

  function storageee () {
    const button = JSON.parse(localStorage.getItem('newBook'));
  if (button) {
    title.value = button.titleInput2;
    author.value = button.authorInput2;
  }
  

//accc
 localStorage.setItem('newBook', JSON.stringify(newBook));

}
titleInput2.addEventListener('button', storageee);
authorInput2.addEventListener('button', storageee);
  console.log(booksArray[i]);

/* THE DOM*/

  const bookDiv = document.createElement('div');
  bookDiv.classList.add('NewBook'+i);
  bookDiv.setAttribute("id",'NewBook'+i);
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
    
  document.getElementById("button"+i).addEventListener('click', () => {
    /*const booksTitle = document.createElement('h2');
    booksTitle.innerText = "mandarina";
    bookDiv.appendChild(booksTitle);*/
    
    booksArray.splice(booksArray[i], 1);
    
    bookDiv.setAttribute('id','delete');
    console.log(booksArray)
  });
    
  i++;
});


