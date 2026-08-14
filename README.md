# PawPantry - Account & Orders

This project is the Account & Orders component for our Pet Supplies Store project called PawPantry.

My part of the project was developed using Lit and Material Web. The component is responsible for the user account, login and registration, profile, orders, wishlist, and reviews.

## My Role

Account & Orders Component

Framework: Lit

## Technologies Used

- Lit
- JavaScript
- Web Components
- Material Web
- HTML
- CSS
- Vite
- LocalStorage
- Git and GitHub

## Features

The component includes the following features:

- User registration
- User login
- User logout
- Login session after refresh
- Profile page
- Edit profile
- Order history
- Order details
- Wishlist
- Remove products from wishlist
- Reviews
- Delete reviews
- Form validation
- LocalStorage for saving user data
- Communication with the main shell using custom events

## Project Structure

```text
src/
├── components/
│   └── app-navbar.js
│
├── data/
│   └── mock-data.js
│
├── pages/
│   ├── login-page.js
│   ├── register-page.js
│   ├── profile-page.js
│   ├── edit-profile-page.js
│   ├── orders-page.js
│   ├── order-details-page.js
│   ├── wishlist-page.js
│   └── reviews-page.js
│
├── services/
│   └── storage-service.js
│
├── styles/
│   └── shared-styles.js
│
├── index.css
└── my-element.js
```

## Main Component

The main Web Component used in this project is:

```html
<my-element></my-element>
```

`my-element.js` is responsible for the main state of the component, navigation between pages, login logic, and communication between the pages.

The pages were separated into different files to keep the project more organized instead of putting all the code in one file.

## Authentication

The user can create an account using a name, email, and password.

The registration form checks:

- Required fields
- Valid email
- Password length
- Password confirmation

After creating an account, the user can log in using the same email and password.

The logged-in session is saved, so if the user refreshes the page, the user stays logged in.

The authentication in this project uses LocalStorage because this project is a frontend demo and does not have a backend.

## Profile

The profile page shows the user's:

- Name
- Email

The user can also:

- Edit profile information
- Open orders
- Open wishlist
- Open reviews
- Logout

## Orders

The orders page displays mock orders.

For every order, the user can see:

- Order number
- Date
- Status
- Number of items
- Total price

The user can also click "View Details" to see more information about the order.

The order details page shows:

- Order ID
- Date
- Status
- Items
- Quantity
- Price
- Shipping address
- Total

## Wishlist

The wishlist page displays saved products.

The user can:

- View wishlist products
- See product name, category, and price
- Remove products from the wishlist
- Click View Product

Wishlist changes are saved using LocalStorage.

## Reviews

The reviews page displays the user's product reviews.

The user can see:

- Product name
- Rating
- Date
- Comment

The user can also delete a review.

Review changes are saved using LocalStorage.

## Data

Some data in this project is mock data because there is no backend.

The mock orders, wishlist products, and reviews are stored in:

```text
src/data/mock-data.js
```

LocalStorage is handled in:

```text
src/services/storage-service.js
```

The storage service is used for:

- Account data
- Logged-in user
- Wishlist
- Reviews

## Material Web

Material Web was used for some UI elements such as:

- Text fields
- Filled buttons
- Outlined buttons

For example:

```html
<md-outlined-text-field></md-outlined-text-field>
<md-filled-button></md-filled-button>
<md-outlined-button></md-outlined-button>
```

## Integration With the Shell

This project is one component of a bigger microfrontend e-commerce project.

The Account & Orders component does not directly import the Catalog or Cart components.

Instead, it sends custom events that the main Shell can listen to.

### Back to Shop Event

When the user clicks "Back to Shop", the component sends this event:

```text
back-to-shop
```

Example:

```javascript
this.dispatchEvent(
  new CustomEvent('back-to-shop', {
    bubbles: true,
    composed: true,
  })
)
```

The Shell can listen to this event and open the Catalog component.

### View Product Event

When the user clicks "View Product" from the wishlist, the component sends:

```text
view-product
```

The selected product is sent inside:

```javascript
event.detail.product
```

Example:

```javascript
this.dispatchEvent(
  new CustomEvent('view-product', {
    detail: {
      product,
    },
    bubbles: true,
    composed: true,
  })
)
```

The Shell can use this event to open the selected product in the Catalog component.

The events use `bubbles: true` and `composed: true` so they can leave the Shadow DOM and be received by the Shell.

When this Account component is running alone, "Back to Shop" and "View Product" do not change to another component because the Shell is responsible for this navigation.

## How to Run the Project

First clone the repository:

```bash
git clone https://github.com/rahafzaw/pet-account-orders-lit.git
```

Open the project folder:

```bash
cd pet-account-orders-lit
```

Install the packages:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

Then open the local URL shown by Vite.

## Build

To create the production build:

```bash
npm run build
```

The build files will be generated inside the `dist` folder.

## Testing

I tested the main functions of the component including:

- Registration
- Login
- Logout
- Email validation
- Password validation
- Profile editing
- Login persistence after refresh
- Orders
- Order details
- Wishlist removal
- Wishlist persistence
- Reviews deletion
- Reviews persistence
- View Product event
- Back to Shop event

## Design

The project uses the PawPantry design style.

The main color used is dark green:

```text
#174c3c
```

The interface also uses light backgrounds, white cards, rounded elements, and responsive layouts.

## AI Usage

AI tools were used during the project to help with:

- Debugging
- Organizing the code
- Separating the project into files
- Fixing some errors
- Planning the integration events
- Writing documentation

The code was tested during development after making the changes.

## Repository

https://github.com/rahafzaw/pet-account-orders-lit

## Author

Rahaf

Account & Orders Component  
PawPantry Pet Supplies Store