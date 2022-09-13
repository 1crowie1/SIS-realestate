from kink import inject
from logger import Logger
from requester import Requester
from proxy_switcher import ProxySwitcher

@inject
class RealEstateExtractor(object):
    def __init__(self, requester: Requester, proxy_switcher: ProxySwitcher, logger: Logger):
        self.requester = requester
        self.proxy_switcher = proxy_switcher
        self.logger = logger
