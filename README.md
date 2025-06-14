# Campus Books - Second-Hand Book Marketplace

A full-stack web application for buying and selling second-hand books within a college campus. Built with React, Node.js, Express, and MongoDB.

## Features

- **Home Page**: Welcoming interface introducing the platform
- **Books Marketplace**: Browse all available books with search and filter functionality
- **Admin Panel**: Password-protected admin interface for managing books
- **Responsive Design**: Optimized for desktop and mobile devices
- **Real-time Updates**: Dynamic book management with instant updates

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for development and building
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons

### Backend
- Node.js with Express
- MongoDB with Mongoose ODM
- CORS for cross-origin requests
- Multer for file uploads

## Prerequisites

Before running this application, make sure you have:

- Node.js (v16 or higher)
- MongoDB installed and running locally, OR
- MongoDB Atlas account for cloud database

## Installation & Setup

1. **Clone and install dependencies:**
   ```bash
   npm run setup
   ```

2. **Start MongoDB:**
   - For local MongoDB: Make sure MongoDB service is running
   - For MongoDB Atlas: Update the connection string in `server/server.js`

3. **Start the application:**
   ```bash
   npm run dev
   ```

This will start both the frontend (http://localhost:5173) and backend (http://localhost:5000) servers concurrently.

## Database Schema

The MongoDB collection `books` uses the following schema:

```javascript
{
  bname: String,        // Book name
  bedition: String,     // Edition
  author: String,       // Author name
  imgurl: String,       // Image URL
  contactno: String,    // Contact number
  contactemail: String, // Contact email
  price: Number,        // Selling price
  originalprice: Number // Original price
}
```

## Admin Access

- Navigate to `/admin` or click the "Admin Portal" link in the footer
- Default password: `admin123`
- Admin can add and delete books from the marketplace

## API Endpoints

- `GET /api/books` - Fetch all books with optional search/filter parameters
- `POST /api/books` - Add a new book (admin only)
- `DELETE /api/books/:id` - Delete a book (admin only)

## Environment Variables

For production deployment, you may want to set:
- `MONGODB_URI` - MongoDB connection string
- `PORT` - Server port (default: 5000)

## Development Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:client` - Start only the frontend
- `npm run dev:server` - Start only the backend
- `npm run build` - Build the frontend for production
- `npm run setup` - Install dependencies for both frontend and backend

## Project Structure

```
├── src/                 # Frontend React application
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   └── ...
├── server/             # Backend Express application
│   ├── server.js       # Main server file
│   ├── package.json    # Backend dependencies
│   └── uploads/        # Uploaded images directory
└── ...
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.