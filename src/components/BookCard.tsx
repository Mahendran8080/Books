import React from 'react';
import { Mail, Phone, DollarSign } from 'lucide-react';
import { Book } from '../types/Book';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const savings = book.originalprice - book.price;
  const savingsPercentage = Math.round((savings / book.originalprice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={book.imgurl}
          alt={book.bname}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400';
          }}
        />
        {savingsPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
            {savingsPercentage}% OFF
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{book.bname}</h3>
        <p className="text-gray-600 text-sm mb-1">by {book.author}</p>
        <p className="text-gray-500 text-sm mb-4">Edition: {book.bedition}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="text-xl font-bold text-green-600">${book.price}</span>
          </div>
          {book.originalprice > book.price && (
            <div className="text-right">
              <p className="text-sm text-gray-500 line-through">${book.originalprice}</p>
              <p className="text-xs text-red-600">Save ${savings}</p>
            </div>
          )}
        </div>
        
        <div className="border-t pt-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <a href={`tel:${book.contactno}`} className="hover:text-blue-600 transition-colors">
              {book.contactno}
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${book.contactemail}`} className="hover:text-blue-600 transition-colors">
              {book.contactemail}
            </a>
          </div>
        </div>
        
        <div className="mt-4 flex space-x-2">
          <a
            href={`tel:${book.contactno}`}
            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Call
          </a>
          <a
            href={`mailto:${book.contactemail}?subject=Interested in ${book.bname}`}
            className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;