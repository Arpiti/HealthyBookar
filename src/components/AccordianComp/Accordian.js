import React, { useState } from 'react';
import { Data } from './Data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { AccordianContainer, AccordianSection, Container, Wrap, Dropdown, AccordianHeader, AccordianBackButton } from './AccordianElements';
import { HiArrowLeft as BackArrowIcon } from 'react-icons/hi';

const Accordian = () => {

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    }
    return (
        <>
            <AccordianContainer>
                    
                       <AccordianBackButton to="/">
                          <BackArrowIcon />
                        </AccordianBackButton>
                    <AccordianHeader> Frequently Asked Questions </AccordianHeader>

                <IconContext.Provider value={{ color: '#01bf71', size: '25px' }}>
                    <AccordianSection>
                        <Container>
                            {Data.map((item, index) => {
                                return (
                                    <>
                                        <Wrap onClick={() => toggle(index)} ke={index}>
                                            <h1>{item.question}</h1>
                                            <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                        </Wrap>
                                        {clicked === index ? (
                                            <Dropdown>
                                                <p>{item.answer}</p>
                                            </Dropdown>
                                        ) : null}
                                    </>
                                );
                            })}
                        </Container>
                    </AccordianSection>
                </IconContext.Provider>
            </AccordianContainer>
        </>

    )
}

export default Accordian
