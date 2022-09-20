from street import Street

class Property:
    def __init__(self, street: Street, street_number: int, unit_number: str = None):
        self.street = street