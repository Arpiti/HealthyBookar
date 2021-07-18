import styled from 'styled-components';
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71':'#010606')};
    white-space: nowrap;
    padding: ${({big}) => ( big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => ( dark ? '#010606':'#fff')};
    font-size: ${({fontBig}) => ( fontBig ? '20px' : '16px' )};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:  ${({primary}) => (primary ? '#fff' : '#01bf71')};
    }
`

export const ButtonNavigate = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01bf71':'#010606')};
    white-space: nowrap;
    padding: ${({big}) => ( big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => ( dark ? '#010606':'#fff')};
    font-size: ${({fontBig}) => ( fontBig ? '20px' : '16px' )};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background:  ${({primary}) => (primary ? '#fff' : '#01bf71')};
    }
`

export const ButtonPress = styled.button`
    border-radius: 50px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    padding: ${({big}) => ( big ? '14px 48px' : '12px 30px')};
    
    
    text-align: center;

    background: ${({primary}) => (primary ? '#01bf71':'#010606')};
    white-space: nowrap;
    color: ${({dark}) => ( dark ? '#010606':'#fff')};
    font-size: ${({fontBig}) => ( fontBig ? '20px' : '16px' )};
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background:  ${({primary}) => (primary ? '#fff' : '#01bf71')};
    }

    &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
}
`