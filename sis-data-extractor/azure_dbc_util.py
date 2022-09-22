from realestate_com_au.objects.listing import Listing, MediaItem, Lister
from suburb import Suburb

SUBURB_PREPARED_STATEMENT = 'INSERT INTO dbo.suburb (name, postcode, state) VALUES (\'{suburb}\', \'{postcode}\', \'state\');'
GET_SUBURBS_PREPARED_STATEMENT = 'SELECT * FROM dbo.suburb'
STREET_PREPARED_STATEMENT = 'INSERT INTO dbo.street (suburb, postcode, street) VALUES ({suburb}, {postcode}, {street}) ON CONFLICT DO NOTHING'
LISTING_PREPARED_STATEMENT = 'INSERT INTO dbo.listing (street_number, unit_number, street_name, postcode, suburb_name, listing_url) VALUES ({suburb}, {postcode}, {street}, {last_updated}) ON CONFLICT DO NOTHING'
PROPERTY_PREPARED_STATEMENT = 'INSERT INTO dbo.property (suburb, postcode) VALUES ({suburb}, {postcode}, {last_updated}) ON CONFLICT DO NOTHING'

def getSuburbPreparedStatements(suburbs):
    return [ createSuburbPreparedStatement(suburb) for suburb in suburbs ]

def createSuburbPreparedStatement(suburb):
    return SUBURB_PREPARED_STATEMENT.format(suburb=suburb.name, postcode=suburb.postcode)

BIG_PROPERTY_IMAGES_TABLE = 'dbo.big_property_images'
BIG_PROPERTY_IMAGES_FLOORPLANS_TABLE = 'dbo.big_property_images_floorplans'
BIG_PROPERTY_IMAGES_GENERIC_STATEMENT = '''
INSERT INTO {table} (
    id,
    link,
    img_order
) VALUES (
    {id},
    {link},
    {img_order}
);
'''

def createBigPropertyImagesPreparedStatements(id: int, media_items):
    statements = []
    i=0
    for media_item in media_items:
        statements.append(
            BIG_PROPERTY_IMAGES_GENERIC_STATEMENT.format(
                table=BIG_PROPERTY_IMAGES_TABLE,
                id=checkIntNotNone(id),
                link=checkLinkStrNotNone(media_item.link),
                img_order=i
            )
        )
        i += 1
    return statements

def createBigPropertyImagesFloorplanPreparedStatements(id: int, media_items):
    statements = []
    i = 0
    for media_item in media_items:
        statements.append(
            BIG_PROPERTY_IMAGES_GENERIC_STATEMENT.format(
                table=BIG_PROPERTY_IMAGES_FLOORPLANS_TABLE,
                id=checkIntNotNone(id),
                link=checkLinkStrNotNone(media_item.link),
                img_order=i
            )
        )
        i += 1
    return statements

INSERT_LISTER_PREPARED_STATEMENT = '''
INSERT INTO dbo.big_property_lister (
    id,
    name,
    agent_id,
    job_title,
    url,
    phone,
    email
) VALUES (
    {id},
    {name},
    {agent_id},
    {job_title},
    {url},
    {phone},
    {email}
);'''

def createBigPropertyListerPreparedStatements(id: int, listers):
    statements = []
    i = 0
    for lister in listers:
        statements.append(
            INSERT_LISTER_PREPARED_STATEMENT.format(
                id=checkIntNotNone(id),
                name=checkStrNotNone(lister.name),
                agent_id=checkStrNotNone(lister.agent_id),
                job_title=checkStrNotNone(lister.job_title),
                url=checkLinkStrNotNone(lister.url),
                phone=checkStrNotNone(lister.phone),
                email=checkStrNotNone(lister.email)
            )
        )
        i += 1
    return statements

BIG_PROPERTY_PREPARED_STATEMENT = '''
INSERT INTO dbo.big_property (
    id,
    badge,
    url,
    suburb,
    state,
    postcode,
    short_address,
    full_address,
    property_type,
    price,
    price_text,
    bedrooms,
    bathrooms,
    parking_spaces,
    building_size,
    building_size_unit,
    listing_company_id,
    listing_company_name,
    listing_company_phone,
    auction_date,
    sold_date,
    description
) VALUES (
    {id}, 
    {badge}, 
    {url}, 
    {suburb}, 
    {state}, 
    {postcode},
    {short_address},
    {full_address}, 
    {property_type}, 
    {price}, 
    {price_text},
    {bedrooms},
    {bathrooms},
    {parking_spaces},
    {building_size}, 
    {building_size_unit}, 
    {listing_company_id}, 
    {listing_company_name}, 
    {listing_company_phone}, 
    {auction_date}, 
    {sold_date}, 
    {description}
);'''

def checkIntNotNone(integer: int):
    return integer if integer != None else 'NULL'

def checkDescription(description: str):
    if description != None:
        return checkStrNotNone(description.replace(QUOTATION, ('\\' + QUOTATION)))
    else:
        return 'NULL'

def checkStrNotNone(string: str):
    return ('\'' + string.replace("'", "u0027").replace("’", ) + '\'') if string != None else 'NULL'

QUOTATION = "'"
def checkLinkStrNotNone(url: str):
    return (QUOTATION +  str(url).replace("'", "u0027") + QUOTATION) if url != None else 'NULL'

def createBigPropertyInsertionPreparedStatements(listings):
    statements = []
    for listing in listings:
        statements.append(
            BIG_PROPERTY_PREPARED_STATEMENT.format(
                id=checkIntNotNone(listing.id),
                badge=checkStrNotNone(listing.badge),
                url=checkLinkStrNotNone(listing.url),
                suburb=checkStrNotNone(listing.suburb),
                state=checkStrNotNone(listing.state),
                postcode=checkStrNotNone(listing.postcode),
                short_address=checkStrNotNone(listing.short_address),
                full_address=checkStrNotNone(listing.full_address),
                property_type=checkStrNotNone(listing.property_type),
                price=checkIntNotNone(listing.price),
                price_text=checkStrNotNone(listing.price_text),
                bedrooms=checkIntNotNone(listing.bedrooms),
                bathrooms=checkIntNotNone(listing.bathrooms),
                parking_spaces=checkIntNotNone(listing.parking_spaces),
                building_size=checkIntNotNone(listing.building_size),
                building_size_unit=checkStrNotNone(listing.building_size_unit),
                listing_company_id=checkStrNotNone(listing.listing_company_id),
                listing_company_name=checkStrNotNone(listing.listing_company_name),
                listing_company_phone=checkStrNotNone(listing.listing_company_phone),
                auction_date=checkStrNotNone(listing.auction_date),
                sold_date=checkStrNotNone(listing.sold_date),
                description=checkStrNotNone(listing.description)
            )
        )
        statements.extend(createBigPropertyImagesPreparedStatements(listing.id, listing.images))
        statements.extend(createBigPropertyImagesFloorplanPreparedStatements(listing.id, listing.images_floorplans))
        statements.extend(createBigPropertyListerPreparedStatements(listing.id, listing.listers))
    return statements

def parse_suburbs_sql(suburbs_sql: str):
    evaled_suburbs = [ eval(str(suburb)) for suburb in suburbs_sql ]
    suburbs = [ Suburb(evaled_suburb[0], evaled_suburb[1], evaled_suburb[2].strip()) for evaled_suburb in evaled_suburbs ]
    return suburbs