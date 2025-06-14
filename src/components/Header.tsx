import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, Library } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-blue-800">
            <BookOpen className="h-8 w-8" />
            <span>Books Place</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-800 bg-blue-50' 
                  : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/books"
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/books') 
                  ? 'text-blue-800 bg-blue-50' 
                  : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
              }`}
            >
              <Library className="h-4 w-4" />
              <span>Browse Books</span>
            </Link>
          </nav>

          <div className="md:hidden">
            <div className="flex space-x-4">
              <Link
                to="/"
                className={`p-2 rounded-md ${
                  isActive('/') ? 'text-blue-800 bg-blue-50' : 'text-gray-600'
                }`}
              >
                <Home className="h-5 w-5" />
              </Link>
              <Link
                to="/books"
                className={`p-2 rounded-md ${
                  isActive('/books') ? 'text-blue-800 bg-blue-50' : 'text-gray-600'
                }`}
              >
                <Library className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;