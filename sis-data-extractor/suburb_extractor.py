from kink import inject
from requester import Requester
from soup_extractor import SoupExtractor
from logger import Logger
from suburb import Suburb

DEFAULT_SUBURB_URL = 'https://violetandgold.com.au/list-of-postcodes-and-suburbs-greater-sydney/'
SUBURB_TABLE_ELEMENT = 'figure'
SUBURB_TABLE_CLASS = 'wp-block-table'
SUBURB_TABLE_ROW_ELEMENT = 'tr'
SUBURB_TABLE_ROW_DATA_ELEMENT = 'td'

# TABLE COLUMNS
# ['Location', 'Suburb', 'Postcode', 'State', 'Zone']
LOCATION = 'Location'
SUBURB = 'suburb'
POSTCODE = 'postcode'
STATE = 'state'
COUNTRY = 'zone'

@inject
class SuburbExtractor(object):
    def __init__(self, requester: Requester, logger: Logger, suburb_url = DEFAULT_SUBURB_URL):
        self.requester = requester
        self.logger = logger
        self.soup_extractor = SoupExtractor(logger)
        self.url = suburb_url

    def getRequest(self):
        return self.requester.getUrlContentWithRandomProxy(self.url)

    def getTable(self):
        urlContent = self.getRequest()
        self.soup_extractor.createSoupInstance(urlContent)
        return self.soup_extractor.parseMarkupByTagAndClassAndReturnFirst(SUBURB_TABLE_ELEMENT, SUBURB_TABLE_CLASS)

    def getTableRows(self):
        table_markup = str(self.getTable())
        self.soup_extractor.createSoupInstance(table_markup)
        return self.soup_extractor.parseMarkupByTagAndReturnAll(SUBURB_TABLE_ROW_ELEMENT)

    def getSuburbs(self):
        table_rows = self.getTableRows()
        columns = self.extractColumnRow(table_rows.pop(0))
        extracted_rows = [self.extractRowData(row_data) for row_data in table_rows]
        return [ Suburb(table_row_data[columns[SUBURB]],  table_row_data[columns[POSTCODE]]) for table_row_data in extracted_rows ]

    def extractColumnRow(self, table_row):
        self.soup_extractor.createSoupInstance(str(table_row))
        row_data_elements = self.soup_extractor.parseMarkupByTagAndReturnAll(SUBURB_TABLE_ROW_DATA_ELEMENT)
        return { row_data.text.lower() : table_row.index(row_data) for row_data in table_row }

    def extractRowData(self, table_row):
        self.soup_extractor.createSoupInstance(str(table_row))
        row_data_elements = self.soup_extractor.parseMarkupByTagAndReturnAll(SUBURB_TABLE_ROW_DATA_ELEMENT)
        return [row_data.text for row_data in row_data_elements]
