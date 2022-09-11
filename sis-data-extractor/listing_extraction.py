# Run using python 3

# This file is used to extract street data from gegraphic.org
# and get a json mapping from suburbs to a list of streets in those
# suburbs.

import requests
import pyodbc
from bs4 import BeautifulSoup
import json
import re
import urllib.parse
#from nordvpn_switcher import initialize_VPN,rotate_VPN,terminate_VPN
from AzureDBC import AzureDBC

##def vpn_initialise():
##    settings = initialize_VPN()
##    rotate_VPN(settings)
##    return settings
##
##def vpn_switch(settings):
##    rotate_VPN(settings) 
    #rotate_VPN(settings,google_check=1) 

AZURE_DBC = AzureDBC()
STATE = 'NSW'
HTML_BS_PARSER = 'html.parser'
REPLACE_SPACE = ' '
REPLACE_WITH_UNDERSCORE = '_'
DIV_ELEMENT_TAG = 'div'
PROPERTY_CARD_ADDRESS_CLASS = 'property-card--address'
PROPERTY_CARD_CLASS = 'property-card'
PROPERTY_CARD_LINK_CLASS = 'property-card-link'
ANCHOR_ELEMENT_TAG = 'a'
STREET_MATCH = 0

REAL_ESTATE_BASE_URL = 'https://www.realestate.com.au' # URL needs format state/suburb-postcode/street-name where street name needs to have spaces replaced by hyphens
HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0'}
def get_listings(suburb, postcode, street_name):
    suburb_street_listing_url = create_get_listings_url(STATE, suburb, postcode, street_name)
    #suburb_streets_url = GEOGRAPHIC_STREET_BASE_URL + formatted_suburb + HTML_URL_SUFFIX
    print(suburb_street_listing_url)
    suburb_street_listing_page = requests.get(suburb_street_listing_url, headers=HEADERS)
    #suburb_street_listing_page = requests.get('https://www.realestate.com.au/nsw/abbotsbury-2176/falmer-st/')

    #print(suburb_street_listing_page.content)
    soup = BeautifulSoup(suburb_street_listing_page.content, HTML_BS_PARSER)
    listing_property_elements = soup.find_all(DIV_ELEMENT_TAG, PROPERTY_CARD_CLASS)
    #print(listing_property_elements)
    listings = {}
    #print(listing_property_elements)
    for listed_property_element in listing_property_elements:
        address_link = listed_property_element.find(ANCHOR_ELEMENT_TAG, PROPERTY_CARD_LINK_CLASS)['href']
        address_name = listed_property_element.find(DIV_ELEMENT_TAG, PROPERTY_CARD_ADDRESS_CLASS).contents[0]
        #print(address_name, address_link)
        listings[address_name] = address_link
    #print(listings)
    return listings

FOWARD_SLASH = '/'
HYPHEN = '-'
REPLACE_SPACE = ' '
REPLACE_WITH_HYPHEN = '-'
def create_get_listings_url(state, suburb, postcode, street):
    return REAL_ESTATE_BASE_URL + FOWARD_SLASH + urllib.parse.quote(state + FOWARD_SLASH + suburb.replace(REPLACE_SPACE, REPLACE_WITH_HYPHEN) + HYPHEN + postcode + FOWARD_SLASH + format_street(street)).lower()

REPLACE_ROAD = 'road'
REPLACE_WITH_RD = 'rd'
REPLACE_STREET = 'street'
REPLACE_WITH_ST = 'st'
REPLACE_CRESCENT = 'crescent'
REPLACE_WITH_CRES = 'cres'
REPLACE_CLOSE = 'close'
REPLACE_WITH_CL = 'cl'
REPLACE_PLACE = 'place'
REPLACE_WITH_PL = 'pl'
REPLACE_DRIVE = 'drive'
REPLACE_WITH_DR = 'dr'
REPLACE_AVENUE = 'avenue'
REPLACE_WITH_AVE = 'ave'
REPLACE_COMMA = '\''
REPLACE_WITH_ESCAPED_COMMA = '\\\''
def format_street(street):
    return street\
        .lower()\
        .replace(REPLACE_SPACE, REPLACE_WITH_HYPHEN)\
        .replace(REPLACE_ROAD, REPLACE_WITH_RD)\
        .replace(REPLACE_STREET, REPLACE_WITH_ST)\
        .replace(REPLACE_CRESCENT, REPLACE_WITH_CRES)\
        .replace(REPLACE_CLOSE, REPLACE_WITH_CL)\
        .replace(REPLACE_PLACE, REPLACE_WITH_PL)\
        .replace(REPLACE_COMMA, REPLACE_WITH_ESCAPED_COMMA)

