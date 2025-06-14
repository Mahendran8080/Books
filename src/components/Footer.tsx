import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Books Place</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted platform for buying and selling second-hand books within the college campus.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-gray-300 hover:text-white transition-colors">
                  Browse Books
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Mail className="h-4 w-4" />
              <span className='block'>booksplace@gmail.com</span>
              

            </div>
            <div className=' text-gray-300 mb-2'>
              <p>Admin1: 9791796867</p>
  <p>Admin2: 7339664585</p>
            </div>
            <Link
              to="/admin"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors mt-4"
            >
              <Shield className="h-4 w-4" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Books Place. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;