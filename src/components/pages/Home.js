import { StyledHome, Column } from "../styled/Home.styled";
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import HorizontalBarChart from '../charts/HorizontalBarChart';

const Home = () => {
    return ( 
        <StyledHome>
            <Column>
                <section>
                    <h2>Quantidade de notícias por candidato</h2>
                    <BarChart />
                </section>
                <section>
                    <h2>Notícias por candidato por mês</h2>
                <HorizontalBarChart />
                </section>
            </Column>
            <Column>
                <section>
                    <h2>Quantidade de notícias por jornal</h2>
                    <PieChart />
                </section>
            </Column>
        </StyledHome>
     );
}
 
export default Home;
