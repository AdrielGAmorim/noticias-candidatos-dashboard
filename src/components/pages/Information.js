import DoughnutChart from '../charts/DoughnutChart'
import LineChart from '../charts/LineChart';
import PolarAreaChart from '../charts/PolarAreaChart';
import { StyledInformation } from '../styled/Information.styled';

const Information = () => {
    return (
        <StyledInformation>
            <section>
                <h2>Notícias por mês</h2>
                <LineChart />
            </section>
            <section>
                <h2>Top 3 autores</h2>
                <PolarAreaChart />
            </section>
            <section>
                <h2>Notícias publicadas por autor</h2>
                <sup>Passe o mouse sobre as seções</sup>
                <DoughnutChart />
                {/* legend display off because takes
                too much of space */}
            </section>
        </StyledInformation>
     );
}
 
export default Information;
