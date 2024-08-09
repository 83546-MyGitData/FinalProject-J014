import {Route, Routes} from "react-router-dom"
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Orders from "./pages/Orders";
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile";
//import Categories from './pages/Categories/AllBooks';
import AllBooks from "./pages/Categories/AllBooks";
//import BookDetails from './categories/BookDetails';
import { Provider } from 'react-redux';
import { store } from "./store";
import BookDetails from "./pages/Categories/BookDetails";
import SignIn from "./signin/signin";
import Admin from "./admin/admin";
import AddNewBook from "./addBooks/addnewbook";
import React, { useState} from "react";



function App() {

  const [books, setBooks] = useState(AllBooks);
  const [user, setUser] = useState("");


  return (
    <Provider store={store}>
    <div className="container">
      <Routes>
        <Route index element={<Login/>} /> 
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>

        <Route path = '/' element={<Home/>} />
        <Route path = '/allBooks' element={<AllBooks/>} />


        <Route path="/" element={<Home />} />
        <Route path="/bookDetails" element={<BookDetails />} />

        <Route path = '/scienceFiction' element={<AllBooks/>} />

        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route
            path="/admin"
            element={<Admin />}
          />

        <Route
            path="/admin/addnewitem"
            element={<AddNewBook books={books} setBooks={setBooks} />}
          />
        
      </Routes>
      <ToastContainer />
    </div>
    </Provider>
  );
}

export default App;


/* //backend should contain this 
app.get('/books/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const books = await Book.find({ category: category });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
*/