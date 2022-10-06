import cluster
import logging

def main():
    script_name = __file__.split('\\')[-1]
    level = logging.DEBUG
    fmt = f'[%(levelname)s] {cluster.log_style.YELLOW}{script_name}{cluster.log_style.RESET} %(asctime)s: %(message)s'
    logging.basicConfig(level=level, format=fmt)

    logging.info(f'{cluster.log_style.UNDERLINE}{cluster.log_style.GREEN}Application Started{cluster.log_style.RESET}')
    cluster.start()  # Call machine learning model

if __name__ == '__main__':
    main()