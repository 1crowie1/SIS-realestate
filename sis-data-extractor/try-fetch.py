from kink import inject
from fetch import get_proxies

@inject
class ProxyFetcher:
    def __init__(self, logger: Logger):
        self.proxies = get_proxies()
        self.logger = logger

    def getAvailableProxies(self):
        return self.proxies

    def logProxies(self):
        logger.info(self.proxies)
