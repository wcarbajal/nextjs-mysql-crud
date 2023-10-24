CREATE TABLE product(
  id INT UNSIGNED AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  description VARCHAR(200),
  price DECIMAL(10,2),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);