// Define variables for the navigation menu and mobile menu button
const nav = document.querySelector('nav ul');
const mobileMenuButton = document.querySelector('#mobile-menu-button');

// Toggle the mobile menu when the mobile menu button is clicked
mobileMenuButton.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Define variables for the featured books section and best sellers section
const featuredBooksSection = document.querySelector('#featured-books');
const bestSellersSection = document.querySelector('#best-sellers');

// Create an array of featured books and best sellers
const featuredBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://via.placeholder.com/200x300',
    price: '$12.99'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://via.placeholder.com/200x300',
    price: '$14.99'
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://via.placeholder.com/200x300',
    price: '$10.99'
  }
];

const bestSellers = [
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    image: 'https://via.placeholder.com/200x300',
    price: '$11.99'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://via.placeholder.com/200x300',
    price: '$14.99'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    image: 'https://via.placeholder.com/200x300',
    price: '$9.99'
  }
];

// Render the featured books and best sellers in their respective sections
function renderBooks(books, section) {
  // Create a variable to hold the HTML for the books
  let bookHTML = '';

  // Loop through the books array and create HTML for each book
  for (let book of books) {
    bookHTML += `
      <div class="book">
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  }

  // Set the HTML of the section to the book HTML
  section.innerHTML = bookHTML;
}

// Call the renderBooks function to render the featured books and best sellers
renderBooks(featuredBooks, featuredBooksSection);
renderBooks(bestSellers, bestSellersSection);









