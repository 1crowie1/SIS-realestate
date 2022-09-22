
DEFAULT_STATE_NSW = 'NSW'

class Suburb:
    def __init__(self, name: str, postcode: str, state: str = DEFAULT_STATE_NSW):
        self.name = name
        self.postcode = postcode
        self.state = state