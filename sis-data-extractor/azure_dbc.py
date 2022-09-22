import pyodbc
from kink import inject
from logger import Logger
from azure_dbc_util import GET_SUBURBS_PREPARED_STATEMENT, parse_suburbs_sql

DEFAULT_SIS_SERVER = 'tcp:sis-realestate.database.windows.net,1433'
DEFAULT_SIS_DATABASE = 'SIS-realestate'
DEFAULT_SIS_USERNAME = 'sis-realestate-admin'
DEFAULT_SQL_DRIVER = '{SQL Server Native Client 11.0};'

@inject
class AzureDBC:
    def __init__(self, logger: Logger, password = input('Password: '), server = DEFAULT_SIS_SERVER, database = DEFAULT_SIS_DATABASE, username = DEFAULT_SIS_USERNAME, driver = DEFAULT_SQL_DRIVER):
        self.successful_statements = []
        self.broken_statements = []
        self.connection = pyodbc.connect(
            driver = driver,
            host = server,
            database = database,
            user = username,
            password = password
        )
        self.cursor = self.connection.cursor()

    def fetchone_statement(self, statement):
        try:
            self.execute_statement(statement)
            return self.cursor.fetchone()
        except pyodbc.Error as ex:
            sqlstate = ex.args[0]
            message = ex.args[1]
            print(sqlstate, message)
            self.broken_statements.append(statement)

    def fetch_statement(self, statement):
        try:
            self.execute_statement(statement)
            return self.cursor.fetchall()
        except pyodbc.Error as ex:
            sqlstate = ex.args[0]
            message = ex.args[1]
            print(sqlstate, message)
            self.broken_statements.append(statement)
                    
    def execute_statement(self, statement):
        try:
            self.cursor.execute(statement)
            self.successful_statements.append(statement)
        except pyodbc.Error as ex:
            sqlstate = ex.args[0]
            message = ex.args[1]
            print(sqlstate, message)
            self.broken_statements.append(statement)

    def print_successful_statements(self):
        print('========== PRINTING SUCCESSFUL STATEMENTS ==========')
        for statement in self.successful_statements:
            print(statement)

    def print_successful_statements(self):
        print('========== PRINTING BROKEN STATEMENTS ==========')
        for statement in self.broken_statements:
            print(statement)

    def execute_statements(self, statements):
        for statement in statements:
            self.execute_statement(statement)

    def commit(self):
        self.successful_statements.clear()
        self.cursor.commit()

    def close(self):
        self.connection.close()

    def getSuburbsFromDB(self):
        suburbs_sql = self.fetch_statement(GET_SUBURBS_PREPARED_STATEMENT)
        return parse_suburbs_sql(suburbs_sql)