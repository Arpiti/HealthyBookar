import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AccordianContainer = styled.div`
    padding: 4rem;
`;

export const AccordianTitleAndBackBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
`;

export const AccordianHeader = styled.h1`
    font-size: 2rem;
    padding: 1rem;
`;

export const AccordianSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
`;

export const AccordianBackButton = styled(Link)`
    color: #000;
    font-size: 50px;
    padding: 0rem;
    &:hover {
        color: #01bf71;
        transition: .5s ease-out;
    }

    position: absolute;
    top: 10rem;
    left: 4rem;

    @media screen and (max-width: 960px){
        top: 6rem;
        left: 3rem;
    }

    

;`

export const Container = styled.div`
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
    min-width: 60%;
   
`;

export const Wrap = styled.div`
    background: #1c1c1c;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    border-bottom: 2px solid #fff;
    h1{
        padding: 2rem;
        font-size: 1rem;
    }

    span{
        margin-right: 1.5rem;
    }
`;

export const Dropdown = styled.div`
    padding: 2rem;
    background: #1c1c1c;
    color: #00ffb9;
    max-width: 800px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #01bf71;
    border-top: 1px solid #01bf71;
    box-sizing: content-box;

    p {
        font-size: 1rem;
    }
`;