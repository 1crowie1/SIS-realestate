import model
import logging

def main():
    script_name = __file__.split('\\')[-1]
    level = logging.DEBUG
    fmt = f'[%(levelname)s] {model.log_style.YELLOW}{script_name}{model.log_style.RESET} %(asctime)s: %(message)s'
    logging.basicConfig(level=level, format=fmt)

    logging.info(f'{model.log_style.UNDERLINE}{model.log_style.GREEN}Application Started{model.log_style.RESET}')
    model.start()  # Call machine learning model

if __name__ == '__main__':
    main()