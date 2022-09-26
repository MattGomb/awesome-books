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

let titleInput;
/* THE INPUTS*/
document.getElementById('buttonInput').addEventListener('click', () => {

    titleInput = document.querySelector('#titleInput');
    titleInput2 = titleInput.value

    authorInput = document.querySelector('#authorInput');
    authorInput2 = authorInput.value
    
    let newBook = {
      title: titleInput2,
      author: authorInput2,
    }
    
    booksArray.push(newBook);

    console.log(booksArray);


/* THE DOM*/












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
