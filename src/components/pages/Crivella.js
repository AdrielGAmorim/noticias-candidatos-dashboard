import { useEffect, useState } from 'react';
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
    let crivellaNews;
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
    var journalWithMostNews = [];
    var counter = 0;
    Object.entries(crivellaNews).forEach((item) => {
        if(item) {
            if(item[1] > counter) {
                journalWithMostNews = item;
                counter = item[1];
            }
        }
    })


    // Get a random news object
    var randNews1 = crivellaList[Math.floor(Math.random()*crivellaList.length)];
    var randNews2 = crivellaList[Math.floor(Math.random()*crivellaList.length)];
    var randNews3 = crivellaList[Math.floor(Math.random()*crivellaList.length)];
    var randNews4 = crivellaList[Math.floor(Math.random()*crivellaList.length)];
    var randNews5 = crivellaList[Math.floor(Math.random()*crivellaList.length)];
    var randNews6 = crivellaList[Math.floor(Math.random()*crivellaList.length)];
    

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
                        <img src="./images/overlay.png" alt="" />
                    </StatisticsWrapper>
                </DataWrapper>
                <FloatingImg>
                    <img src="./images/crivella.jpg" alt="" />
                </FloatingImg>
                <DataWrapper>
                    <h2>Quantidade total de notícias publicadas sobre o candidato:</h2>
                    <StatisticsWrapper>
                        <p>
                            {crivellaJournalList.length ?
                            crivellaJournalList.length :
                            ""}
                        </p>
                        <img src="./images/overlay.png" alt="" />
                    </StatisticsWrapper>
                </DataWrapper>

            </ImagesSection>
            <NewsSection>
                <h1>Notícias aleatórias sobre o Crivella</h1>
                <div>
                    {randNews6 ? (
                        <>
                            <NewsButton onClick={() => {handleClick(randNews1.url)}}>
                                <h3>{randNews1.title ?
                                    randNews1.title :
                                    ""
                                }</h3>
                                <p>{randNews1.source ?
                                    `Fonte: ${randNews1.source}` :
                                    ""
                                }</p>
                            </NewsButton>

                            <NewsButton onClick={() => {handleClick(randNews2.url)}}>
                                <h3>{randNews2.title ?
                                    randNews2.title :
                                    ""
                                }</h3>
                                <p>{randNews2.source ?
                                    `Fonte: ${randNews2.source}` :
                                    ""
                                }</p>
                            </NewsButton>
                            
                            <NewsButton onClick={() => {handleClick(randNews3.url)}}>
                                <h3>{randNews3.title ?
                                    randNews3.title :
                                    ""
                                }</h3>
                                <p>{randNews3.source ?
                                    `Fonte: ${randNews3.source}` :
                                    ""
                                }</p>
                            </NewsButton>

                            <NewsButton onClick={() => {handleClick(randNews4.url)}}>
                                <h3>{randNews4.title ?
                                    randNews4.title :
                                    ""
                                }</h3>
                                <p>{randNews4.source ?
                                    `Fonte: ${randNews4.source}` :
                                    ""
                                }</p>
                            </NewsButton>

                            <NewsButton onClick={() => {handleClick(randNews5.url)}}>
                                <h3>{randNews5.title ?
                                    randNews5.title :
                                    ""
                                }</h3>
                                <p>{randNews5.source ?
                                    `Fonte: ${randNews5.source}` :
                                    ""
                                }</p>
                            </NewsButton>

                            <NewsButton onClick={() => {handleClick(randNews6.url)}}>
                                <h3>{randNews6.title ?
                                    randNews6.title :
                                    ""
                                }</h3>
                                <p>{randNews6.source ?
                                    `Fonte: ${randNews6.source}` :
                                    ""
                                }</p>
                            </NewsButton>
                        </>
                    ) : (
                        <Loading src='./images/loading.gif' />
                    )}

                </div>
            </NewsSection>
        </StyledCrivella>
    )

}
 
export default Crivella;