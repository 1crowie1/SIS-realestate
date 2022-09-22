import azure_dbc_util
import time
from azure_dbc_util import getSuburbPreparedStatements #, getStreetPreparedStatements

from kink import di
from suburb_extractor import SuburbExtractor
from listing_extractor import ListingExtractor
from azure_dbc import AzureDBC
from suburb import Suburb
from realestate_com_au import RealestateComAu
from nordvpn_switcher import initialize_VPN,rotate_VPN,terminate_VPN

def vpn_initialise():
   settings = initialize_VPN()
   rotate_VPN(settings)
   return settings

def vpn_switch(settings):
   rotate_VPN(settings)

api = RealestateComAu()

def main_menu():
    help()
    choice = None
    while (choice != 'x'):
        choice = str(getChoice()).lower()
        if choice == '1':
            suburb_extractor = di[SuburbExtractor]
            azure_dbc = di[AzureDBC]
            suburbs = suburb_extractor.getSuburbs()
            prepared_statements = getSuburbPreparedStatements(suburbs)
            azure_dbc.execute_statements(prepared_statements)
            # azure_dbc.print_successful_statements()
            azure_dbc.commit()

        elif choice == '2':
            suburb_extractor = di[SuburbExtractor]
            street_extractor = di[StreetExtractor]
            azure_dbc = di[AzureDBC]
            # TODO: Come back to implement methods mentioned on 2 lines below
            # suburb_with_streets = street_extractor.getSuburbWithStreets(suburb_extractor.getSuburbsWithPostcodes())
            # suburb_streets_prepared_statements = getStreetPreparedStatements(suburb_with_streets)
            # azure_dbc.executeStatements(suburb_streets_prepared_statements)

        elif choice == '3':
            # suburb_extractor = di[SuburbExtractor]
            # suburbs = suburb_extractor.getSuburbs()
            listing_extractor = di[ListingExtractor]
            #listing_extractor.getBuyActiveListings(suburbs)
            listing_extractor.getBuyActiveListings([Suburb('Barangaroo', '2000')])

            print('')

        elif choice == '4':
            print('')

        elif choice == '5':
            print('')

        elif choice == '6':
            print('')

        elif choice == '7':
            print('')

        elif choice == '8':
            print('')

        elif choice == '13':
            settings = vpn_initialise()
            azure_dbc = di[AzureDBC]
            suburbs = azure_dbc.getSuburbsFromDB()
            property_types = ['buy', 'rent', 'sold']
            suburb_count = 0
            suburb_switch_counter = random.randint(50,75)
            for property_type in property_types:
                for suburb in suburbs:
                    if (suburb_count % suburb_switch_counter):
                        vpn_switch(settings)
                        suburb_switch_counter = random.randint(50, 75)
                    # Get property listings
                    listings = api.search(locations=[suburb.get_location()], channel=property_type)
                    prepared_statements = azure_dbc_util.createBigPropertyInsertionPreparedStatements(listings)
                    azure_dbc.execute_statements(prepared_statements)
                    azure_dbc.commit()
                    time.sleep(30)
            azure_dbc.print_successful_statements()
            terminate_VPN(settings)

        elif choice == '?':
            help()
        elif choice == 'x':
            print('Exiting program')
        else:
            print('Invalid choice, enter ? for Help')

def help():
    print('1 - Suburb Extraction')
    print('2 - Street Extraction')
    print('3 - RealEstate.com active buying listing extraction')
    print('4 - Schedule RealEstate.com Property Extraction Tasks')
    print('5 - Execute RealEstate.com Property Extraction Tasks')
    
    print('6 - Domain.com active buying listing extraction')
    print('7 - Execute Domain.com Property Extraction Tasks')
    print('8 - Schedule Domain.com Property Extraction Tasks')
    print('9 - RealEstate.com active renting listing extraction')
    print('10 - RealEstate.com active sold listing extraction')
    print('11 - RealEstate.com all listing extraction')
    print('12 - Domain.com Listing Extraction')
    print('13 - domain.com.au listing extraction using API')
    print('? - HELP')
    print('X - Exit')

def getChoice():
    return input('Select option please: ')