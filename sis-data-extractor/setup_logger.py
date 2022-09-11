import logging

class Logger:
    def __init__(self):
        self.name = 'sis-logger'
        self.logger = logging.getLogger(self.name)

    def log(self, log: str) -> None:
        self.logger.info(log)

def create_logger() -> Logger:
    return Logger()
