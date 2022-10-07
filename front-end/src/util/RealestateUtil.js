export function getRecommendations(setRecommendations) {
    fetch("http://localhost:4000/calculateNearestProperties/")
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