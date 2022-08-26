import numpy as np
import pandas as pd
import logging

class log_style():
    BLACK = '\033[30m'
    RED = '\033[31m'
    GREEN = '\033[32m'
    YELLOW = '\033[33m'
    BLUE = '\033[34m'
    MAGENTA = '\033[35m'
    CYAN = '\033[36m'
    WHITE = '\033[37m'
    UNDERLINE = '\033[4m'
    RESET = '\033[0m'

def start():
    logging.info(f'{log_style.MAGENTA}Creating Data-Frame{log_style.RESET}')
    # Create a data-frame with that attributes wanted for the suburb level model
    attributes = pd.DataFrame(columns=['suburb', 'avg_price', 'dist_hospital', 'dist_cbd', 'num_recreation'])
    return
