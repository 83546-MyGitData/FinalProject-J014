import {Route, Routes} from "react-router-dom"
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import Home from "./pages/Home/Home"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile/Profile";
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
import Footer from "./components/Footer/Footer";
import PaymentForm from "./pages/Payment/Paymentform";





function App() {

  const [books, setBooks] = useState(AllBooks);
  const [user, setUser] = useState("");


  return (
    
    <div className="container-fluid">
      <Provider store={store}>
      <Routes>
        <Route index element={<Home/>} /> 
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path = '/allBooks' element={<AllBooks/>} />
        <Route path="/bookDetails" element={<BookDetails />} />
        <Route path = '/scienceFiction' element={<AllBooks/>} />
        <Route path="/signin" element={<SignIn setUser={setUser} />} />
        <Route
            path="/admin"
            element={<Admin />}/>
        <Route
            path="/admin/addnewitem"
            element={<AddNewBook books={books} setBooks={setBooks} />}
          />
        <Route path="/payment" element={<PaymentForm/>}/>
        
      </Routes>
      <ToastContainer />
      <Footer/>
      </Provider>
    </div>
    
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