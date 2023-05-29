import * as Styled from '../../components/not-found/not-found.style';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <Styled.NotFoundWrapper>
            <Styled.NotFoundTitle>404</Styled.NotFoundTitle>
            <Styled.NotFoundSubTitle>
                Страница не найдена
            </Styled.NotFoundSubTitle>
            <Styled.NotFoundText>
                Возможно, она была удалена или перенесена на другой адрес
            </Styled.NotFoundText>
            <NavLink to="/">
                <Styled.NotFoundButton>
                    Вернуться на главную
                </Styled.NotFoundButton>
            </NavLink>
        </Styled.NotFoundWrapper>
    );
};

export default NotFound;
