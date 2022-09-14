from kink import inject
from requester import Requester
from soup_extractor import SoupExtractor
from logger import Logger

DEFAULT_SUBURB_URL = 'https://violetandgold.com.au/list-of-postcodes-and-suburbs-greater-sydney/'
SUBURB_TABLE_ELEMENT = 'figure'
SUBURB_TABLE_CLASS = 'wp-block-table'
SUBURB_TABLE_ROW_ELEMENT = 'tr'
SUBURB_TABLE_ROW_DATA_ELEMENT = 'td'

# TABLE COLUMNS
['Location', 'Suburb', 'Postcode', 'State', 'Zone']

@inject
class SuburbExtractor(object):
    def __init__(self, requester: Requester, logger: Logger, suburb_url = DEFAULT_SUBURB_URL):
        self.requester = requester
        self.logger = logger
        self.soup_extractor = SoupExtractor(logger)
        self.url = suburb_url
        self.table_class = 'class="wp-block-table"'

    def getRequest(self):
        return self.requester.getUrlContentWithRandomProxy(self.url)

    def getTable(self):
        urlContent = self.getRequest()
        self.soup_extractor.createSoupInstance(urlContent)
        return self.soup_extractor.parseMarkupByTagAndClassAndReturnFirst(SUBURB_TABLE_ELEMENT, SUBURB_TABLE_CLASS)

    def getTableRows(self):
        table_markup = str(self.getTable())
        self.soup_extractor.createSoupInstance(table_markup)
        table_rows = self.soup_extractor.parseMarkupByTagAndReturnAll(SUBURB_TABLE_ROW_ELEMENT)
        columns = self.extractRowData(table_rows.pop(0))
        for table_row in table_rows:
            table_row_data = self.extractRowData(table_row)
            print(table_row_data)

    def extractRowData(self, table_row):
        self.soup_extractor.createSoupInstance(str(table_row))
        row_data_elements = self.soup_extractor.parseMarkupByTagAndReturnAll(SUBURB_TABLE_ROW_DATA_ELEMENT)
        return [row_data.text for row_data in row_data_elements]
