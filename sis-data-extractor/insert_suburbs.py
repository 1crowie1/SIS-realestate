import re
import json
import mysql.connector
import pyodbc

INSERT_INTO_SUBURB_TABLE = 'INSERT INTO dbo.suburb (postcode, name) VALUES ('

SERVER = 'tcp:sis-realestate.database.windows.net,1433'
PORT = 1433
DATABASE = 'SIS-realestate'
USERNAME = 'sis-realestate-admin'
password = input('Password: ')

SUBURB_AND_STREETS_FILE_NAME = 'suburbs_with_streets.json'
FILE_READ_MODE = 'r'
SPLIT_BY_COMMA = ','
def get_suburbs_with_streets(filename):
    return json.loads(open(filename, FILE_READ_MODE).read())

def extract_postcode(street_name):
    return re.search(r'\d+', street_name)[0]

EMPTY_STRING = ''
def main():
    cnxn = pyodbc.connect(driver = '{SQL Server Native Client 11.0};',
                        host = SERVER,
                        database = DATABASE,
                        user = USERNAME,
                        password = password)
    ##df = pd.read_sql_query(SELECT_ALL, cnxn)
    cursor = cnxn.cursor()
    
    suburb_and_street_mappings = get_suburbs_with_streets(SUBURB_AND_STREETS_FILE_NAME)
    for suburb in suburb_and_street_mappings:
        try:
            first_street_name = suburb_and_street_mappings.get(suburb)[0]
            postcode = extract_postcode(first_street_name)
            print(postcode, suburb)
            cursor.execute(INSERT_INTO_SUBURB_TABLE + postcode + ',' + '\'' + suburb + '\'' + ');')
        except:
            print('no streets for suburb: ' + suburb)
    cnxn.commit()
    cnxn.close()

main()
