//Write a program that accepts a list of objects representing books [ title, author, and year] and a callback function. The program should use the map function to create a new list containing only the titles of the books, and then pass this new list to the callback function. The callback function should then log the titles to the console in alphabetical order.

const books = [
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        year: 1861,
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        year: 1866,
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        year: 1865,
    },
    {
        title: "A Passage to India",
        author: "E. M. Forster",
        year: 1924,
    },
];

function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "));
}

function extractTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles);
}

extractTitles(books, logTitles);