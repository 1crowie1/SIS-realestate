import {Doughnut} from "react-chartjs-2"


const data = {
    labels: ["red" , "blue", "yellow" , "green", "purple", "orange"],
    datasets:  [{
        data:[12,19,3,5,2,3]

    }]

};

function DoughnutChart() {
    return (<div>
    <Doughnut data={data}
    />
    </div>
    );
}

export default DoughnutChart;