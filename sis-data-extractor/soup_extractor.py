from kink import inject
from logger import Logger

@inject
class SoupExtractor:
    def __init__(self, logger: Logger):
        self.logger = logger
