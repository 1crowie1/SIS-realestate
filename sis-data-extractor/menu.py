
def main_menu():
    help()
    choice = None
    while (choice != 'x'):
        choice = str(getChoice()).lower()
        if choice == '1':
            print('')
        elif choice == '2':
            print('')
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