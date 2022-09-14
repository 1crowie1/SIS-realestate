from kink import inject
from logger import Logger
from bs4 import BeautifulSoup

DEFAULT_HTML_BS_PARSER = 'html.parser'

@inject
class SoupExtractor:
    def __init__(self, logger: Logger ):
        self.logger = logger

    def createSoupInstance(self, markup: str, html_parser: str = DEFAULT_HTML_BS_PARSER):
        self.soup = BeautifulSoup(markup, html_parser)

    def resetSoupContext(self):
        if self.checkSoupExists():
            self.soup.reset()

    def checkSoupExists(self):
        if self.soup != None:
            return true
        else:
            # TODO - use logger here instead of print
            print('No soup instance found!')
            return false

    def parseMarkupByClass(self, class_name):
        return

    def parseMarkupByTag(self, tag):
        return

    def parseMarkupByTagAndReturnAll(self, tag):
        return self.soup.find_all(tag)

    def parseMarkupByTagAndClassAndReturnFirst(self, tag, class_name):
        return self.soup.find(tag, class_name).contents[0]

    def parseMarkupByTagAndClassAndReturnAll(self, tag, class_name):
        return self.soup.find_all(tag, class_name)
