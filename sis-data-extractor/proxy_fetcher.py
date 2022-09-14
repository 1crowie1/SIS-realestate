from kink import inject
from fetch import get_proxies
from logger import Logger

@inject
class ProxyFetcher:
    def __init__(self, logger: Logger):
        self.mockProxies() # self.proxies = get_proxies()
        self.logger = logger

    def getAvailableProxies(self):
        return self.proxies

    def logProxies(self):
        self.logger.log(self.proxies)

    def mockProxies(self):
        self.proxies = [
            'socks4://200.41.182.243:4145',
            'socks4://178.48.68.61:4145',
            'http://169.57.1.85:8123',
            'socks5://45.169.70.9:7497',
            'socks4://200.41.182.243:4145',
            'http://35.158.228.86:17777',
            'http://101.200.127.149:3129',
            'socks4://178.48.68.61:4145',
            'http://169.57.1.85:8123',
            'socks4://178.48.68.61:4145',
            'socks4://200.41.182.243:4145',
            'socks4://178.48.68.61:4145',
            'socks4://1.221.173.148:4145'
        ]
