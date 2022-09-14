from kink import inject
from proxy_fetcher import ProxyFetcher
from logger import Logger
import random

@inject
class ProxySwitcher:
    def __init__(self, proxy_fetcher: ProxyFetcher, logger: Logger):
        self.proxy_fetcher = proxy_fetcher
        self.logger = logger
        self.broken_proxies = []

    def getRandomProxy(self):
        available_proxies = self.proxy_fetcher.getAvailableProxies()
        available_proxies = [proxy for proxy in available_proxies if proxy not in self.broken_proxies]
        random_proxy_index = random.randint(0, len(available_proxies) - 1)
        return available_proxies[random_proxy_index]

    def addBrokenProxy(self, proxy):
        self.broken_proxies.append(proxy)
