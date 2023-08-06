//Sending data or receiving data is read in JSON format
//So you need to convert the data to send or parse data to receive and read data

const post = {
    id: 1,
    title: 'Parse Data',
    complete: false
};

//Convert to JSON string
const str = JSON.stringify(post); //{"id":1,"title":"Parse Data","complete":false}

//Parse JSON
const obj = JSON.parse(str); //{ id: 1, title: 'Parse Data', complete: false }


//localStorage is a way to store data on your browser