import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {

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


    /**
     * Crivella's data
     */

    // Creates an array with only Crivella's news
    let crivellaList = [];
    chart.forEach( async (item) => {
        if(item.candidato === "Crivella") {
            crivellaList.push(item);
        }
    })

    // Quantity of news per month
    var crivellaNewsPerMonth = {};
    var crivellaAugustNews;
    var crivellaSeptemberNews;
    var crivellaOctoberNews;
    let crivellaMonthAugust = [];
    let crivellaMonthSeptember = [];
    let crivellaMonthOctober = [];
    // Separates dates into an array by month
    crivellaList.forEach( async (item) => {
        if(item.date_published.includes("-08-")) {
            crivellaMonthAugust.push("Ago/16");
        }
        if(item.date_published.includes("-09-")) {
            crivellaMonthSeptember.push("Set/16");
        }
        if(item.date_published.includes("-10-")) {
            crivellaMonthOctober.push("Out/16");
        }
    })
    // Then reduces the array counting each month
    crivellaAugustNews = crivellaMonthAugust.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});
    crivellaSeptemberNews = crivellaMonthSeptember.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});
    crivellaOctoberNews = crivellaMonthOctober.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    // Then assigns all months into crivellaNewsPerMonth
    Object.assign(crivellaNewsPerMonth, crivellaOctoberNews, crivellaSeptemberNews, crivellaAugustNews)


    /**
     * Freixo's data
     */

    // Creates an array with only Crivella's news
    let freixoList = [];
    chart.forEach( async (item) => {
        if(item.candidato === "Freixo") {
            freixoList.push(item);
        }
    })

    // Quantity of news per month
    var freixoNewsPerMonth = {};
    var freixoAugustNews;
    var freixoSeptemberNews;
    var freixoOctoberNews;
    let freixoMonthAugust = [];
    let freixoMonthSeptember = [];
    let freixoMonthOctober = [];
    // Separates dates into an array by month
    freixoList.forEach( async (item) => {
        if(item.date_published.includes("-08-")) {
            freixoMonthAugust.push("Ago/16");
        }
        if(item.date_published.includes("-09-")) {
            freixoMonthSeptember.push("Set/16");
        }
        if(item.date_published.includes("-10-")) {
            freixoMonthOctober.push("Out/16");
        }
    })
    // Then reduces the array counting each month
    freixoAugustNews = freixoMonthAugust.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});
    freixoSeptemberNews = freixoMonthSeptember.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});
    freixoOctoberNews = freixoMonthOctober.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    // Then assigns all months into freixoNewsPerMonth
    Object.assign(freixoNewsPerMonth, freixoOctoberNews, freixoSeptemberNews, freixoAugustNews)

 
    const options = {
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: false,
            text: 'Notícias por candidato por mês',
          },
        },
    };
      
    const data = {
        labels: Object.keys(crivellaNewsPerMonth).map(x => x),
        datasets: [
          {
            label: 'Crivela',
            data: Object.values(crivellaNewsPerMonth).map(x => x),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Freixo',
            data: Object.values(freixoNewsPerMonth).map(x => x),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
    };
      
      
    return <Bar options={options} data={data} />;
      
}

export default HorizontalBarChart;
