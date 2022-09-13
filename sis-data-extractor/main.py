from bootstrap_di import bootstrap_di
from real_estate_extractor import RealEstateExtractor

def bootstrap():
    bootstrap_di()

def main():
    bootstrap()
    real_estate_extractor = RealEstateExtractor()

main()
