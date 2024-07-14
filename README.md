BOOKSHELFXCHANGE
Welcome to BOOKSHELFXCHANGE, a comprehensive tourism management website dedicated to showcasing notable tourist spots within a specific category. This project focuses on creating a dynamic and responsive platform where users can explore and manage information about various tourist destinations.

Live Site
https://startling-rolypoly-f9513d.netlify.app

Client-side Repository
https://github.com/AnasCoding1986/library-a-11-client

Server-side Repository
https://github.com/AnasCoding1986/library-a-11-server

Features
Responsive Design: The website is fully responsive, ensuring a seamless experience across mobile, tablet, and desktop devices.
User Authentication: Users can register, log in, and log out using email and password-based authentication. Social logins via Google are also supported.
Tourist Spot Management: Users can add, update, and delete tourist spots, with data stored securely in the database.
Country-specific Listings: The platform is focused on specific regions and countries, allowing users to explore tourist spots within a chosen category.
Private Routes: Certain actions, like adding or updating tourist spots, are protected and require user authentication.
Key Components
Navbar: Features navigation links to Home, All Tourist Spots, Add Tourist Spot, My List, Login, and Register. Displays user information when logged in.
Home Page: Includes a banner/slider, tourist spots section, country information, and two extra sections for added value.
Add Tourist Spot: A private route where authenticated users can add new tourist spots with details such as image URL, name, location, average cost, and more.
All Tourist Spots: Displays a list of all tourist spots added by users, with sorting functionality based on average cost.
View Details Page: Shows detailed information about a specific tourist spot, accessible via private routes.
My List Page: Allows users to view and manage tourist spots they have added.
Update Page: Enables users to update information about their added tourist spots.
Footer: Contains website name, copyright information, contact details, and social media links.
Technologies Used
Frontend: React, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Authentication: Firebase Auth
Deployment: Netlify (Frontend), Heroku (Backend)
Instructions
Clone the Repositories:
git clone https://github.com/AnasCoding1986/library-a-11-client.git
git clone https://github.com/AnasCoding1986/library-a-11-server.git
cd library-a-11-client
npm install
cd ../library-a-11-server
npm install

Environment Variables:

Create a .env file in the server directory and add your MongoDB credentials and Firebase config keys.
Run the Project:

Start the client-side: npm start
Start the server-side: npm run dev
Explore the Features:

Register or log in to access protected routes and manage tourist spots.
Use the dropdown on the All Tourist Spots page to sort the listings.
Contribution
Feel free to contribute to the project by submitting issues or pull requests on GitHub. Any contributions, suggestions, or feedback are highly appreciated!

This project is a part of the web development course assignments and adheres to the provided guidelines and requirements. For any queries or support, please contact the project maintainer.
