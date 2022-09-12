from kink import inject
from logger import Logger

@inject
class Requester:
    def __init__(self, logger: Logger):
        self.logger = logger
