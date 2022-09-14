from kink import inject
from proxy_switcher import ProxySwitcher
from logger import Logger
import requests

DEFAULT_HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0'}

@inject
class Requester:
    def __init__(self, proxy_switcher: ProxySwitcher, logger: Logger, headers = DEFAULT_HEADERS):
        self.proxy_switcher = proxy_switcher
        self.logger = logger
        self.headers = headers
        self.request_count = 0

    def getUrlContent(self, url):
        response = requests.get(url, headers=self.headers)
        self.request_count += 1
        return response.content

    def getUrlContentWithRandomProxy(self, url):
        while True:
            proxy = self.proxy_switcher.getRandomProxy()
            try:
                return self.getUrlContentWithProxy(url, proxy)
            except:
                # TODO - Log the printed statement below
                self.proxy_switcher.addBrokenProxy(proxy)
                print('Proxy error, trying another proxy')

    def getUrlContentWithProxy(self, url, proxy):
        proxies = self.createProxies(proxy)
        response = requests.get(url, headers=self.headers, proxies=proxies)
        self.request_count += 1
        return response.content

    def createProxies(self, proxy):
        if 'socks' in proxy:
            return {"http": proxy, "https": proxy}
        elif 'https' in proxy:
            return {"https": proxy}
        elif 'http' in proxy:
            return {"http": proxy}
        else:
            return {"http": proxy}
