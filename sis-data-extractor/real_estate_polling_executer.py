from kink import inject
from requester import Requester
from proxy_switcher import ProxySwitcher
from logger import Logger

class RealEstatePollingExecuter:
    def __init__(self, requester: Requester, logger: Logger):
        self.requester = requester
        self.logger = logger