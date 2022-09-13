from kink import inject
from fetch import get_proxies
from logger import Logger

@inject
class ProxyFetcher:
    def __init__(self, logger: Logger):
        self.proxies = ['mock'] # get_proxies()
        self.logger = logger

    def getAvailableProxies(self):
        return self.proxies

    def logProxies(self):
        self.logger.log(self.proxies)
