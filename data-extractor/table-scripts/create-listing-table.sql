CREATE TABLE dbo.listing (
    street_number INT NOT NULL,
    unit_number VARCHAR(5) NOT NULL,
    street_name VARCHAR(50) NOT NULL,
    postcode INT NOT NULL,
    suburb_name VARCHAR(50) NOT NULL,
    listing_url TEXT NOT NULL,
    PRIMARY KEY (street_number, unit_number, street_name, postcode, suburb_name),
    FOREIGN KEY (street_name, postcode, suburb_name) REFERENCES dbo.street(name, postcode, suburb_name)
);