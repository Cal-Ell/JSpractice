//Challenge 1

const library = [
    {
        title: 'Book1',
        author: 'Author1',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Book2',
        author: 'Author2',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Book3',
        author: 'Author3',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

let obj = library;

obj[0].status.read = true;
obj[1].status.read = true;
obj[2].status.read = true;

const {title: firstBook} = obj[0];

const convert = JSON.stringify(library);
console.log(convert)