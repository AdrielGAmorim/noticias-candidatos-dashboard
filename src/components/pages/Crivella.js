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


    // Creates an array with only Crivella's news
    let crivellaList = [];
    chart.forEach( async (item) => {
        if(item.candidato === "Crivella") {
            crivellaList.push(item);
        }
    })

    // Quantity of news per journal
    let crivellaJournalList = [];
    // Separates journals into an array
    crivellaList.forEach( async (item) => {
        if(item.source) crivellaJournalList.push(item.source);
    })

    // Getting the journal with the most news.
    // Kinda bruteforce I know, but I could'n find a better way
    // to do it other than just putting the number there.
    var getJournalWithMostNews = () => {
        var globo_g1 = 0, extra = 0, r7 = 0, dci = 0, odia = 0,
            jb = 0, epoca = 0, bing = 0, otempo = 0, folha = 0,
            zerohora = 0, elpais = 0,  hora_sc = 0, exame = 0,
            uol = 0, em = 0, senado_federal = 0,
            planalto_presidencia = 0, gesporte = 0;

        crivellaJournalList.forEach( async (e) => {
            if(e === "globo_g1") globo_g1 += 1;
            if(e === "extra") extra += 1;
            if(e === "r7") r7 += 1;
            if(e === "dci") dci += 1;
            if(e === "odia") odia += 1;
            if(e === "jb") jb += 1;
            if(e === "epoca") epoca += 1;
            if(e === "bing") bing += 1;
            if(e === "otempo") otempo += 1;
            if(e === "folha") folha += 1;
            if(e === "zerohora") zerohora += 1;
            if(e === "elpais") elpais += 1;
            if(e === "hora_sc") hora_sc += 1;
            if(e === "exame") exame += 1;
            if(e === "uol") uol += 1;
            if(e === "em") em += 1;
            if(e === "senado_federal") senado_federal += 1;
            if(e === "planalto_presidencia") planalto_presidencia += 1;
            if(e === "gesporte") gesporte += 1;
        });

        var journalWithMostNews = {
            "": 0
        };
        for(let i = 0; i < 19; i++) {
            if(Object.values(journalWithMostNews) < globo_g1) journalWithMostNews = {"globo_g1": globo_g1}
            if(Object.values(journalWithMostNews) < extra) journalWithMostNews = {"extra": extra}
            if(Object.values(journalWithMostNews) < r7) journalWithMostNews = {"r7": r7}
            if(Object.values(journalWithMostNews) < dci) journalWithMostNews = {"dci": dci}
            if(Object.values(journalWithMostNews) < odia) journalWithMostNews = {"odia": odia}
            if(Object.values(journalWithMostNews) < jb) journalWithMostNews = {"jb": jb}
            if(Object.values(journalWithMostNews) < epoca) journalWithMostNews = {"epoca": epoca}
            if(Object.values(journalWithMostNews) < bing) journalWithMostNews = {"bing": bing}
            if(Object.values(journalWithMostNews) < otempo) journalWithMostNews = {"otempo": otempo}
            if(Object.values(journalWithMostNews) < folha) journalWithMostNews = {"folha": folha}
            if(Object.values(journalWithMostNews) < zerohora) journalWithMostNews = {"zerohora": zerohora}
            if(Object.values(journalWithMostNews) < elpais) journalWithMostNews = {"elpais": elpais}
            if(Object.values(journalWithMostNews) < hora_sc) journalWithMostNews = {"hora_sc": hora_sc}
            if(Object.values(journalWithMostNews) < exame) journalWithMostNews = {"exame": exame}
            if(Object.values(journalWithMostNews) < uol) journalWithMostNews = {"uol": uol}
            if(Object.values(journalWithMostNews) < em) journalWithMostNews = {"em": em}
            if(Object.values(journalWithMostNews) < senado_federal) journalWithMostNews = {"senado_federal": senado_federal}
            if(Object.values(journalWithMostNews) < planalto_presidencia) journalWithMostNews = {"planalto_presidencia": planalto_presidencia}
            if(Object.values(journalWithMostNews) < gesporte) journalWithMostNews = {"gesporte": gesporte}
        }
        
        return journalWithMostNews;
    }

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
                            {Object.keys(getJournalWithMostNews())[0] ?
                            Object.keys(getJournalWithMostNews())[0] :
                            ""}<br/>
                            {Object.values(getJournalWithMostNews())[0] ?
                            Object.values(getJournalWithMostNews())[0] :
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