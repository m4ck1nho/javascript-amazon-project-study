# Amazon Clone - JavaScript Learning Project

Hey! 👋 I used this project to learn more about JavaScript. It's basically an Amazon-like shopping website where I practiced a bunch of JS concepts.

## What I Built

A fake Amazon website with:
- **Home page** (`amazon.html`) - Shows products I can add to cart
- **Checkout page** (`checkout.html`) - Review items, pick delivery options, see order total
- **Orders page** (`orders.html`) - Track my orders
- **Tracking page** (`tracking.html`) - See delivery status

## What I Learned

### JavaScript Stuff
- **DOM manipulation** - Adding products to the page, updating cart count, handling clicks
- **ES6 modules** - Using `import` / `export` to organize my code
- **Classes & OOP** - Made a `Product` class, a `Clothing` class that extends it, and even a `Cart` class
- **Local Storage** - Saving cart items so they don't disappear when I refresh
- **Async JavaScript** - `fetch()`, Promises, `async/await` for loading products from an API
- **Array methods** - Lots of `.forEach()`, `.map()`, `.filter()` practice

### Testing
I also learned some unit testing with Jasmine:
- Testing the cart functions
- Testing the money formatting utility
- You can open `test-jasmine/tests.html` to run the tests

## Project Structure

```
├── amazon.html              # Main products page
├── checkout.html            # Checkout page
├── orders.html              # Orders page  
├── tracking.html            # Order tracking page
├── data/
│   ├── cart.js              # Cart logic (add, remove, update)
│   ├── cart-class.js        # OOP version of cart
│   ├── products.js          # Product data + classes
│   └── deliveryOptions.js   # Shipping options
├── scripts/
│   ├── amazon.js            # Home page logic
│   ├── checkout.js          # Checkout page logic
│   └── checkout/
│       ├── orderSummary.js  # Cart items display
│       └── paymentSummary.js # Order total calculation
├── styles/                  # CSS files
├── images/                  # Product images, icons, etc.
└── test-jasmine/            # Unit tests
```

## How to Run

Just open `amazon.html` in your browser. No server needed for basic functionality!

The products load from an external API (supersimplebackend.dev) so you need internet connection.

## Notes

This was a learning project so the code might not be perfect - there's some commented out code, some experiments with different approaches (like the OOP cart vs regular cart), but that's all part of learning! 🙂

