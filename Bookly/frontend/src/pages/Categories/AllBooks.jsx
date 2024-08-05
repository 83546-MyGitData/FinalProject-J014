import Navbar from '../../components/navbar';

const AllBooks = () => {
    const books = [
    'Science fiction',
      'Mystery',
      'Fantasy',
      'Biography',
      'Science Fiction',
      'Romance',
      'Thriller',
      'Self-Help',
      'Historical',
      'Political thriller',
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
                <li key={index}>{type}</li>
                 ))}
            </ul>
            </div>

            <div style={{flex: 1, padding: '10px'}}>
                <h1>Book Category</h1>
                <p>Content for the book category page goes here.</p>
            </div>

        </div>
        </div>
    );
}

export default AllBooks;
