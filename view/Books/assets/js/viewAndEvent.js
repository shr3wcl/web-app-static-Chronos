let API = "http://localhost:3000/book";

function excute() {
    getListBook(renderFrame);
    getNewBook();
};

excute();

//function
function getListBook(callback) {
    fetch(API)
        .then(Response => {
            return Response.json();
        })
        .then(callback);
}

function updateBook(data, id) {
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(API + '/' + id, options)
        .then(Response => {
            return Response.json();
        }).then(callback)
}

function renderFrame(books) {
    let listBookFrame = document.querySelector('#list-books-block');

    let html = books.map(book => {
        return `
            <li class="book-class-id-${book.id} book-block">
                <img src="${book.avatar}" title="Picture">
                <h4 title="${book.name}">${book.name}</h4>
                <p title="${book.author}">${book.author}</p>
                <a href="${book.link}">Read Now</a>
                <a href="#" onclick="handleEditBook(${book.id})" id="edit-a-id-${book.id}">Edit</a>
                <br>
                <a href="#" onclick="handleDeleteBook(${book.id})">Delete</a>
                <a href="#" id="love-book-id${book.id}" class="love-book" title="Mark as favorite" onclick="markFunc(${book.id})">
                    <i class="ti-star"></i>
                </a>
            </li>
        `
    })
    listBookFrame.innerHTML = html.join('');
}

function getNewBook() {
    let addNewBookBtn = document.querySelector('#add-book-form-btn');

    addNewBookBtn.addEventListener('click', () => {
        let name = document.querySelector('input[name="name"]').value;
        let author = document.querySelector('input[name="author"]').value;
        let pictureUrl = document.querySelector('input[name="avatar"]').value;
        let linkRead = document.querySelector('input[name="link"]').value;

        let data = {
            name: name,
            author: author,
            avatar: pictureUrl,
            link: linkRead
        };
        handleAddBook(data);
    })
}

// Handle Function

function handleAddBook(data) {
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(API, options)
        .then(Response => {
            return Response.json();
        })
        .then(callback);
}

function handleDeleteBook(id) {
    let choice = confirm('Are you sure you want to delete it?');
    if (choice === true) {
        let options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch(API + '/' + id, options)
            .then(Response => {
                return Response.json();
            })
            .then(callback);
    }
}

function handleEditBook(id) {
    let name = document.querySelector('input[name="name"]');
    let author = document.querySelector('input[name="author"]');
    let pictureUrl = document.querySelector('input[name="avatar"]');
    let linkRead = document.querySelector('input[name="link"]');
    let formEditFrame = document.querySelector('#form-book-block');
    formEditFrame.style.display = 'inline';


    name.value = document.querySelector(`.book-class-id-${id} h4`).textContent;
    author.value = document.querySelector(`.book-class-id-${id} p`).textContent;
    pictureUrl.value = document.querySelector(`.book-class-id-${id} img`).src;
    linkRead.value = document.querySelector(`.book-class-id-${id} a`).href;



    let updateNewBookBtn = document.querySelector('#update-btn');
    let addNewBookBtn = document.querySelector('#add-book-form-btn');
    addNewBookBtn.style.display = 'none';
    updateNewBookBtn.style.display = 'inline';

    updateNewBookBtn.addEventListener('click', () => {

        let name = document.querySelector('input[name="name"]').value;
        let author = document.querySelector('input[name="author"]').value;
        let pictureUrl = document.querySelector('input[name="avatar"]').value;
        let linkRead = document.querySelector('input[name="link"]').value;

        let data = {
            name: name,
            author: author,
            avatar: pictureUrl,
            link: linkRead
        }
        updateBook(data, id);
        updateNewBookBtn.style.display = 'none';
        addNewBookBtn.style.display = 'inline';
        formUpdateFrame.style.display = 'none';
    });

}

function markFunc(id) {
    let markBtn = document.querySelector(`#love-book-id${id}`);

    if (markBtn.style.color === 'yellow') {
        markBtn.style.color = 'grey';
    } else {
        markBtn.style.color = 'yellow';
    }
}