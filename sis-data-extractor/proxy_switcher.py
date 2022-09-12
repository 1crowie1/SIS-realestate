from kink import inject
from proxy_fetcher import ProxyFetcher
from logger import Logger

@inject
class ProxySwitcher:
    def __init__(self, proxy_fetcher: ProxyFetcher, logger: Logger):
        self.proxy_fetcher = proxy_fetcher
        self.logger = logger
