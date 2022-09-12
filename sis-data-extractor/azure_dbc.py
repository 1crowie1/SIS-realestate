import pyodbc
from kink import inject
from logger import Logger

DEFAULT_SERVER = 'tcp:sis-realestate.database.windows.net,1433'
DEFAULT_PORT = 1433
DEFAULT_DATABASE = 'SIS-realestate'
DEFAULT_USERNAME = 'sis-realestate-admin'

@inject
class AzureDBC:
    def __init__(self, password = input('Password: '), server = DEFAULT_SERVER, database = DEFAULT_DATABASE, username = DEFAULT_USERNAME):
        self.broken_statements = []
        self.connection = pyodbc.connect(
            driver = '{SQL Server Native Client 11.0};',
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
            return self.cursor.fetch()
        except pyodbc.Error as ex:
            sqlstate = ex.args[0]
            message = ex.args[1]
            print(sqlstate, message)
            self.broken_statements.append(statement)
                    
    def execute_statement(self, statement):
        try:
            self.cursor.execute(statement)
        except pyodbc.Error as ex:
            sqlstate = ex.args[0]
            message = ex.args[1]
            print(sqlstate, message)
            self.self.broken_statements.append(statement)

    def commit(self):
        self.cursor.commit()

    def close(self):
        self.connection.close()
