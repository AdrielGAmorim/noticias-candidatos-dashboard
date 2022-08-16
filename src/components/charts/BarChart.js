import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

    const [chart, setChart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://localhost:3001/')
            .then((response) => {
                response.json().then((json) => {
                    setChart(json.data)
                })
            })
        };
        fetchData();
    // [] nedded to not loop infinitely
    // Next line disables the warning that [] causes
    // eslint-disable-next-line 
    }, [])
    
    // Quantity of news per candidate
    let newsPerCandidate;
    let candidatesList = [];
    // Separates candidates into an array
    chart.forEach( async (item) => {
        if(item.candidato) candidatesList.push(item.candidato);
    })
    // Then reduces the array counting each candidate
    newsPerCandidate = candidatesList.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    let data = {
        labels: Object.keys(newsPerCandidate).map(x => x),
        datasets: [{
            label: 'Notícias',
            data: Object.values(newsPerCandidate).map(x => x),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    };

    let options = {
        maintanAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };

    return ( 
        <div>
            <Bar
                data={data}
                options={options}
                height={400}
                width={700}
            />
        </div>
     );

}
 
export default BarChart;