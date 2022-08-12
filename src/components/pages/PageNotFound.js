import { StyledPageNotFound } from '../styled/PageNotFound.styled'

const PageNotFound = () => {
    return (
        <StyledPageNotFound>
            <img src="./images/error-404.jpg" alt="" />
            <h2>Desculpe companheiro, sua página não foi encontrada.</h2>
            <p>Tenta uma outra por gentileza.</p>
        </StyledPageNotFound>
     );
}
 
export default PageNotFound;
