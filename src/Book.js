import React, { Component } from 'react'
import * as BooksAPI from "./BooksAPI";

class Book extends Component {

    // Return All Books
    showAll = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    // Update Book's Shelf
    changeShelf = (book, currentShelf) => {
        BooksAPI.update(book, currentShelf)
            .then(
                (result) => console.log(result)
            )
            .then(this.showAll())
    }

    render() {

        const {thisBook} = this.props

        return(
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thisBook.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={ (e) => this.changeShelf(thisBook, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{thisBook.title}</div>
                    <div className="book-authors">{thisBook.authors.join(', ')}</div>
                </div>
            </li>
        )
    }
}

export default Book