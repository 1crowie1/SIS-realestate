from kink import inject
from requester import Requester
from logger import Logger

@inject
class ListingExtractor(object):
    def __init__(self, requester: Requester, logger: Logger):
        self.requester = requester
        self.logger = logger