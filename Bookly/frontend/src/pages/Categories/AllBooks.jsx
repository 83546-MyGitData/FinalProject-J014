/*import Books from '../../components/books';
import Navbar from '../../components/navbar';
import { Link, useNavigate } from 'react-router-dom';

const AllBooks = () => {
  const books = [
    { id: 1, title: 'Science Fiction', profileImage: 'science-fiction.jpg', rent: 100 },
    { id: 2, title: 'Mystery', profileImage: 'mystery.jpg', rent: 150 },
    // Add other book objects here
  ];

  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div style={{ width: '200px', borderRight: '1px solid #ddd', padding: '10px' }}>
          <h3>Categories</h3>
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <Link to={`/${book.title}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ flex: 1, padding: '10px' }}>
          <h1>Results</h1>
          {books.length === 0 && (
            <h3 className='mt-5' style={{ textAlign: 'center' }}>
              There are no books at the moment.
            </h3>
          )}

          <div className='row mt-5'>
            {books.map((book) => (
              <Books
                key={book.id}
                onClick={() => {
                  // navigate with extra data (id)
                  navigate('/book-details', { state: { id: book.id } });
                }}
                books={book}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
*/




import { useEffect } from 'react';
import Books from '../../components/books';
import Navbar from '../../components/navbar';
import { Link , Navigate } from 'react-router-dom'


const AllBooks = () => {
    const books = [
    'Sciencefiction',
      'Mystery',
      'Fantasy',
      'Biography',
      'Romance',
      'Thriller',
      'Historical',
      'Political',
      'Horror',
      'Poetry',
      'Suspense'
    ];


  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     const result = await getBooks();
  //     if (result) {
  //       setBooks(result);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

    return (
        <div>
            <Navbar />
        <div style ={{display : 'flex'}}>
            <div style = {{ width : '200px', borderRight:'1px solid #ddd', padding: '10px'}}>
            <h3>Categories</h3>
            <ul>
                {books.map((type, index) => (
                <li>
                <Link to={`/${type}`}>{type}</Link>
                
                </li>
                 ))}
            </ul>
            </div>

            <div style={{flex: 1, padding: '10px'}}>
                <h3>Results</h3>
                 {books.length == 0 && (
                    <h3 className='mt-5' style={{ textAlign: 'center' }}>
                        There are not books at the moment.
                    </h3>
                )}

        <div className='row mt-5'>
        {books.map((books) => {
          return (
            <Books
              onClick={() => {
                // navigate with extra data (id)
                Navigate('/books-details', { state: { id: books['id'] } })
              }}
              books={books}
            />
          )
        })}
      </div> 

            </div>

        </div>
        </div>
    );
}

export default AllBooks;

