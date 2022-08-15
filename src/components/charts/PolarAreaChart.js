import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
  
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {

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
    
    // Quantity of news per author
    var newsPerAuthor;
    let authorsList = [];
    // Separates authors into an array
    chart.forEach((item) => {
        if(item.author) authorsList.push(item.author);
    })
    // Then reduces the array counting each author
    newsPerAuthor = authorsList.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    // Converting object into array
    var newsPerAuthorArray = Object.entries(newsPerAuthor);
    // Getting top one author
    var counterOne = 0;
    var topOneAuthor = [];
    var authorWithMostNews = [];
    newsPerAuthorArray.forEach((item) => {
        if(item) {
            if(item[1] > counterOne) {
                authorWithMostNews = item;
                counterOne = item[1];
            }
        }
    })
    topOneAuthor = authorWithMostNews;
    
    // Getting top two author
    var topTwoAuthor = [];
    var secondNewsPerAuthorArray = newsPerAuthorArray.filter(
        item => item[1] < topOneAuthor[1])
        var counterTwo = 0;
        var authorWithMostNews2 = [];
        secondNewsPerAuthorArray.forEach((item) => {
            if(item) {
                if(item[1] > counterTwo) {
                    authorWithMostNews2 = item;
                    counterTwo = item[1];
                }
            }
        })
        topTwoAuthor = authorWithMostNews2;
        
        // Getting top three author
        var topThreeAuthor = [];
        var thirdNewsPerAuthorArray = secondNewsPerAuthorArray.filter(
        item => item[1] < topTwoAuthor[1])
        var counterThree = 0;
    var authorWithMostNews3 = [];
    thirdNewsPerAuthorArray.forEach((item) => {
        if(item) {
            if(item[1] > counterThree) {
                authorWithMostNews3 = item;
                counterThree = item[1];
            }
        }
    })
    topThreeAuthor = authorWithMostNews3;

      
    const data = {
        labels: [topOneAuthor[0], topTwoAuthor[0], topThreeAuthor[0]],
        datasets: [
          {
            label: 'Top three authors',
            data: [topOneAuthor[1], topTwoAuthor[1], topThreeAuthor[1]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };



    return <PolarArea data={data} />;

}
 
export default PolarAreaChart;