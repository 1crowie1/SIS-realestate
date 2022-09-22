from kink import inject
from proxy_switcher import ProxySwitcher
from logger import Logger
import requests
from real_estate_util import real_estate_headers
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
# from selenium_stealth import stealth
import pathlib

DEFAULT_HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0'}
DEFAULT_SESSION_COOKIE_WEBSITE = 'https://www.realestate.com.au/'

@inject
class Requester:
    def __init__(self, proxy_switcher: ProxySwitcher, logger: Logger, headers = DEFAULT_HEADERS):
        self.proxy_switcher = proxy_switcher
        self.logger = logger
        self.headers = headers
        chrome_path = str(pathlib.Path().resolve().as_posix()) + '/chromedriver.exe'
        chrome_service = Service(chrome_path)
        self.chrome_options = webdriver.ChromeOptions()
        self.chrome_options.add_experimental_option('excludeSwitches', ['enable-automation'])
        self.chrome_options.add_experimental_option('useAutomationExtension', False)
        self.chrome_options.add_argument('--disable-extensions')
        self.chrome_options.add_argument('--profile-directory=Default')
        self.chrome_options.add_argument("--incognito")
        self.chrome_options.add_argument("--disable-plugins-discovery");
        self.chrome_options.add_argument("--start-maximized")
        self.chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        self.driver = webdriver.Chrome(service=chrome_service, options=self.chrome_options)
        self.driver.execute_cdp_cmd('Network.setUserAgentOverride', {"userAgent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.53 Safari/537.36'})
        self.driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})")
        self.request_count = 0
        self.session = requests.Session()
        self.session.get(DEFAULT_SESSION_COOKIE_WEBSITE)
        self.session.cert

    def getUrlContent(self, url):
        response = requests.get(url, headers=self.headers)
        self.request_count += 1
        return response.content

    def getUrlContentUsingJsWithRandomProxy(self, url):
        while True:
            # proxy = self.proxy_switcher.getRandomProxy()
            try:
                # self.chrome_options.add_argument('--proxy-server=%s' % proxy)
                # self.driver.desired_capabilities['proxy'] = proxy
                # stealth(
                #     self.driver,
                #     languages=["en-US", "en"],
                #     vendor="Google Inc.",
                #     platform="Win32",
                #     webgl_vendor="Intel Inc.",
                #     renderer="Intel Iris OpenGL Engine",
                #     fix_hairline=True,
                # )
                self.driver.get(url)
                self.driver.switchTo().frame(0);
                # self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight,)")
                return self.driver.page_source
            except:
                # TODO - Log the printed statement below
                # Amself.proxy_switcher.addBrokenProxy(proxy)
                print('Proxy error, trying another proxy')

    def getUrlContentUsingJs(self, url):
        self.driver.get(url)
        return self.driver.page_source

    def getUrlContentWithRandomProxy(self, url):
        while True:
            proxy = self.proxy_switcher.getRandomProxy()
            try:
                return self.getUrlContentWithProxy(url, proxy)
            except:
                # TODO - Log the printed statement below
                self.proxy_switcher.addBrokenProxy(proxy)
                print('Proxy error, trying another proxy')

    def getUrlContentUsingSessionWithRandomProxy(self, url):
        while True:
            #proxy = self.proxy_switcher.getRandomProxy()
            try:
                return self.getUrlContentUsingSessionWithProxy(url, proxy='')
            except:
                # TODO - Log the printed statement below
                self.proxy_switcher.addBrokenProxy(proxy)
                print('Proxy error, trying another proxy')

    def getUrlContentWithProxy(self, url, proxy):
        proxies = self.createProxies(proxy)
        response = requests.get(url, headers=self.headers, proxies=proxies)
        self.request_count += 1
        return response.content

    def getUrlContentUsingSessionWithProxy(self, url, proxy):
        # proxies = self.createProxies(proxy)
        # headers = real_estate_headers
        self.session.cookies
        self.session.headers = real_estate_headers
        response = self.session.get(url, headers=real_estate_headers)
        self.request_count += 1
        return response.content

    def getUrlContent(self, url):
        response = requests.get(url, headers=self.headers)
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
