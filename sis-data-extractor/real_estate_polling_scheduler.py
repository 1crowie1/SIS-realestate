from kink import inject
from requester import Requester
from proxy_switcher import ProxySwitcher
from logger import Logger

class RealEstatePollingScheduler:
    def __init__(self, requester: Requester, logger: Logger):
        self.requester = requester
        self.logger = logger