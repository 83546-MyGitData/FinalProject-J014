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
                <h1>Results</h1>
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
