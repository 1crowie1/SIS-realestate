CREATE TABLE dbo.suburb (
    postcode INT NOT NULL,
    name TEXT NOT NULL
    PRIMARY KEY (postcode, name)
);