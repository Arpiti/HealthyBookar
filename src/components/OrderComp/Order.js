import React, { useContext } from 'react';
import moment from 'moment';
import { OrderExpiredHeading, OrderActiveHeading, OrderWrap, OrderInfo, PauseButtonContainer, OrderSmallInfo, OrderDate, OrderInfoDetail } from './OrderElements';
import { ButtonPress } from '../ButtonElements';
import { db } from '../../firebase/config';

const BUFFER_DAYS = 10;

const getExpirePlanDate = (startDate, subscriptionPlanPeriod, bufferDays) => {
    return moment
        .unix(startDate)
        .add(subscriptionPlanPeriod, 'months')
        .add(bufferDays, 'days')
        .format("MMMM Do YYYY");
}

const isExpired = () => {
    let currentDate = moment().format("MMMM Do YYYY");
    return (moment(getExpirePlanDate).isBefore(currentDate));
}


const Order = ({ order, index, user }) => {

    const [pauseSubscriptionValue, setPauseSubscriptionValue] = React.useState(order?.data.basket.planDurationNewBornPause);

     console.log('isExpired () >', isExpired());

    const handlePauseButtonClick = async (e) => {
        // e.preventDefault();

       

        const dbUpdate = await (

            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(order.id)
                .update({
                    "basket.paused": !pauseSubscriptionValue
                }))
            .then(() => console.log('dbUpdate for pause Value is SUCCESS > '))
            .catch(error => console.error(error));

        setPauseSubscriptionValue(!pauseSubscriptionValue);

    }



    return (
        <> 
            {order && <OrderWrap index={index}>
                {isExpired() ? (<OrderExpiredHeading>Expired Order</OrderExpiredHeading>) : (<OrderActiveHeading>Active Order</OrderActiveHeading>)}
                <OrderSmallInfo>{order.id}</OrderSmallInfo>
                <OrderDate>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")} </OrderDate>
                <OrderInfoDetail>
                    <p><OrderInfo>Subject</OrderInfo>:<strong> {order.data.basket.subject}</strong></p>
                    <p><OrderInfo>Nutrition type</OrderInfo>:<strong> {order.data.basket.deliveryDone ? 'Post-Delivery' : 'Pre-Delivery'}</strong></p>
                    <p><OrderInfo>Breakfast included</OrderInfo>:<strong> {order.data.basket.breakFastRequired ? 'Yes' : 'No'}</strong></p>
                    <p><OrderInfo>Lunch included</OrderInfo>:<strong> {order.data.basket.lunchRequired ? 'Yes' : 'No'}</strong></p>
                    <p><OrderInfo>Dinner included</OrderInfo>:<strong> {order.data.basket.dinnerRequired ? 'Yes' : 'No'}</strong></p>
                    <p><OrderInfo>Food Preference</OrderInfo>:<strong> {order.data.basket.eatPreference}</strong></p>

                    {order.data.basket.planDurationNewBorn && <p><OrderInfo>Plan Duration (Baby)</OrderInfo>:<strong> {order.data.basket.planDurationNewBorn} Months</strong></p>}

                    {order.data.basket.planDurationMother &&
                        <p><OrderInfo>Plan Duration (Mother)</OrderInfo>:<strong> {order.data.basket.planDurationMother} Months</strong></p>}

                    <p><OrderInfo>Plan type</OrderInfo>:<strong> {order.data.basket.type}</strong></p>
                    <p><OrderInfo>Amount paid</OrderInfo>:<strong> {order.data.basket.price}</strong></p>

                    <p><OrderInfo>Current status</OrderInfo>:{isExpired() ? 
                    ( <strong style={{ color: 'red' }}> Expired</strong>)
                    :
                    (
                        <strong style={{ color: '#01bf71' }}>{(pauseSubscriptionValue ? ' Paused' : ' Active')}</strong>
                    )
                    }
                    
                    </p>

                    {order.data.basket.planDurationMother &&
                        <p><OrderInfo>{(order.data.basket.subject === "Both") ? 'Plan for Mother Expires on' : 'Plan expires on'}</OrderInfo>:<strong> {getExpirePlanDate(order.data.created, order.data.basket.planDurationMother, BUFFER_DAYS)}</strong></p>}

                    {order.data.basket.planDurationNewBorn &&
                        <p><OrderInfo>{(order.data.basket.subject === "Both") ? 'Plan for Baby Expires on' : 'Plan expires on'}</OrderInfo>:<strong> {getExpirePlanDate(order.data.created, order.data.basket.planDurationNewBorn, BUFFER_DAYS)}</strong></p>}


                    <PauseButtonContainer>
                        <ButtonPress disabled={isExpired()} onClick={handlePauseButtonClick}> {(pauseSubscriptionValue ? 'Resume Subscription' : 'Pause Subscription')}</ButtonPress>
                    </PauseButtonContainer>
                </OrderInfoDetail>

            </OrderWrap>

            }
        </>
    )
}

export default Order;

    // breakFastRequired: true

                    // deliveryDone: false

                    // dinnerRequired: true

                    // eatPreference: "Vegetarian"

                    // id: "6MonthsPreDeliveryMother"

                    // lunchRequired: true

                    // planDurationMother: 6

                    // planDurationNewBorn: null

                    // price: 12000

                    // subject: "Mother"

                    // type: "recommended"