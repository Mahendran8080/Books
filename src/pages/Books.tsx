import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import { Book } from '../types/Book';

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://backend-dh0e.onrender.com/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data);
    } catch (err) {
      setError('Error loading books. Please make sure the server is running.');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm: string, filters: { author: string; edition: string }) => {
    let filtered = books;

    if (searchTerm) {
      filtered = filtered.filter(book =>
        book.bname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.author) {
      filtered = filtered.filter(book =>
        book.author.toLowerCase().includes(filters.author.toLowerCase())
      );
    }

    if (filters.edition) {
      filtered = filtered.filter(book =>
        book.bedition.toLowerCase().includes(filters.edition.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading books...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchBooks}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
     <div className="mb-8">
  <h1 className="text-3xl font-bold text-gray-900 mb-2">Available Books</h1>
  <p className="text-gray-600">Find your next textbook at a great price</p>

    <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact </h1>

  <div className="flex items-center mt-2 text-gray-700">
    
    <div>
      <p><span className="font-semibold">Admin 1:</span>  9791796867</p>
      <p><span className="font-semibold">Admin 2:</span>  7339664585</p>
    </div>
  </div>
</div>


      <SearchBar onSearch={handleSearch} />

      {filteredBooks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
          <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredBooks.length} of {books.length} books
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Books;