from kink import di
from logger import Logger
from proxy_fetcher import ProxyFetcher
from proxy_switcher import ProxySwitcher
from requester import Requester
from soup_extractor import SoupExtractor
from azure_dbc import AzureDBC

def bootstrap_di() -> None:
    di[Logger] = Logger()
    di[ProxyFetcher] = lambda _di: ProxyFetcher(_di[Logger])
    di[ProxySwitcher] = lambda _di: ProxySwitcher(_di[ProxyFetcher], _di[Logger])
    di[Requester] = lambda _di: Requester(_di[Logger])
    di[SoupExtractor] = lambda _di: SoupExtractor(_di[RequestReader], _di[Logger])
    di[AzureDBC] = lambda _di: AzureDBC(_di[Logger])
