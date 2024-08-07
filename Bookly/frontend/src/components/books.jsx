
import { useDispatch } from 'react-redux';
import { config } from '../services/config';
import { cutString } from '../utils';
import { addToCart } from '../features/cartSlice';

function Books({ books, onClick }) {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart());
  };

  return (
    <div className='col-6'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              onClick={onClick}
              style={{ height: 200, cursor: 'pointer', objectFit: 'cover', width: '100%' }}
              src={`${config.serverUrl}/image/${books?.profileImage || 'default.jpg'}`}
              className='card-img'
              alt={books?.title || 'Book'}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 style={{ fontWeight: 'bold' }} className='card-title'>
                {cutString(books?.title || 'No Title')}
              </h5>
              <div className='card-text'>
                <span style={{ fontWeight: 'bold', fontSize: 18 }}>
                  ₹{books?.rent || 'N/A'}
                </span>
              </div>
              <div>
                <button onClick={onAddToCart} className='btn btn-success'>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;



/*1st
import { useDispatch } from 'react-redux'
import { config } from '../services/config'
import { cutString } from '../utils'
import { addToCart } from '../features/cartSlice'

function Books({ Books, onClick }) {
  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addToCart())
  }

  return (
    <div className='col-3'>
      <div className='card'>
        <img
          onClick={onClick}
          style={{ height: 200, cursor: 'pointer' }}
          src={`${config.serverUrl}/image/${books['profileImage']}`}
          className='card-img-top'
          alt=''
        />/
        <div className='card-body'>
          <h5 style={{ fontWeight: 'bold' }} className='card-title'>
            {cutString(books['title'])}
          </h5>
          <div className='card-text'>
            <span style={{ fontWeight: 'bold', fontSize: 18 }}>
              ₹{books['rent']}
            </span>{' '}

          </div>
          <div>
            <button onClick={onAddToCart} className='btn btn-success'>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default books
*/


/*2nd 

import { useDispatch } from 'react-redux';
import { config } from '../services/config';
import { cutString } from '../utils';
import { addToCart } from '../features/cartSlice';

function Books({ book, onClick }) {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(book)); // Assuming addToCart requires book details
  };

  

  return (
    <div className='col-6'>
      <div className='card mb-3'>
        <div className='row no-gutters'>
          <div className='col-md-4'>
            <img
              onClick={onClick}
              style={{ height: 200, cursor: 'pointer', objectFit: 'cover', width: '100%' }}
              src={`${config.serverUrl}/image/${['profileImage']}`}
              className='card-img'
              //alt={book['title']}
              alt={'title'}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 style={{ fontWeight: 'bold' }} className='card-title'>
                {cutString(book['title'])}
              </h5>
              <div className='card-text'>
                <span style={{ fontWeight: 'bold', fontSize: 18 }}>
                  ₹{book['rent']}
                </span>
              </div>
              <div>
                <button onClick={onAddToCart} className='btn btn-success'>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;


*/

/* 3rd
import { useDispatch } from 'react-redux';
import { config } from '../services/config';
import { cutString } from '../utils';
import { useNavigate } from 'react-router-dom';

function Books({ books }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onImageClick = (book) => {
    navigate('/book-details', { state: { id: book.id } });
  };

  if (!books || books.length === 0) {
    return <p>No books available</p>;
  }

  return (
    <div className='row'>
      {books.map((book, index) => (
        <div className='col-2' key={index}>
          <div className='card mb-3'>
            <img
              onClick={() => onImageClick(book)}
              style={{ height: 200, cursor: 'pointer', objectFit: 'cover', width: '100%' }}
              src={`${config.serverUrl}/image/${book.profileImage || 'default.jpg'}`}
              className='card-img-top'
              alt={book.title || 'Book'}
            />
            <div className='card-body'>
              <div className='card-text'>
                <span style={{ fontWeight: 'bold', fontSize: 18 }}>
                  ₹{book.rent || 'N/A'}
                </span>
              </div>
              <h5 style={{ fontWeight: 'bold' }} className='card-title'>
                {cutString(book.title || 'No Title')}
              </h5>
              <div className='card-text'>
                <span>{book.author || 'Unknown Author'}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;
*/