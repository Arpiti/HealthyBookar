import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AccordianContainer = styled.div`
    background-image: linear-gradient(to top, #1c1c1c 0%, #fff 100%);
    padding: 4rem;
`;

export const AccordianHeader = styled.h1`
    font-size: 3rem;
    text-align: center;
    padding-bottom: 3rem;

     &:hover {
        color: #01bf71;
        transition: .5s ease-out;
    }
    
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
    font-size: 55px;
    text-align: center;

    &:hover {
        color: #01bf71;
        transition: .5s ease-out;
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