import { React } from 'react';
import Product from '../components/Product'
import '../Home.css';
import Button from '@material-ui/core/Button';

const url_backgrndHomeImage = "../../public/assets/pregnantlady.jpg";
const url_homePageImage = "./assets/5276.jpg";
const url_6MonthImage = "./assets/6_month_image.png";
const url_3monthImage = "./assets/3_month_image.png"
const url_babyFoodImage = "./assets/baby_food.png"

const Home = () => {

    let sectionId2Heading = document.querySelector("#home_bannerTitleId1");
    if (sectionId2Heading) {
        window.addEventListener('scroll', function () {
            let value = window.scrollY;
            sectionId2Heading.style.marginRight = value * 2 + 'px';
        })
    }

    let sectionId4Heading = document.querySelector("#home_bannerTitleId2");
    if (sectionId4Heading) {
        window.addEventListener('scroll', function () {
            let value = window.scrollY;
            sectionId4Heading.style.marginLeft = value * 2 + 'px';
        })
    }

    let sectionId6Heading = document.querySelector("#home_bannerTitleId3");
    if (sectionId6Heading) {
        window.addEventListener('scroll', function () {
            let value = window.scrollY;
            sectionId6Heading.style.marginRight = value * 2 + 'px';
        })
    }

    let sectionId8Heading = document.querySelector("#home_bannerTitleId4");
    if (sectionId8Heading) {
        window.addEventListener('scroll', function () {
            let value = window.scrollY;
            sectionId8Heading.style.marginLeft = value * 2 + 'px';
        })
    }


    return (
        <div className="home">
            <div className="home__container">
                <section id="home__sectionId1">
                    <div className="home__homePageText">
                        <h1> Why should you consider us?</h1>
                        <p>We take tender care of you and your baba at the most tender times. Book you nutritious food now.</p>
                        <Button id="home__homePageText_orderButton" variant="contained" color="primary">
                            Subscribe now
                        </Button>
                    </div>
                    <img id="home__homePageImage" src={url_homePageImage} alt="HomePageImage" />
                </section>
                <section id="home__sectionId2">
                    <h1 id="home_bannerTitleId1" className="home__horizontalSwipeCaptionRTL">CHOOSE YOUR PLAN</h1>
                </section>
                <section id="home__sectionId3">
                    <img id="home__sectionId3Image" src={url_6MonthImage} alt="HomePageImage" />
                    <div className="home__homePageText">
                        <h1 id="home__homePageText_heading"> 6 months Combo package</h1>
                        <p id="home__homePageText_details">We take tender care of you and your baba at the most tender times. Book you nutritious food now.</p>
                        <Button id="home__homePageText_orderButton" variant="contained" color="primary">
                            Subscribe now
                        </Button>
                    </div>
                </section>
                <section id="home__sectionId4">
                    <h1 id="home_bannerTitleId2" className="home__horizontalSwipeCaptionLTR">ORGANIC FOOD</h1>
                </section>
                <section id="home__sectionId5">
                    <div className="home__homePageText">
                        <h1 id="home__homePageText_heading"> 3 months diet plan and food package</h1>
                        <p id="home__homePageText_details">We take tender care of you and your baba at the most tender times. Book you nutritious food now.</p>
                        <Button id="home__homePageText_orderButton" variant="contained" color="primary">
                            Subscribe now
                        </Button>
                    </div>
                    <img id="home__sectionId5Image" src={url_3monthImage} alt="HomePageImage" />
                </section>
                <section id="home__sectionId6">
                    <h1 id="home_bannerTitleId3" className="home__horizontalSwipeCaptionRTL">ON TIME DELIVERY</h1>
                </section>
                <section id="home__sectionId7">
                    <img id="home__sectionId7Image" src={url_babyFoodImage} alt="HomePageImage" />
                    <div className="home__homePageText">
                        <h1 id="home__homePageText_heading"> Baby food package</h1>
                        <p id="home__homePageText_details">We take tender care of you and your baba at the most tender times. Book you nutritious food now. Book your plan now.</p>
                        <div className="home__buttonContainer">
                            <Button id="home__homePageText_orderButton" variant="contained" color="primary">
                                30 days
                            </Button>
                            <Button id="home__homePageText_orderButton" variant="contained" color="primary">
                                60 days
                            </Button>
                            <Button id="home__homePageText_orderButton" variant="contained" color="primary">
                                90 days
                            </Button>
                        </div>
                    </div>
                </section>
                <section id="home__sectionId8">
                    <h1 id="home_bannerTitleId4" className="home__horizontalSwipeCaptionLTR">24 x 7 SERVICE</h1>
                </section>
                <section id="home__sectionId9">
                    <h1 id="home__homePageText_heading">Contact Us</h1>
                    <p id="home__homePageText_details">Follow us on our social media accounts to get updated details and offers.</p>
                </section>

            </div>
        </div>
    )
}

export default Home;