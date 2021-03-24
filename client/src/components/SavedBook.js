import React from 'react'
import axios from "axios"

const SavedBook = ({ id, title, authors, link, image, description }) => {
    const removeBook = (book) => {
        axios.delete("/api/books/" + book)
    }
    
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12 rounded shadow-lg p-4 result-card" id={id}>
                <h3>Title: {title}</h3>
                <h4>Author: {authors}</h4>
                <a href={link} target="\_blank">
                  <button class="btn btn-outline-success my-2 my-sm-0">View</button>
                </a>
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={() => removeBook(id)}>Remove</button>
                <hr />
                <div class="row">
                    <div class="col-md-12">
                    <img src={image} alt="book thumbnail"/>
                    <p>{description}</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SavedBook
