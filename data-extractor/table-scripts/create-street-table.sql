CREATE TABLE dbo.street (
    name VARCHAR(50) NOT NULL,
    postcode INT NOT NULL,
    suburb_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (name, postcode, suburb_name),
    FOREIGN KEY (postcode, suburb_name) REFERENCES dbo.suburb(postcode, name)
);