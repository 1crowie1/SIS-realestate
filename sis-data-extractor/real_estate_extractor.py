from kink import inject
from proxy_fetcher import ProxyFetcher

@inject
class RealEstateExtractor(object):
    def __init__(self, proxy_fetcher: ProxyFetcher):
        proxy_fetcher.logProxies()
