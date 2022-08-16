import { useEffect, useState } from 'react';
import overlay from '../images/overlay.png';
import crivellaImg from '../images/crivella.jpg';
import loadingImg from '../images/loading.gif';
import {
    StyledCrivella,
    ImagesSection,
    FloatingImg,
    DataWrapper,
    StatisticsWrapper,
    NewsSection,
    NewsButton,
    Loading
} from '../styled/Crivella.styled';

const Crivella = () => {
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


    // Uses `chart` to create an array with only Crivella's news
    let crivellaList = [];
    chart.forEach( async (item) => {
        if(item.candidato === "Crivella") {
            crivellaList.push(item);
        }
    })

    // Quantity of news per journal
    let crivellaNews; // Variable to use ahead
    let crivellaJournalList = [];
    // Separates journals into an array
    crivellaList.forEach( async (item) => {
        if(item.source) crivellaJournalList.push(item.source);
    })

    // Then reduces the array counting each author
    crivellaNews = crivellaJournalList.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    // Getting the journal with the most news.
    let journalWithMostNews = [];
    var counter = 0;
    Object.entries(crivellaNews).forEach((item) => {
        if(item) {
            if(item[1] > counter) {
                journalWithMostNews = item;
                counter = item[1];
            }
        }
    })


    // Getting array of 6 news
    let randData = [];
    for(let i = 0; i < 6; i++) {
        randData.push(crivellaList[Math.floor(Math.random()*crivellaList.length)]);
    }
    // Setting array of components
    let randNews = [];
    randData.forEach((data) => {
        if(data) {
            randNews.push(
                <NewsButton onClick={() => {handleClick(data.url)}}>
                    <h3>{data.title}</h3>
                    <p>{data.source}</p>
                </NewsButton>
            )
        }
    });

    function handleClick(url) {
        window.open(url, '_blank');
    }


    return (
        <StyledCrivella>
            <ImagesSection>
                <DataWrapper>
                    <h2>Jornal com mais notícias publicadas sobre o candidato:</h2>
                    <StatisticsWrapper>
                        <p>
                            {journalWithMostNews ?
                            journalWithMostNews[0] :
                            ""}<br/>
                            {journalWithMostNews ?
                            journalWithMostNews[1] :
                            ""}
                        </p>
                        <img src={overlay} alt="" />
                    </StatisticsWrapper>
                </DataWrapper>
                <FloatingImg>
                    <img src={crivellaImg} alt="" />
                </FloatingImg>
                <DataWrapper>
                    <h2>Total de notícias publicadas sobre o candidato:</h2>
                    <StatisticsWrapper>
                        <p>
                            {crivellaJournalList.length ?
                            crivellaJournalList.length :
                            ""}
                        </p>
                        <img src={overlay} alt="" />
                    </StatisticsWrapper>
                </DataWrapper>

            </ImagesSection>
            <NewsSection>
                <h1>Notícias aleatórias sobre o Crivella</h1>
                <div>{randNews ? randNews : <Loading src={loadingImg} />}</div>
            </NewsSection>
        </StyledCrivella>
    )

}
 
export default Crivella;