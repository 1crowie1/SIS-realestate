from kink import di
from logger import Logger
from proxy_fetcher import ProxyFetcher
from proxy_switcher import ProxySwitcher
from requester import Requester
from soup_extractor import SoupExtractor
from suburb_extractor import SuburbExtractor
from street_extractor import StreetExtractor
from listing_extractor import ListingExtractor
from real_estate_extractor import RealEstateExtractor
from real_estate_polling_scheduler import RealEstatePollingScheduler
from real_estate_polling_executer import RealEstatePollingExecuter
from azure_dbc import AzureDBC

def bootstrap_di_logger() -> None:
    di[Logger] = Logger()

def bootstrap_di_db_connection() -> None:
    di[AzureDBC] = lambda _di: AzureDBC(_di[Logger])

def bootstrap_di_proxys() -> None:
    di[ProxyFetcher] = lambda _di: ProxyFetcher(_di[Logger])
    di[ProxySwitcher] = lambda _di: ProxySwitcher(_di[ProxyFetcher], _di[Logger])

def bootstrap_di_requester() -> None:
    di[SoupExtractor] = lambda _di: SoupExtractor(_di[Logger])
    di[Requester] = lambda _di: Requester(_di[ProxySwitcher], _di[Logger])

def bootstrap_di_extractors() -> None:
    di[SuburbExtractor] = lambda _di: SuburbExtractor(_di[Requester], _di[Logger])
    di[StreetExtractor] = lambda _di: StreetExtractor(_di[Requester], _di[Logger])
    di[ListingExtractor] = lambda _di: ListingExtractor(_di[Requester], _di[Logger])
    di[RealEstateExtractor] = lambda _di: SuburbExtractor(_di[Requester], _di[Logger])

def bootstrap_di_scheduler() -> None:
    di[RealEstatePollingScheduler] = lambda _di: RealEstatePollingScheduler(_di[Requester], _di[Logger])

def bootstrap_di_executer() -> None:
    di[RealEstatePollingExecuter] = lambda _di: RealEstatePollingExecuter(_di[Requester], _di[Logger])

def bootstrap_di_all() -> None:
    bootstrap_di_logger()
    bootstrap_di_db_connection()
    bootstrap_di_proxys()
    bootstrap_di_requester()
    bootstrap_di_extractors()
    bootstrap_di_scheduler()
    bootstrap_di_executer()
