import styled from "styled-components";


export const PageWrapper = styled.div`
    background: #fff;
    height: 100%;
`;

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    @media screen and (max-width: 1050px) {
        flex-direction: column;
    }
`;

export const PageH1 = styled.h1`
    font-size: 2rem;
    text-align: center;
    padding: 1.5rem;
    margin-top: 2rem;

    &:hover {
      color: #01bf71;
     transition: .5s ease-out;
    }
`;

export const PageH2 = styled.h2`
    text-align: center;
    padding: 1rem;

    &:hover {
      color: #01bf71;
     transition: .5s ease-out;
    }
`;

export const PageH4 = styled.h4`
    text-align: center;
    padding-top: 3rem;
`;

export const CartContainer = styled.div`
    margin-left: 2rem;
    background: #fff;
    padding: 3rem;
    box-shadow: 3px 1px 3px 3px lightgrey;
    border-radius: 5px;
`;

export const CartCouponContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CartText = styled.p`
    padding: 1rem;
`;

export const CartAmount = styled.h4`
    margin-bottom: 2rem;
`;

export const CartBtn = styled.button`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 30px' : '6px 15px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '18px' : '14px')};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-left: 1rem;
    &:hover {
        transition: all 0.2s ease-in-out;
        background:  ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    }
`;

export const FormContainer = styled.div`
`;

export const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    height: 100%;
`;



export const FormLabel = styled.label`
  padding: 1rem;  
  cursor: pointer;
`;



export const FormInputRadio = styled.input`
    display: none;
`;

export const FormInput = styled.input`
`;

export const FormRadioContainer = styled.div`
    padding: 1rem;
`;

export const FormDropdownContainer = styled.div`
    padding: 1rem;
    display: flex;
    width: 400px;
`;

export const FormDropdown = styled.div`
    text-align: start;
    font-size: 1rem;
    background: #2f3640;
    color: #fff;
    width: 100%;
    transition: all 0.4s;
    border-radius: 8px;
    overflow: hidden;

    &.active {
        max-height: 2px;
        opacity: 1;
        overflow-y: scroll;
    }
`;

export const FormDropdownSelectedItem = styled.div`
    padding: 12px 24px;
    cursor: pointer;    
`;

export const FormDropdownItem = styled.div`
    &:hover {
        background: #414b57;
    }
`;

export const FormBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    padding: 1rem;
`;

export const FormBtn = styled.button`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:  ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    }
`;

export const ImgWrap = styled.div`
    margin-top: 5rem;
    max-width: 600px;
    min-width: 420px;
    padding: 1rem;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 30px 10px 0;
    padding-right: 0;
`;

export const ImgAndTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;