from suburb import Suburb

REAL_ESTATE_COM_URL = 'https://www.realestate.com.au/'
BUY = 'buy/'
RENT = 'rent/'
SOLD = 'sold/'
IN = 'in-'
LIST = '/list-'

def createBuyRealEstateListingUrl(suburb: Suburb):
    return createRealEstateListingUrl(suburb, BUY)

def createRealEstateListingUrl(suburb: Suburb, type: str):
    return REAL_ESTATE_COM_URL + type + IN + createSuburbSearch(suburb) + LIST

def createSuburbSearch(suburb: Suburb):
    search_addon = ',+'
    return suburb.name + search_addon + suburb.state + search_addon + suburb.postcode