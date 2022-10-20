// const { default: Heatmap } = require("../components/heatmap/heatmap");

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

  getPopularSuburbs(setPopularSuburbs) {
    fetch("http://localhost:4000/getPopularSuburbs/")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setPopularSuburbs(JSON.stringify(result));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getGeoJSON(setGeoJSON) {
    fetch("http://localhost:4000/calculateNearestProperties/")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setGeoJSON(JSON.stringify(result));
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

export default RealestateUtil;