import { Router } from "express";

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author:"no",
    image: "https://th.bing.com/th/id/R.598b0c21ae7577e3911bdeaf215f6a10?rik=mYGFFMxcvtQW6w&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbook%2fbook_PNG2116.png&ehk=t3rvVsFXFNhJQE%2bHTxNEsklPMuqozVePr1XVCsPPJ9w%3d&risl=&pid=ImgRaw&r=0",
    description: "A classic novel by Harper Lee, depicting racial injustice in the American South.",
    genre: "Historical Fiction"
  },
  {
    id: 2,
    title: "1984",
    author:"no",
    image: "https://th.bing.com/th/id/R.598b0c21ae7577e3911bdeaf215f6a10?rik=mYGFFMxcvtQW6w&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbook%2fbook_PNG2116.png&ehk=t3rvVsFXFNhJQE%2bHTxNEsklPMuqozVePr1XVCsPPJ9w%3d&risl=&pid=ImgRaw&r=0",
    description: "A dystopian novel by George Orwell that delves into themes of surveillance and totalitarianism.",
    genre: "Dystopian"
  },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author:"no",
    image: "https://th.bing.com/th/id/R.598b0c21ae7577e3911bdeaf215f6a10?rik=mYGFFMxcvtQW6w&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbook%2fbook_PNG2116.png&ehk=t3rvVsFXFNhJQE%2bHTxNEsklPMuqozVePr1XVCsPPJ9w%3d&risl=&pid=ImgRaw&r=0",
    description: "J.D. Salinger's novel about teenage angst and alienation through the eyes of Holden Caulfield.",
    genre: "Literary Fiction"
  },
  {
    id: 4,
    title: "The Lord of the Rings",
    author:"no",
    image: "https://th.bing.com/th/id/R.598b0c21ae7577e3911bdeaf215f6a10?rik=mYGFFMxcvtQW6w&riu=http%3a%2f%2fpngimg.com%2fuploads%2fbook%2fbook_PNG2116.png&ehk=t3rvVsFXFNhJQE%2bHTxNEsklPMuqozVePr1XVCsPPJ9w%3d&risl=&pid=ImgRaw&r=0",
    description: "J.R.R. Tolkien's epic fantasy about the struggle to destroy a powerful ring and defeat evil.",
    genre: "Fantasy"
  }
];


const bookrouter=Router();


bookrouter.post('/add-book', (req, res) => {
  const { title,author,image,description,genre } = req.body;
  const titlefilter=title.trim();

  if(titlefilter.length<=5){
    res.status(400).json({msg:"Title must be atleast 5 letters"});
  }
  console.log(req.body);
  const newBook = { id: books.length + 1, title,author,image,description,genre };
  books.push(newBook);
  res.status(201).json(newBook);
});
bookrouter.get('/allbooks', (req, res) => {
    const book=books;
  console.log("Books data",books);
  res.json(book);
});
bookrouter.get('/search-book', (req, res) => {
  const { name } = req.query;
  console.log(name);
  console.log(books);
  const results = books.filter(book => book.title.includes(name) || book.author.includes(name));
  console.log(results);
  res.json(results);
});

bookrouter.delete('/delete-book/:id', (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  res.status(204).json({msg:"Deleted succesfully"});
});

  
export default bookrouter;