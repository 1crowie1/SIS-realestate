// const { default: Heatmap } = require("../components/heatmap/heatmap");

import Results from "../components/results/results";

// function createDynamicHeatmap(suburbsWihAverages) {
//   return (
//     <Heatmap suburbsWihAverages/>
//   )
// }

class RealestateUtil {
  constructor() { }

  // getSuburbsWithAverages(setHeatmap) {
  //     fetch("http://localhost:4000/suburbsWithAverages/")
  //     .then(res => res.json())
  //     .then(
  //       (suburbsWihAverages) => {
  //         console.log(suburbsWihAverages);
  //         setHeatmap(createDynamicHeatmap(suburbsWihAverages));
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  /**  Get Suburbs : app.use('/suburb', suburbRouter);
   * 
   *  List of End Points in Backend:
   *  1. Get all suburbs
   *  - http://localhost:4000/suburb/
   * 
   * 2. Get Popular Suburbs
   * - http://localhost:4000/suburb/getPopularSuburbs
   * 
   *  3. Get Suburb Breakdown
   *  - http://localhost:4000/suburb/suburbBreakdown/
  */
  getAllSuburbs(setSuburbs) {
    fetch("http://localhost:4000/suburb/")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
          setSuburbs(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }
  getPopularSuburbs(setPopularSuburbs) {
    fetch("http://localhost:4000/suburb/getPopularSuburbs")
    .then(res => res.json())
    .then(
      (result) => {
        // console.log(result);
        setPopularSuburbs(JSON.stringify(result));
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getSuburbBreakdown(suburbName, setSuburbs) {
    // suburbName = suburbID.toUpperCase();
    fetch("http://localhost:4000/suburb/suburbBreakdown/" + suburbName)
    .then(res => res.json())
    .then(
      (result) => {
        // console.log(result);
        setSuburbs(JSON.stringify(result));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /** Get Recommendations - Data from Database. Not Including Algo : app.use('/recommendation', recommendationRouter); 
   * 
   *  List of End Points in Backend:
   *  1. Get Recommendation Suburbs
   * - http://localhost:4000/recommendation/
   * 
   *  2. Get Recommended Suburb
   *  - http://localhost:4000/recommendation/getRecommendedSuburbs
   * 
   *  3. Get All Listings
   *  - http://localhost:4000/recommendation/getAllListings
   * 
   *  4. Get Cluster
   *  - http://localhost:4000/recommendation/getCluster
   * 
   *  5. Feeling Lucky
   *  - http://localhost:4000/recommendation/feelingLucky/
  */
  getRecommendations(setRecommendations) {
    fetch("http://localhost:4000/recommendation/getAllListings")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setRecommendations(JSON.stringify(result));
      },
      (error) => {
        console.log(error);
      }
    );
  }
  async getRecommendedSuburbs(clusterNumber, setRecommendedSuburbs) {
    // clusterNumber = 0;
    // fetch("http://localhost:4000/recommendation/getRecommendedSuburbs")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     // console.log(result);
    //     setRecommendedSuburbs(JSON.stringify(result));
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    try {
      let response = await fetch(`http://localhost:4000/recommendation/getRecommendedSuburbs/?clusterNumber=${clusterNumber}`)
    
      var result = await response.json();
      console.log(result);
  
      return result;
    } catch (e) {
      alert(e)
    }
    return [];
  }
  async getAllListings() {
    try {
      let response =  await fetch("http://localhost:4000/recommendation/getAllListings/")
    
      var result = await response.json();
      console.log(result);
  
      return result;
    } catch (e) {
      alert(e)
    }
    return [];
    
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     console.log(result);
    //     // const r = Results(JSON.stringify(result));
    //     // console.log(r);
    //     setAllListings(Results(result));
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
  async getCluster(clusterNumber) {
    // clusterNumber = 0;
    try {
      let response = await fetch(`http://localhost:4000/recommendation/getCluster/?clusterNumber=${clusterNumber}`)
    
      var result = await response.json();
      console.log(result);
  
      return result;
    } catch (e) {
      alert(e)
    }
    return [];

    // fetch("http://localhost:4000/recommendation/getCluster/?clusterNumber="+clusterNumber+"")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     // console.log(result);
    //     setCluster(JSON.stringify(result));
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  async getImgs(listingID) {
    try {
      let response = await fetch(`http://localhost:4000/recommendation/getImgs/?listingID=${listingID}`)
    
      var result = await response.json();
      console.log(result);
  
      return result;
    } catch (e) {
      alert(e)
    }
    return [];

    // fetch("http://localhost:4000/recommendation/getCluster/?clusterNumber="+clusterNumber+"")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     // console.log(result);
    //     setCluster(JSON.stringify(result));
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  getFeelingLucky(random, setRandomSuburbs) {
    // fetch("http://localhost:4000/recommendation/feelingLucky/?"+random+"")
    fetch("http://localhost:4000/recommendation/feelingLucky")
    .then(res => res.json())
    .then(
      (result) => {
        // console.log(result);
        setRandomSuburbs(
          // this.getRandomSuburbs(result),
          JSON.stringify(result)
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /** HEATMAP - Average Price and Average Listings : app.use('/suburbsWithAverages', suburbsWithAveragesRouter); */
  async getGeoJSON() {
    try {
      let response = await fetch("http://localhost:4000/heatmap/")
    
      var result = await response.json();
      console.log(result);
  
      return result;
    } catch (e) {
      alert(e)
    }
    return [];
    // fetch("http://localhost:4000/getAllListings/")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     // console.log(result);
    //     setGeoJSON(JSON.stringify(result));
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  async getResultsGeoJSON(clusterNumber) {
    try {
      let response = await fetch(`http://localhost:4000/heatmap/resultsHeatmap/?clusterNumber=${clusterNumber}`)
    
      var result = await response.json();
      console.log(result);
  
      return result;
    } catch (e) {
      alert(e)
    }
    return [];
    // fetch("http://localhost:4000/getAllListings/")
    // .then(res => res.json())
    // .then(
    //   (result) => {
    //     // console.log(result);
    //     setGeoJSON(JSON.stringify(result));
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }
}

export default RealestateUtil;