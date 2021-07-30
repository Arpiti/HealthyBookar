import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Container = styled.div`
    padding: 1rem;
    margin-top: 1rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
    @media screen and (max-width: 960px) {
        padding: 32px 32px;
        flex-direction: column;
        align-items: center;
    }

`;

export const Heading = styled(motion.h1)`
        margin-top: 1.5rem;
        padding: 1rem;
        color: #01bf71;
        font-weight: 600;
        text-align: center;
`;

export const ImgWrap = styled.div`
    max-width: 460px;
    padding: 3rem;
    height: 100%;
`;

export const Img = styled(motion.img)`
    width: 100%;
    margin: 0 0 10px 20px;
    padding-right: 0;
`;
