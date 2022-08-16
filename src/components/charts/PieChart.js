import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

const PieChart = () => {

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
    
    // Quantity of news per journal
    // Separates journals into an array
    let journalsList = [];
    chart.forEach( async (item) => {
        if(item.source) journalsList.push(item.source);
    })
    // Then reduces the array counting each journal
    let newsPerJournal;
    newsPerJournal = journalsList.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    let data = {
        labels: Object.keys(newsPerJournal).map(x => x),
        datasets: [{
            label: `${Object.keys(newsPerJournal).length} jornais`,
            data: Object.values(newsPerJournal).map(x => x),
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
            borderWidth: 1
        }]
    };

    let options = {
        maintanAspectRatio: false,
        scales: {
            y: {
                beginAtZero: false
            }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
    };

    return ( 
        <div>
            <Pie 
                data={data}
                options={options}
                height={700}
                width={700}
            />
        </div>
     );

}
 
export default PieChart;