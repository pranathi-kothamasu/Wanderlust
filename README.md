# Wanderlust
Wanderlust is a full-stack Airbnb-inspired web application that allows users to explore, create, and manage travel listings with category-based filtering and map integration. Built using Node.js, Express, MongoDB, EJS, and Passport.js, it supports user authentication, reviews, and responsive UI design.

## Features
- User authentication & authorization (Sign up / Login / Logout)
- Create, edit, and delete property listings
- Image uploads with cloud storage
- Interactive maps with geocoding support
- Ratings and reviews for listings
- Location-based search functionality
- Category-based filters (Trending, Rooms, Mountains, Arctic, Boats, etc.)
- Responsive UI with modern layout
- Flash messages for user feedback

## 🛠️ Tech Stack
**Frontend**
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- CSS3

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB (Atlas)
- Mongoose ODM

**Other Tools & Services**
- Passport.js (Authentication)
- Multer & Cloudinary (Image Uploads)
- MapTiler (Maps & Geocoding)
- Express-Session & Connect-Mongo (Sessions)
- MVC Architecture

## Project Architecture (MVC)
This project follows the **MVC (Model-View-Controller)** design pattern for clean separation of concerns.

MAJOR_PROJECT/
│
├── models/ # Mongoose schemas (User, Listing, Review)
├── controllers/ # Business logic for routes
├── routes/ # Express route definitions
├── views/ # EJS templates
│ ├── listings/
│ ├── users/
│ ├── layouts/
│ └── includes/
├── public/ # Static assets (CSS, JS, images)
├── utils/ # Helper utilities (errors, geocoding)
├── init/ # Database seed files
├── app.js # Main application file
└── package.json

## Application Flow
1. Users can browse listings without logging in.
2. Authentication is required to:
   - Create listings
   - Add reviews
   - Edit or delete owned content
3. Each listing includes:
   - Image
   - Price
   - Location & country
   - Category
   - Interactive map marker
4. Search and filters dynamically update visible listings.
5. Sessions are stored securely in MongoDB.

## Maps & Location

- Geocoding converts location + country into coordinates.
- Listings are displayed on an interactive map.
- Each listing has a marker pointing to its real-world location.

## Installation & Setup

#bash
git clone https://github.com/your-username/Wanderlust.git
cd Wanderlust
npm install 


#Create a .env file:

ATLASDB_URL=your_mongodb_atlas_url
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret
MAP_TOKEN=your_maptiler_token


#Run the application:
nodemon app.js


#Open in browser:
http://localhost:8080

#Deployment
The application is deployed and connected to MongoDB Atlas with cloud-based image storage and map services.

#Future Improvements
-Booking & availability system
-Wishlist functionality
-Admin dashboard
-Advanced search with price range
-Pagination & performance optimizations

#Author
Pranathi Kothamasu
