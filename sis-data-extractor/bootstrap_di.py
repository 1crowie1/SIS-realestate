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

def bootstrap_di() -> None:
    di[Logger] = Logger()
    di[ProxyFetcher] = lambda _di: ProxyFetcher(_di[Logger])
    di[ProxySwitcher] = lambda _di: ProxySwitcher(_di[ProxyFetcher], _di[Logger])
    di[SoupExtractor] = lambda _di: SoupExtractor(_di[Logger])
    di[Requester] = lambda _di: Requester(_di[SoupExtractor], _di[ProxySwitcher], _di[Logger])
    di[AzureDBC] = lambda _di: AzureDBC(_di[Logger])
    di[SuburbExtractor] = lambda _di: SuburbExtractor(_di[Requester], _di[Logger])
    di[StreetExtractor] = lambda _di: StreetExtractor(_di[Requester], _di[Logger])
    di[ListingExtractor] = lambda _di: ListingExtractor(_di[Requester], _di[Logger])
    di[RealEstateExtractor] = lambda _di: SuburbExtractor(_di[Requester], _di[Logger])
    di[RealEstatePollingScheduler] = lambda _di: RealEstatePollingScheduler(_di[Requester], _di[Logger])
    di[RealEstatePollingExecuter] = lambda _di: RealEstatePollingExecuter(_di[Requester], _di[Logger])
