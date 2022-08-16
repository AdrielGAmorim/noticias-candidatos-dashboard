import { useEffect, useState } from 'react';
import overlay from "../images/overlay.png"
import freixoImg from '../images/freixo.png';
import loadingImg from '../images/loading.gif';
import {
    StyledFreixo,
    ImagesSection,
    FloatingImg,
    DataWrapper,
    StatisticsWrapper,
    NewsSection,
    NewsButton,
    Loading
} from '../styled/Freixo.styled';

const Freixo = () => {
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


    // Uses `chart` to create an array with only Freixo's news
    const freixoList = [];
    chart.forEach( async (item) => {
        if(item.candidato === "Freixo") {
            freixoList.push(item);
        }
    })

    // Quantity of news per journal
    const freixoJournalList = [];
    // Separates journals into an array
    freixoList.forEach( async (item) => {
        if(item.source) freixoJournalList.push(item.source);
    })

    // Then reduces the array counting each author
    const freixoNews = freixoJournalList.reduce((count,currentValue) => {
        return (
            count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
            count
        );
    },
    {});

    // Getting the journal with the most news.
    let journalWithMostNews = [];
    var counter = 0;
    Object.entries(freixoNews).forEach((item) => {
        if(item) {
            if(item[1] > counter) {
                journalWithMostNews = item;
                counter = item[1];
            }
        }
    })

    // Getting array of 6 news
    const randData = [];
    for(let i = 0; i < 6; i++) {
        randData.push(freixoList[Math.floor(Math.random()*freixoList.length)]);
    }
    // Setting array of components
    const randNews = [];
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
        <StyledFreixo>
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
                    <img src={freixoImg} alt="" />
                </FloatingImg>
                <DataWrapper>
                    <h2>Total de notícias publicadas sobre o candidato:</h2>
                    <StatisticsWrapper>
                        <p>
                            {freixoJournalList.length ?
                            freixoJournalList.length :
                            ""}
                        </p>
                        <img src={overlay} alt="" />
                    </StatisticsWrapper>
                </DataWrapper>

            </ImagesSection>
            <NewsSection>
                <h1>Notícias aleatórias sobre o Freixo</h1>
                <div>{randNews ? randNews : <Loading src={loadingImg} />}</div>
            </NewsSection>
        </StyledFreixo>
    )

}
 
export default Freixo;