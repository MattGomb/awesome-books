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

document.getElementById('buttonInput').addEventListener('click', () => {
    const seeMoreText = document.createElement('p');
    seeMoreText.innerText = 'See More';
    bookApp.appendChild(seeMoreText);


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
