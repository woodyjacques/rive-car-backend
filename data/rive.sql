CREATE TABLE user_car_rive (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(500) NOT NULL,
    email VARCHAR(255) NOT NULL,
    sucursal VARCHAR(255) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    isVerified BOOLEAN,  
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);