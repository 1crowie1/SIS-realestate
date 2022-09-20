from listing import Listing
from street import Street

class Property(Listing):
    def __init__(self, street: Street, street_number: int, unit_number: str = None):
        super().__init__(self, street, street_number, unit_number)