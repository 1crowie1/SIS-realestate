
SUBURB_PREPARED_STATEMENT = 'INSERT INTO dbo.suburb (name, postcode, state) VALUES (\'{suburb}\', \'{postcode}\', \'state\');'
STREET_PREPARED_STATEMENT = 'INSERT INTO dbo.street (suburb, postcode, street) VALUES ({suburb}, {postcode}, {street}) ON CONFLICT DO NOTHING'
LISTING_PREPARED_STATEMENT = 'INSERT INTO dbo.listing (street_number, unit_number, street_name, postcode, suburb_name, listing_url) VALUES ({suburb}, {postcode}, {street}, {last_updated}) ON CONFLICT DO NOTHING'
PROPERTY_PREPARED_STATEMENT = 'INSERT INTO dbo.property (suburb, postcode) VALUES ({suburb}, {postcode}, {last_updated}) ON CONFLICT DO NOTHING'

def getSuburbPreparedStatements(suburbs):
    return [ createSuburbPreparedStatement(suburb) for suburb in suburbs ]

def createSuburbPreparedStatement(suburb):
    return SUBURB_PREPARED_STATEMENT.format(suburb=suburb.name, postcode=suburb.postcode)
