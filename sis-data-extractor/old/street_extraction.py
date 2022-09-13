# Run using python 3

# This file is used to extract street data from gegraphic.org
# and get a json mapping from suburbs to a list of streets in those
# suburbs.

import requests
from bs4 import BeautifulSoup
import json

GEOGRAPHIC_STREET_BASE_URL = 'https://geographic.org/streetview/australia/nsw/'
HTML_URL_SUFFIX = '.html'
HTML_BS_PARSER = 'html.parser'
REPLACE_SPACE = ' '
REPLACE_WITH_UNDERSCORE = '_'
LIST_ELEMENT_TAG = 'li'
ANCHOR_ELEMENT_TAG = 'a'
STREET_MATCH = 0

def get_streets(suburb):
    formatted_suburb = format_suburb(suburb)
    suburb_streets_url = GEOGRAPHIC_STREET_BASE_URL + formatted_suburb + HTML_URL_SUFFIX
    suburb_streets_page = requests.get(suburb_streets_url)

    soup = BeautifulSoup(suburb_streets_page.content, HTML_BS_PARSER)
    listed_streets_list_elements = soup.find_all(LIST_ELEMENT_TAG)
    listed_streets = []
    for listed_street_element in listed_streets_list_elements:
        listed_streets.append(listed_street_element.find(ANCHOR_ELEMENT_TAG).contents[STREET_MATCH])
    return listed_streets

def format_suburb(suburb):
    return suburb.replace(REPLACE_SPACE, REPLACE_WITH_UNDERSCORE).lower()

SUBURB_FILE_NAME = 'suburbs.csv'
FILE_READ_MODE = 'r'
SPLIT_BY_COMMA = ','
def get_suburbs(filename):
    return open(filename, FILE_READ_MODE).read().split(SPLIT_BY_COMMA)

SUBURB_WITH_STREETS_FILE_NAME = 'suburbs_with_streets.json'
FILE_WRITE_MODE = 'w'
def write_suburb_and_streets(filename, suburb_and_street_mappings):
    with open(filename, FILE_WRITE_MODE) as outputfile:
        json.dump(suburb_and_street_mappings, outputfile)

def main():
    suburbs = get_suburbs(SUBURB_FILE_NAME)
    suburb_and_street_mappings = {}
    broken_street_searches = []
    for suburb in suburbs:
        streets_in_suburb = get_streets(suburb)
        suburb_and_street_mappings[suburb] = streets_in_suburb
        if (len(streets_in_suburb) == 0):
            broken_street_searches.append(suburb)

    write_suburb_and_streets(SUBURB_WITH_STREETS_FILE_NAME, suburb_and_street_mappings)

    # =============== LOG SUBURBS AND STREETS ===============  
    # print('========== SUBURB AND STREET MAPPINGS =========')    
    # print(suburb_and_street_mappings)
    # print('============ BROKEN SUBURB LINKS ==============')
    # print(broken_street_searches)

main()
