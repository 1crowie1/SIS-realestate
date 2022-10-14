import numpy as np
import pandas as pd
import pyodbc
import matplotlib.pyplot as plt
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
        results = d.post_azure_query(query)
        log(results[0][0], log_style.GREEN)
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

class Kmeans(object):

    def __init__(self, k=1):
        self.k = k

    def train(self, data, verbose=1):
        shape = data.shape

        ranges = np.zeros((shape[1], 2))
        centroids = np.zeros((shape[1], 2))

        for dim in range(shape[1]):
            ranges[dim, 0] = np.min(data[:,dim])
            ranges[dim, 1] = np.max(data[:,dim])

        if verbose == 1:
            print('Ranges: ')
            print(ranges)

        centroids = np.zeros((self.k, shape[1]))
        for i in range(self.k):
            for dim in range(shape[1]):
                centroids[i, dim] = np.random.uniform(ranges[dim, 0], ranges[dim, 1], 1)

        if verbose == 1:
            print('Centroids: ')
            print(centroids)

            # plt.scatter(data[:,0], data[:,1])
            # # plt.scatter(centroids[:,0], centroids[:,1], c = 'r')
            # plt.show()

        count = 0
        while count < 100:
            count += 1
            if verbose == 1:
                print('-----------------------------------------------')
                print('Iteration: ', count)

            distances = np.zeros((shape[0],self.k))
            for ix, i in enumerate(data):
                for ic, c in enumerate(centroids):
                    distances[ix, ic] = np.sqrt(np.sum((i-c)**2))

            labels = np.argmin(distances, axis = 1)

            new_centroids = np.zeros((self.k, shape[1]))
            for centroid in range(self.k):
                temp = data[labels == centroid]
                if len(temp) == 0:
                    return 0
                for dim in range(shape[1]): 
                    new_centroids[centroid, dim] = np.mean(temp[:,dim])

            # if verbose == 1:
            #     plt.scatter(data[:,0], data[:,1], c = labels)
            #     # plt.scatter(new_centroids[:,0], new_centroids[:,1], c = 'r')
            #     plt.show()

            if np.linalg.norm(new_centroids - centroids) < np.finfo(float).eps:
                log("DONE!", "GREEN")
                plt.scatter(data[:,0], data[:,1], c = labels)
                plt.scatter(new_centroids[:,0], new_centroids[:,1], alpha=0.25, s=10000, c = 'Grey')
                plt.title("Listing Clusters")
                plt.xlabel("House Price ($AUD)")
                plt.ylabel("Bedrooms (Amt)")
                plt.show()
                break

            centroids = new_centroids
        self.centroids = centroids
        self.labels = labels

        # if verbose == 1:
        #     print(labels)
        #     print(centroids)
        return 1

    def getAverageDistance(self, data):

        dists = np.zeros((len(self.centroids),))
        for ix, centroid in enumerate(self.centroids):
            temp = data[self.labels == ix]
            dist = 0
            for i in temp:
                dist += np.linalg.norm(i - centroid)
            dists[ix] = dist/len(temp)
        return dists

    def getLabels(self):
        return self.labels

def start():
    if not check_connection():
        return
    log("Requesting Listings", "WHITE")
    listings = get_listings()
    print(listings)
    listings_data = listings.copy(deep=True)
    listings_data = listings_data.drop(columns=['id', 'property_type', 'bathrooms', 'parking_spaces'])
    data = listings_data.to_numpy()
    kmeans = Kmeans(5)
    kmeans.train(data)
    return
