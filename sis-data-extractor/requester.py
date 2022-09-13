from kink import inject
from proxy_switcher import ProxySwitcher
from soup_extractor import SoupExtractor
from logger import Logger

@inject
class Requester:
    def __init__(self, soup_extractor: SoupExtractor, proxy_switcher: ProxySwitcher, logger: Logger):
        self.proxy_switcher = proxy_switcher
        self.soup_extractor = soup_extractor
        self.logger = logger
