import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
)

const LineChart = () => {

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
    

    // Quantity of news per month
    var newsPerMonth = {};
    var augustNews;
    var septemberNews;
    var octoberNews;
    let monthAugust = [];
    let monthSeptember = [];
    let monthOctober = [];
    // Separates dates into an array by month
    chart.forEach( async (item) => {
        if(item.date_published.includes("-08-")) {
            monthAugust.push("Ago/16");
        }
        if(item.date_published.includes("-09-")) {
            monthSeptember.push("Set/16");
        }
        if(item.date_published.includes("-10-")) {
            monthOctober.push("Out/16");
        }
    })
    // Then reduces the array counting each month
    augustNews = monthAugust.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});
    septemberNews = monthSeptember.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});
    octoberNews = monthOctober.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    // Then assigns all months into newsPerMonth
    Object.assign(newsPerMonth, octoberNews, septemberNews, augustNews)

    var data = {
        labels: Object.keys(newsPerMonth).map(x => x),
        datasets: [{
            label: 'Notícias',
            data: Object.values(newsPerMonth).map(x => x),
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

    var options = {
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
            <Line 
                data={data}
                options={options}
                height={300}
                width={700}
            />
        </div>
     );

}
 
export default LineChart;