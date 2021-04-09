import React, { useEffect, useState } from 'react'
import axios from "axios"
import SavedBook from "../components/SavedBook"

const Saved = () => { 
    const [savedBooks, setSavedBooks] = useState([]);

// get request of books from db
    useEffect(() => {
      getSavedBooks();
    }, [savedBooks])

    const getSavedBooks = async () => {
        const { data } = await axios.get("/api/books");

        // set data to state
        setSavedBooks(data)
    }

    return (
        <>
          <div class="page-title" style={{ marginLeft: "20px", marginTop: "20px"}}>
            <h1>Saved Books Page</h1>
          </div>
          {savedBooks ? savedBooks.map(({ _id, title, authors, description, image, link }) => 
          <SavedBook id={_id} title={title} authors={authors} description={description} image={image} link={link}/>
          ) 
          : <h1>No Results To Display</h1>}
        </>
    )
}

export default Saved
