import React, { useState, useEffect, useContext } from 'react'
import { useStateValue, StateContext } from '../../context/StateContext';
import { db } from '../../firebase/config';
import { OrderHistoryContainer, Container, ImgWrap, Img, PageH1, OrderExpiredHeading, OrderSignInContainer } from './OrderElements';
import Order from './Order';
import ORDER_CONFIRMED_IMAGE_URL from '../../images/order_confirmed.svg';
import { ButtonNavigate } from '../ButtonElements';
import PleaseSignIn from '../PleaseSignInComp/PleaseSignIn';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [{ basket, user }] = useContext(StateContext);

    useEffect(() => {

        let unsub = null;
        if (user) {
            unsub = db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                    )))
        }
        else {
            setOrders([]);
        }
        return () => {
            if (user)
                unsub();
        };
    }, [user]);

    return (
        <>
           {user ?
           <>
            <PageH1>Your Orders</PageH1>
            <Container>

                <ImgWrap>
                    <Img src={ORDER_CONFIRMED_IMAGE_URL} alt="Order_Confirmed_Image" />
                </ImgWrap>
                    <OrderHistoryContainer>
                        {orders?.map((order, index) => <Order order={order} index={index} user={user} />)}
                    </OrderHistoryContainer> 

            </Container>
            </>
            :
            <PleaseSignIn />}
        </>
    )
}

export default Orders
