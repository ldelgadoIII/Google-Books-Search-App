import React, { useEffect } from 'react'
import axios from "axios"

// get request of books from db
// set res to state
// map state

const Saved = () => {
    useEffect(() => {
      axios.get("/api/books")
        
    }, [])

    return (
        <>
         <h1>Saved Books Page</h1>
        </>
    )
}

export default Saved
