-- Drop tables if they exist (for dev resets)
DROP TABLE IF EXISTS TableOrder, Users, Cart, Product CASCADE;

-- Product Table
CREATE TABLE Product (
    productId SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(5, 2) NOT NULL,
    imageUrl TEXT
);

INSERT INTO Product (name, imageUrl, price) VALUES
  ('Pizza', '/img/pizza.png', 11.90),
  ('Burger', '/img/burger.png', 16.90),
  ('Fish and chips', '/img/fish-and-chips.png', 14.90),
  ('Gyros', '/img/gyros.png', 13.90),
  ('Lasagna', '/img/lasagna.png', 15.90),
  ('Salad', '/img/salad.png', 12.90),
  ('Spaghetti', '/img/spaghetti.png', 13.90);

-- Cart Table
CREATE TABLE Cart (
    cartId SERIAL PRIMARY KEY
);

-- Join table for Cart items (many-to-many Cart <-> Product)
CREATE TABLE CartItem (
    cartId INT REFERENCES Cart(cartId) ON DELETE CASCADE,
    productId INT REFERENCES Product(productId) ON DELETE CASCADE,
    quantity INT DEFAULT 1,
    PRIMARY KEY (cartId, productId)
);

-- User Table
CREATE TABLE Users (
    userId SERIAL PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    password TEXT NOT NULL, -- ideally hashed
    cartId INT REFERENCES Cart(cartId) ON DELETE SET NULL
);

-- TableOrder Table
CREATE TABLE TableOrder (
    tableId SERIAL PRIMARY KEY,
    reservedBy INT REFERENCES Users(userId) ON DELETE SET NULL
);

-- Join table for TableOrder <-> Product (many-to-many)
CREATE TABLE TableOrderProduct (
    tableId INT REFERENCES TableOrder(tableId) ON DELETE CASCADE,
    productId INT REFERENCES Product(productId) ON DELETE CASCADE,
    quantity INT DEFAULT 1,
    PRIMARY KEY (tableId, productId)
);
