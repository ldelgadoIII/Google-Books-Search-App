import React, { useEffect } from 'react'
import axios from "axios"

// get request of books from db
// set res to state
// map state

const Saved = () => { 
    useEffect(() => {
      getSavedBooks();
        
    }, [])

    const getSavedBooks = async () => {
        const { data } = await axios.get("/api/books");

        console.log("Saved Data: ", data )
    }

    return (
        <>
         <h1>Saved Books Page</h1>
        </>
    )
}

export default Saved
