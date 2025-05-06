# Set Coffee - E-Commerce Platform

Set Coffee is a modern e-commerce platform designed for selling coffee products. It provides a seamless shopping experience for users and robust management tools for administrators. The platform is built using **Next.js**, **TypeScript**, and **MongoDB**, with a focus on scalability, performance, and maintainability.

---

## Features
----
### User Features
- **Product Browsing**: Explore a wide range of coffee products with detailed descriptions and ratings.
- **Wishlist**: Save favorite products for future reference.
- **Shopping Cart**: Add, remove, and manage items in the cart.
- **Checkout Process**: Guided checkout with a stepper component.
- **Reviews and Ratings**: Submit reviews and rate products.
- **User Dashboard**: Manage orders, tickets, and account details.
----
### Admin Features
- **Dashboard**: View statistics on tickets, users, and products.
- **Product Management**: Add, edit, and delete products.
- **User Management**: Manage user accounts and roles.
- **Comments Moderation**: Approve or reject user comments.
- **Support Tickets**: Handle user support tickets efficiently.

---
----
## Setup Instructions
----
### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud instance)
----
### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sahand-mahdilu/set-coffee.git
   cd set-coffee
2. 
```shell
npm install
```
3. Configure environment variables:

Create a .env file in the root directory.
Add the following variables:
```env
MONGODB_URI=<your-mongodb-uri>
NEXT_PUBLIC_API_URL=<your-api-url>
```
4. Run the development server:
```shell 
npm run dev
```
5. Open the application in your browser:
```url
http://localhost:3000
```
----
## Project Structure
Key Directories
* `src/Components`: Contains reusable UI components.

* * `modules`: Modular components like Navbar, Footer, Sidebar, etc.
* * `templates`: Page-specific components like Product Details, Wishlist, etc.
* * `layouts`: Layout components for Admin and User panels.
* `src/app`: Next.js app directory for routing and API handling.

* * `api`: API routes for backend logic (e.g., wishlist, comments).
* * `p-admin`: Admin panel pages.
* * `p-user`: User panel pages.
* * `product`: Product-specific pages.
* `configs`: Configuration files for database and utilities.

* `models`: Mongoose models for MongoDB collections.

* `styles`: Global and component-specific CSS files.

* `utils`: Utility functions for authentication, helpers, etc.
----
## Key Components
Frontend
* **Navbar**: Dynamic navigation bar with user authentication and role-based links.
* **Footer**: Contains quick links and contact information.
* **Product Details**: Displays product information, ratings, and reviews.
* **Wishlist**: Allows users to save favorite products.
* **Admin Dashboard**: Provides an overview of site statistics and management tools.
Backend
* **Database**: MongoDB for storing user, product, wishlist, and comment data.
* **API Routes**: Handle CRUD operations for products, users, comments, and tickets.
----
## Development Guide
Adding a New Feature
1. Define the Requirements: Identify the feature's purpose and scope.
2. Create Components: Add new components in `src/Components` or reuse existing ones.
3. Update API: Add or modify API routes in `src/app/api`.
4. Connect to Database: Update or create Mongoose models in models.
5. Style the Feature: Add CSS in styles or component-specific CSS files.
Example: Adding a New Page
1. Create a new file in `src/app` (e.g., `src/app/new-page/page.tsx`).
2. Add the required components and logic.
3. Update the navigation links in the Navbar.
----
## Future Development Ideas
* Payment Integration: Add support for payment gateways like Stripe or PayPal.
* Search Functionality: Implement a search bar for products.
* Advanced Analytics: Add more detailed analytics to the admin dashboard.
* Localization: Support multiple languages for a global audience.
* Mobile Optimization: Enhance responsiveness for mobile devices.
----
## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
```shell
git checkout -b feature-name
```
3. Commit your changes and push the branch:
```shell
git push origin feature-name
```
4. Open a pull request.
----
## License
MIT License

Copyright (c) 2025 Sahand Mahdilu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
