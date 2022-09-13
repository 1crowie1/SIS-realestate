from kink import inject
from requester import Requester
from logger import Logger

@inject
class SuburbExtractor(object):
    def __init__(self, requester: Requester, logger: Logger):
        self.requester = requester
        self.logger = logger