def get_listing_information(listing_url):
    formatted_suburb = format_suburb(suburb)
    suburb_streets_url = GEOGRAPHIC_STREET_BASE_URL + formatted_suburb + HTML_URL_SUFFIX
    print(suburb_streets_url)
    suburb_streets_page = requests.get(suburb_streets_url)

    soup = BeautifulSoup(suburb_streets_page.content, HTML_BS_PARSER)
    listed_streets_list_elements = soup.find_all(LIST_ELEMENT_TAG)
    listed_streets = {}
##    for _element in listed_streets_list_elements:
##        street_match = listed_street_element.find(ANCHOR_ELEMENT_TAG).contents[STREET_MATCH]
##        street_match_link = listed_street_element['href']
##        listed_streets[street_match] = street_match_link
    return listed_streets

def format_suburb(suburb):
    return suburb.replace(REPLACE_SPACE, REPLACE_WITH_UNDERSCORE).lower()

COORDINATE_BASE_URL = 'https://nominatim.openstreetmap.org/search.php?q=58%20Tompson%20Rd%2C%20Panania%2C%20NSW%202213' # Query needs format street-number suburb state postcode
COORDINATE_URL_SUFFIX = '&polygon_geojson=1&format=jsonv2'

SUBURB_AND_STREETS_FILE_NAME = 'suburbs_with_streets.json'
FILE_READ_MODE = 'r'
SPLIT_BY_COMMA = ','
def get_suburbs_with_streets(filename):
    return json.loads(open(filename, FILE_READ_MODE).read())

def write_street_and_listings(filename, suburb_and_street_mappings):
    with open(filename, FILE_WRITE_MODE) as outputfile:
        json.dump(suburb_and_street_mappings, outputfile)

def extract_postcode(street_name):
    return re.search(r'\d+', street_name)[0]

def extract_street_number(address):
    street_and_unit_number = address.split(' ')[0]
    if ('/' in street_and_unit_number):
        return street_and_unit_number.split('/')[1]
    else:
        return street_and_unit_number

def extract_unit_number(address):
    street_and_unit_number = address.split(' ')[0]
    if ('/' in street_and_unit_number):
        return street_and_unit_number.split('/')[0]
    else:
        for char in street_and_unit_number:
            if (char.isalpha()):
                return char
        return None

EMPTY_STRING = ''
##BROKEN_STATEMENTS = []

##SERVER = 'tcp:sis-realestate.database.windows.net,1433'
##PORT = 1433
##DATABASE = 'SIS-realestate'
##USERNAME = 'sis-realestate-admin'
##password = input('Password: ')
#cnxn = pyodbc.connect(driver = '{SQL Server Native Client 11.0};',
#                        host = SERVER,
#                        database = DATABASE,
#                        user = USERNAME,
#                        password = password)
#cursor = cnxn.cursor()

