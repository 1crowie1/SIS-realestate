from kink import inject
from requester import Requester
from soup_extractor import SoupExtractor
from logger import Logger
from suburb import Suburb
from listing_extractor_util import createBuyRealEstateListingUrl

INITIAL_LIST_PAGE_INDEX = 1
DIV = 'div'
RESULT_COUNT_CLASS = 'View__StyledResultsCount-sc-mtu23h-4 hwoPjm'

@inject
class ListingExtractor(object):
    def __init__(self, requester: Requester, logger: Logger):
        self.requester = requester
        self.logger = logger
        self.soup_extractor = SoupExtractor(logger)

    def getBuyActiveListings(self, suburbs: [Suburb]):
        for suburb in suburbs:
            listing_url = createBuyRealEstateListingUrl(suburb)
            # initial_listing_page = self.requester.getUrlContent(listing_url + str(INITIAL_LIST_PAGE_INDEX))
            initial_listing_page = self.requester.getUrlContentUsingJsWithRandomProxy(listing_url + str(INITIAL_LIST_PAGE_INDEX))
            self.soup_extractor.createSoupInstance(initial_listing_page)
            listing_result_count = self.soup_extractor.parseMarkupByTagAndClassAndReturnFirst(DIV, RESULT_COUNT_CLASS).text
            print(listing_result_count)