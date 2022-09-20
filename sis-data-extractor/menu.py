from azure_dbc_util import getSuburbPreparedStatements, getStreetPreparedStatements

from kink import di
from suburb_extractor import SuburbExtractor
from azure_dbc import AzureDBC

def main_menu():
    help()
    choice = None
    while (choice != 'x'):
        choice = str(getChoice()).lower()
        if choice == '1':
            suburb_extractor = di[SuburbExtractor]
            azure_dbc = di[AzureDBC]
            suburbs_with_postcodes = suburb_extractor.getSuburbsWithPostcodes()
            prepared_statements = getSuburbPreparedStatements(suburbs_with_postcodes)
            azure_dbc.executeStatements(prepared_statements)

        elif choice == '2':
            suburb_extractor = di[SuburbExtractor]
            street_extractor = di[StreetExtractor]
            azure_dbc = di[AzureDBC]
            # TODO: Come back to implement methods mentioned on 2 lines below
            # suburb_with_streets = street_extractor.getSuburbWithStreets(suburb_extractor.getSuburbsWithPostcodes())
            # suburb_streets_prepared_statements = getStreetPreparedStatements(suburb_with_streets)
            # azure_dbc.executeStatements(suburb_streets_prepared_statements)

        elif choice == '3':
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
            
        elif choice == '?':
            help()
        elif choice == 'x':
            print('Exiting program')
        else:
            print('Invalid choice, enter ? for Help')

def help():
    print('1 - Suburb Extraction')
    print('2 - Street Extraction')
    print('3 - RealEstate.com Listing Extraction')
    print('4 - Execute RealEstate.com Property Extraction Tasks')
    print('5 - Schedule RealEstate.com Property Extraction Tasks')
    print('6 - Domain.com Listing Extraction')
    print('7 - Execute Domain.com Property Extraction Tasks')
    print('8 - Schedule Domain.com Property Extraction Tasks')
    print('? - HELP')
    print('X - Exit')

def getChoice():
    return input('Select option please: ')