# React + Vite
React Product and Cart Application
This project is a ReactJS application that allows users to view a list of products, add them to a shopping cart, remove items from the cart, and dynamically adjust the quantity of items in the cart. The cart calculates the total price and applies a 10% discount on the final price.

Features
Fetches a list of products from the Fake Store API.
Displays products with relevant details like image, title, price, and description.
Responsive layout for a clean user experience.
Cart functionality:
Add products to the cart.
Remove products from the cart.
Update the quantity of products in the cart.
Display individual and total prices based on quantity.
Apply a 10% discount on the final total price.
Dynamic updates of the cart state when items are added or removed.
Seamless navigation between the Product Page and Cart Page using React Router.
Technologies Used
ReactJS: For building the UI and handling state.
React Router: For routing between the Product Page and Cart Page.
CSS: For styling the components and ensuring responsiveness.
Fake Store API: For fetching product data.
Setup
Clone the repository:

bash

git clone https://github.com/yourusername/react-product-cart.git
Install dependencies: Navigate to the project directory and run:

bash
Copy code
npm install
Run the application: After the dependencies are installed, start the application:

bash
Copy code
npm start
The app will be available on http://localhost:3000.

Project Structure
src:
components: Contains the React components like ProductList, Cart, ProductItem, and CartItem.
pages: Contains the main pages like HomePage and CartPage.
App.js: Main component that sets up routing between product and cart pages.
Functionality Breakdown
Product Page:

Displays all products fetched from the Fake Store API.
Each product has an "Add to Cart" button.
When clicked, the product is added to the cart.
Cart Page:

Displays the list of items added to the cart.
For each item, users can:
Increase or decrease the quantity.
Remove the item from the cart.
Displays the total price for each product and the final cart price after applying a 10% discount.
