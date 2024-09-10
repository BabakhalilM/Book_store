
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const Apicontext = createContext();

export const ApicontextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const addBook = async (book) => {
        try {
            console.log(book);
            const response = await axios.post('http://localhost:3001/api/add-book', book);
            setBooks([...books, response.data]);
            alert("Book added successfully");
        } catch (err) {
            console.error("Error adding book:", err);
        }
    };

    const searchBooks = async (query) => {
        try {
            console.log("query serch",query);
            const response = await axios.get('http://localhost:3001/api/search-book', { params: query });
            console.log(response);
            setBooks(response.data);
        } catch (err) {
            console.error("Error searching books:", err);
        }
    };
    useEffect(()=>{
     async function fetchdata()  {
        try {
            const response = await axios.get('http://localhost:3001/api/allbooks');
            console.log("responce data",response);
            setBooks(response.data);
        } catch (err) {
            console.error("Error in books:", err);
        }
    };
    fetchdata();
},[]);

    const deleteBook = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/delete-book/${id}`);
            setBooks(books.filter(book => book.id !== id));
            alert("Book Deleted Successfully")
        } catch (err) {
            console.error("Error deleting book:", err);
        }
    };

    return (
        <Apicontext.Provider value={{
            deleteBook,
            addBook,
            books,setBooks,
            searchBooks
        }} >
            {children}
        </Apicontext.Provider>
    )
}