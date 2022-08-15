import { StyledHome, Column } from "../styled/Home.styled";
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import HorizontalBarChart from '../charts/HorizontalBarChart';

const Home = () => {
    return ( 
        <StyledHome>
            <Column>
                <section data-testid="home__bar--section">
                    <h2 data-testid="home__bar--h2">

                        Notícias por candidato

                    </h2>
                    <BarChart />
                </section>
                <section data-testid="home__horizontal--bar--section">
                    <h2 data-testid="home__horizontal--bar--h2">

                        Notícias por candidato por mês

                    </h2>
                    <HorizontalBarChart />
                </section>
            </Column>
            <Column>
                <section data-testid="home__pie--section">
                    <h2 data-testid="home__pie--h2">

                        Notícias por jornal
                        
                    </h2>
                    <PieChart />
                </section>
            </Column>
        </StyledHome>
     );
}
 
export default Home;
