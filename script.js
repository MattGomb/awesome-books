/* 1. create an empty array to fill it with objects ********************DONE

 2. the add button ******************DONE
 pushes an object into the array ****** NOT YET

3. we need to display all added objects *************ALMOST

4. every object has a remove button too

5. remove  buttons have a function/event to remove the same object

6. 

*/


const bookApp = document.querySelector('#booksInput');

//const booksArray = [
  
//];

let i;



let titleInput;
let authorInput;

var bookDiv;

if (localStorage.getItem('books') === null) {

} else {
  
  const booksArray = JSON.parse(localStorage.getItem('books'));
  
  localStorage.setItem('books', JSON.stringify(booksArray));
  let i = 0;
  booksArray.forEach((item) => {
  
 

  bookDiv = document.createElement('div');
  bookDiv.classList.add('NewBook');
  bookDiv.setAttribute("id",'NewBook'+i);
  bookApp.appendChild(bookDiv);
  
 const bookTitle = document.createElement('h2');
 bookTitle.innerText = item.title;
 bookDiv.appendChild(bookTitle);

 const bookAuthor = document.createElement('h2');
 bookAuthor.innerText = item.author;
 bookDiv.appendChild(bookAuthor);

 const buttonDelete = document.createElement('button');
 buttonDelete.innerText = 'Remove';
  buttonDelete.classList.add('buttonDelete');
  buttonDelete.setAttribute("id","button"+i);
  bookDiv.appendChild(buttonDelete);

  document.getElementById("button"+i).addEventListener('click', () => {
    
    booksArray[i].setAttribute('id','delete');
   // bookDiv=("id",'delete');
    booksArray.splice(booksArray[i], 1);
     
     //bookDiv.setAttribute('id','delete');
     console.log(booksArray)
   });
   i++;
   
  });

}


















/* THE INPUTS*/
document.getElementById('buttonInput').addEventListener('click', () => {











  titleInput = document.querySelector('#titleInput');
  let titleInput2 = titleInput.value

  authorInput = document.querySelector('#authorInput');
  let authorInput2 = authorInput.value;
    
  let newBook = {
   // id: i,
    title: titleInput2,
    author: authorInput2,
  }
  
  //booksArray.push(newBook);
  

/* THE DOM*/

  //const bookDiv = document.createElement('div');
/*  bookDiv.classList.add('NewBook');
  bookDiv.setAttribute("id",'NewBook');
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
  buttonDelete.setAttribute("id","button");
  bookDiv.appendChild(buttonDelete);
    
  document.getElementById("button").addEventListener('click', () => {
  
    
   // booksArray.splice(booksArray[i], 1);
    
    bookDiv.setAttribute('id','delete');
    console.log(booksArray)
  });
  
  */
/*
  if (localStorage.getItem('books') === null) {
    const booksArray = [];
    booksArray.push(newBook);
    localStorage.setItem('books', JSON.stringify(booksArray));

    const bookDiv = document.createElement('div');
  bookDiv.classList.add('NewBook');
  bookDiv.setAttribute("id",'NewBook');
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
  buttonDelete.setAttribute("id","button");
  bookDiv.appendChild(buttonDelete);
    
  document.getElementById("button").addEventListener('click', () => {
  
    
   // booksArray.splice(booksArray[i], 1);
    
    bookDiv.setAttribute('id','delete');
    console.log(booksArray)
  });

  } else {
    

    const booksArray = JSON.parse(localStorage.getItem('books'));
    booksArray.push(newBook);
    localStorage.setItem('books', JSON.stringify(booksArray));
  
    
    
  
    bookDiv = document.createElement('div');
    bookDiv.classList.add('NewBook');
    bookDiv.setAttribute("id",'NewBook');
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
    buttonDelete.setAttribute("id","button");
    bookDiv.appendChild(buttonDelete);


   






  }



  



*/







  //i++;
  
});


