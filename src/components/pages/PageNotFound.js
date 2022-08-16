import { StyledPageNotFound } from '../styled/PageNotFound.styled'
import error404 from '../images/error-404.jpg';

const PageNotFound = () => {
    return (
        <StyledPageNotFound>
            <img src={error404} alt="" />
            <h2>Desculpe companheiro, sua página não foi encontrada.</h2>
            <p>Tenta uma outra por gentileza.</p>
        </StyledPageNotFound>
     );
}
 
export default PageNotFound;
