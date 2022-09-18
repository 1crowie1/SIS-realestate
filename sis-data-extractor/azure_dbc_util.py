
SUBURB_PREPARED_STATEMENT = 'INSERT INTO dbo.suburb (suburb, postcode, last_updated) VALUES ({suburb}, {postcode}, {last_updated}) ON CONFLICT DO NOTHING;'
STREET_PREPARED_STATEMENT = 'INSERT INTO dbo.street (suburb, postcode, street, last_updated) VALUES ({suburb}, {postcode}, {street}, {last_updated}) ON CONFLICT DO NOTHING'
STREET_PREPARED_STATEMENT = 'INSERT INTO dbo.listing (street_number, unit_number, street_name, postcode, suburb_name, listing_url) VALUES ({suburb}, {postcode}, {street}, {last_updated}) ON CONFLICT DO NOTHING'
STREET_PREPARED_STATEMENT = 'INSERT INTO dbo.property (suburb, postcode) VALUES ({suburb}, {postcode}, {last_updated}) ON CONFLICT DO NOTHING'

def getSuburbPreparedStatements(suburbs_and_postcodes):
    return [ createSuburbPreparedStatement(suburb, postcode) for (suburb, postcode) in list(suburbs_and_postcodes.items()) ]

def createSuburbPreparedStatement(suburb, postcode):
    return SUBURB_PREPARED_STATEMENT.format(suburb=suburb, postcode=postcode)
