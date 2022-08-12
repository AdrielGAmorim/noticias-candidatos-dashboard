import DoughnutChart from '../charts/DoughnutChart'
import LineChart from '../charts/LineChart';
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
        </StyledInformation>
     );
}
 
export default Information;