def main():
    #settings = vpn_initialise()
    suburb_switch_counter = 3

    print('HERE')
    up_to_date = False
    suburb_and_street_mappings = get_suburbs_with_streets(SUBURB_AND_STREETS_FILE_NAME)
    last_updated_street_statement = 'SELECT TOP 1 * FROM dbo.street ORDER BY suburb_name DESC, name DESC;'
    fetched_row = AZURE_DBC.fetchone_statement(last_updated_street_statement)
    if (fetched_row == None):
        up_to_date = True
        previous_street, previous_postcode, previous_suburb = None, None, None
    else:  
        previous_street, previous_postcode, previous_suburb = fetched_row
    
    suburb_count = 0
    for suburb in suburb_and_street_mappings:
        suburb_count += 1
        #if (suburb_count % suburb_switch_counter):
            #vpn_switch(settings)
        check_suburb_exists_in_db_statement = 'SELECT 1 FROM dbo.suburb WHERE name = ' + suburb + ';'
        for street_name in suburb_and_street_mappings.get(suburb):
            print(street_name)
            if (up_to_date):
                check_street_exists_in_db_statement = 'SELECT 1 FROM dbo.street WHERE name = ' + street_name + ';'
                
                postcode = extract_postcode(street_name)
                formatted_street_name = street_name.replace(postcode, EMPTY_STRING).strip()
                statement = 'INSERT INTO dbo.street (name, postcode, suburb_name) VALUES (' + '\'' + formatted_street_name + '\'' + ',' + postcode + ',' + '\'' + suburb + '\'' + ');'
                AZURE_DBC.execute_statement(statement)
                
                listings = get_listings(suburb, postcode, formatted_street_name)
                insert_listings(listings, formatted_street_name, postcode, suburb)
            if (up_to_date == False):
                postcode = extract_postcode(street_name)
                formatted_street_name = street_name.replace(postcode, EMPTY_STRING).strip()
                if (suburb == previous_suburb and formatted_street_name == previous_street):
                    up_to_date = True
    #terminate_VPN(settings)
    

def insert_listings(listings, formatted_street_name, postcode, suburb):
    for listing in listings:
        listing_url = listings[listing]
        street_number = re.sub('\D', '', extract_street_number(listing))
        unit_number = extract_unit_number(listing)
        unit = 'NONE' if unit_number == None else str(unit_number)
        statement = 'INSERT INTO dbo.listing (street_number, unit_number, street_name, postcode, suburb_name, listing_url) VALUES (' + street_number + ',' + '\'' + unit + '\'' + ',' + '\'' + formatted_street_name + '\'' + ',' + postcode + ',' + '\'' + suburb + '\'' + ',' + '\'' + listing_url + '\'' + ');'
        AZURE_DBC.execute_statement(statement)
    AZURE_DBC.commit()

main()
AZURE_DBC.close()

##def fetchone_statement(statement):
##    try:
##        execute_statement(statement)
##        return cursor.fetchone()
##    except pyodbc.Error as ex:
##        sqlstate = ex.args[0]
##        message = ex.args[1]
##        print(sqlstate, message)
##        BROKEN_STATEMENTS.append(statement)
##
##def fetch_statement(statement):
##    try:
##        execute_statement(statement)
##        return cursor.fetch()
##    except pyodbc.Error as ex:
##        sqlstate = ex.args[0]
##        message = ex.args[1]
##        print(sqlstate, message)
##        BROKEN_STATEMENTS.append(statement)
##                
##def execute_statement(statement):
##    try:
##        cursor.execute(statement)
##    except pyodbc.Error as ex:
##        sqlstate = ex.args[0]
##        message = ex.args[1]
##        print(sqlstate, message)
##        BROKEN_STATEMENTS.append(statement)

    #write_suburb_and_streets('test.json', suburb_and_street_mappings)
    #broken_street_searches = []
    #for suburb in suburbs:
        #streets_in_suburb = get_streets(suburb)
        #suburb_and_street_mappings[suburb] = streets_in_suburb
        #if (len(streets_in_suburb) == 0):
            #broken_street_searches.append(suburb)

    #write_suburb_and_streets(SUBURB_WITH_STREETS_FILE_NAME, suburb_and_street_mappings)

    # =============== LOG SUBURBS AND STREETS ===============  
    # print('========== SUBURB AND STREET MAPPINGS =========')    
    # print(suburb_and_street_mappings)
    # print('============ BROKEN SUBURB LINKS ==============')
    # print(broken_street_searches)

#main()
#print(BROKEN_STATEMENTS)
#cnxn.close()
