import { Router } from "express";

let books=[];
const bookrouter=Router();


bookrouter.post('/add-book', (req, res) => {
  const { title,image,description,genre } = req.body;
  console.log(req.body);
  const newBook = { id: books.length + 1, title,image,description,genre };
  books.push(newBook);
  res.status(201).json(newBook);
});
bookrouter.get('/allbooks', (req, res) => {
    const book=books;
  console.log("Books data",books);
  res.json(book);
});
bookrouter.get('/search-book', (req, res) => {
  const { name} = req.query;
  const results = books.filter(book => book.title.includes(name));
  res.json(results);
});

bookrouter.delete('/delete-book/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  res.status(204).json({msg:"Deleted succesfully"});
});

  
export default bookrouter;