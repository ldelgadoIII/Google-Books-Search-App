import React from 'react'
import axios from "axios"

const BookCard = ({ title, authors, description, image, link }) => {
    const saveCard = () => {
        axios.post("/api/books", {
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-9 rounded shadow-lg p-4 result-card">
                <h3>Title: {title}</h3>
                <h4>Author: {authors}</h4>
                <a href={link} target="\_blank">
                  <button class="btn btn-outline-success my-2 my-sm-0">View</button>
                </a>
                <button class="btn btn-outline-success my-2 my-sm-0" onClick={saveCard}>Save</button>
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

export default BookCard
