import React, { useState, useEffect } from "react";
import axios from "axios"
import SearchBar from "../components/SearchBar"
import ResultsSection from "../components/ResultsSection"
import BookCard from "../components/BookCard"
import "../components/components.css"

const Search = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    
    useEffect(() => {
        searchBooks(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const searchBooks = async (book) => {
        const { data: { items } } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)

        // console.log(items)
        setBooks(items)
        console.log("books", books)
    }

    const searchBtnSubmit = (event) => {
        event.preventDefault();

        searchBooks(search)
    }

    return (
        <>
          <SearchBar />
          <div class="search-bar text-center">
          <form>
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" style={{ width: "80%", display: "inline" }}
                onChange={(e) => setSearch(e.target.value)}
                />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit" 
                onClick={searchBtnSubmit}>
                    Search
                </button>
            </form>
          </div>
          <ResultsSection>
            {search ? books.map(({ volumeInfo: { title, authors, description, imageLinks, infoLink } }) => 
                <BookCard title={title} authors={authors} description={description} image={imageLinks.thumbnail} link={infoLink}/>
            ) 
            : <h1>No Results To Display</h1>}
          </ResultsSection>
        </>
        
    )
}

export default Search
