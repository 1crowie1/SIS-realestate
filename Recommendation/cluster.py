import numpy as np
import pandas as pd
import pyodbc
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
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

def log(message: str, color: str) -> None:
    level = logging.DEBUG
    script_name = __file__.split('\\')[-1]
    fmt = f'[%(levelname)s] {log_style.YELLOW}{script_name}{log_style.RESET} %(asctime)s: {color}%(message)s{log_style.RESET}'
    logging.basicConfig(level=level, format=fmt)
    logging.info(message)

class azure_db():
    def __init__(self) -> None:
        var_list = ['server', 'database', 'username', 'password']
        self.credentials = pd.read_csv('Recommendation/azure_credentials.csv', names=var_list)
        self.driver = '{SQL Server}'
    
    def post_azure_query(self, query: str) -> list:
        with pyodbc.connect('DRIVER='+self.driver+';SERVER=tcp:'+self.credentials['server'][0]+';PORT=1433;DATABASE='+self.credentials['database'][0]+';UID='+self.credentials['username'][0]+';PWD='+self.credentials['password'][0]) as self.conn:
            with self.conn.cursor() as self.cursor:
                self.cursor.execute(query)
                results = self.cursor.fetchall()
        return results
    
    def post_azure_update(self, query: str) -> None:
        with pyodbc.connect('DRIVER='+self.driver+';SERVER=tcp:'+self.credentials['server'][0]+';PORT=1433;DATABASE='+self.credentials['database'][0]+';UID='+self.credentials['username'][0]+';PWD='+self.credentials['password'][0]) as self.conn:
            with self.conn.cursor() as self.cursor:
                self.cursor.execute(query)
        return

def check_connection() -> bool:
    """
    Check connection to Azure Database
    """
    try:
        d = azure_db()
        query = "SELECT @@Version"
        results = d.post_azure_query(query)
        log(results[0][0], log_style.GREEN)
        return True
    except Exception as e:
        log(e, log_style.RED)
        return False

def update_listing_cluster(data: pd.DataFrame) -> bool:
    """
    Update Listing Cluster Number in Azure Database
    """
    try:
        d = azure_db()
        query = ""
        leng = len(data)
        for index, row in data.iterrows():
            print(index, "/", leng)
            q = f"UPDATE dbo.big_property SET cluster_num = {row['cluster_num']} WHERE id = {row['id']};"
            query+=q
        d.post_azure_update(query)
        return True
    except Exception as e:
        log(e, log_style.RED)
        return False

def get_listings() -> pd.DataFrame:
    """
    Get Listings from Azure Database
    """
    d = azure_db()
    query = "SELECT id, property_type, price, bedrooms, bathrooms, parking_spaces FROM dbo.big_property WHERE price IS NOT NULL AND bedrooms IS NOT NULL AND bathrooms IS NOT NULL AND parking_spaces IS NOT NULL AND price < 10000000;"
    results = d.post_azure_query(query)
    listings = pd.DataFrame(columns = ["id", "property_type", "price", "bedrooms", "bathrooms", "parking_spaces"])
    for row in results:
        listings = listings.append({"id": row[0], "property_type": row[1], "price": row[2], "bedrooms": row[3], "bathrooms": row[4], "parking_spaces": row[5]}, ignore_index=True)
    return listings

def kmeans(data: pd.DataFrame, k: int) -> pd.DataFrame:
    """
    K-Means Clustering
    """

    kmeans = KMeans(n_clusters=k, random_state=0).fit(data)
    centroids = kmeans.cluster_centers_
    data["cluster_num"] = kmeans.labels_

    plt.scatter(data['price'], data['bedrooms'], c= kmeans.labels_.astype(float), s=50, alpha=0.5)
    plt.scatter(centroids[:, 0], centroids[:, 1], c='red', s=50)
    plt.show()

    return data

def start():
    if not check_connection():
        return
    log("Requesting Listings", "WHITE")
    listings = get_listings()
    #print(listings)
    amt = 15
    listings_data = listings.copy(deep=True)
    listings_data = listings_data.drop(columns=['id', 'property_type', 'bathrooms', 'parking_spaces'])
    clusters = kmeans(listings_data, amt)
    listings["cluster_num"] = clusters["cluster_num"]
    #print(listings.to_string())

    # for i in range(0, amt):
    #     print("Listings in cluster", i)
    #     print(listings.where(listings['cluster_num'] == i).count())
    
    listings_final = listings.copy(deep=True)
    listings_final = listings_final.drop(columns=['property_type', 'price', 'bedrooms', 'bathrooms', 'parking_spaces'])
    #print(listings_final.iloc[:, [1,0]])
    update_listing_cluster(listings_final.iloc[:, [1,0]])
    
    return
