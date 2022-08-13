import DoughnutChart from '../charts/DoughnutChart'
import LineChart from '../charts/LineChart';
import PolarAreaChart from '../charts/PolarAreaChart';
import { StyledInformation } from '../styled/Information.styled';

const Information = () => {
    return (
        <StyledInformation>
            <section>
                <h2>Quantidade de notícias por mês</h2>
                <LineChart />
            </section>
            <section>
                <h2>Notícias publicadas por autor</h2>
                <DoughnutChart />
            </section>
            <section>
                <h2>Top 3 autores</h2>
                <PolarAreaChart />
            </section>
        </StyledInformation>
     );
}
 
export default Information;
