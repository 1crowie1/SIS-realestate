from bootstrap_di import bootstrap_di_all
from kink import di
from suburb_extractor import SuburbExtractor
from menu import main_menu


def main():
    bootstrap_di_all()
    suburb_extractor = di[SuburbExtractor]
    suburbs = suburb_extractor.getTableRows()
    print(suburbs)
    main_menu()

main()
