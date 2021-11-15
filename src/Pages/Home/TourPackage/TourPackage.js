import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './TourPackage'

const TourPackage = () => {

  const [packages, setPakages] = useState([])

  useEffect(() => {
    fetch('http://localhost:7000/card')
      .then(res => res.json())
      .then(data => setPakages(data))
  }, [])


  return (
    <>
      {

        (packages.length !== 0) ? <div className="my-5">
          <h1 className="text-danger">World<span>Package Details</span></h1>
          <div className="tour-card">
            <Container>
              <Row xs={1} md={3} className="g-4">
                {
                  packages.map(pack => <Col key={"id"}>
                    <Card style={{ border: ' 3px solid tomato' }}>
                      <Card.Img
                        style={{ height: '220px' }}
                        variant="top"
                        src={pack.img}
                      />
                      <Card.Body className="bg-dark text-light">
                        <Card.Title>{pack.name}</Card.Title>
                        <Card.Text>Population:{pack.population}</Card.Text>
                        <Card.Text>Tour Price:{pack.price}</Card.Text>
                        <Card.Text>Time:{pack.time}</Card.Text>
                        <Card.Text>Country:{pack.country}</Card.Text>
                        <Link to={`/selected/${pack._id}`}><button className="btn mx-1 bg-warning text-white ">
                          Book Now
                        </button></Link>
                      </Card.Body>

                    </Card>
                  </Col>)
                }
              </Row>
            </Container>
          </div>
        </div> : <h1>Loading...</h1>
      }
      <img src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?size=338&ext=jpg" alt="" />
      <h2 className="text-danger">Documentation</h2>
      <p className="bg-dark text-light">Save on Travel with worldtour.com
        <br />
        Trip.com is a rapidly-growing global online travel agency, Trip.com is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, Trip.com is here to help you travel the world with cheap flights, discount hotels, and train tickets. Looking to find great travel deals or enjoy the biggest savings on your next trip? Trip.com has you covered. With our easy-to-use website and app, along with 24-hour customer service, booking your next trip couldn't be simpler. With Trip.com, quality travel services in over a dozen languages including English, Mandarin, Cantonese, Japanese, Korean, German, French, and Spanish are just a call—or click—away. <br />
        Easily Customize Your Trip with the Best Hotel and Flight Deals
        It's easy to customize your travel experience with our robust flight and hotel search filter options and Trip.com travel tools like flight fare alerts, deal-finder calendar, and early bird deals. Trip.com's secure payment system takes the stress out of travel by providing easy payment options, including credit and debit cards, and UnionPay. <br />

        Featured Hotel Destinations <br />
        Hotels in Shanghai | Hotels in Beijing | Hotels in Guangzhou | Hotels in Shenzhen | Hotels in Hangzhou | Hotels in Xiamen | Hotels in Chengdu | Hotels in Hong Kong | Hotels in Macau | Hotels in Tokyo | Hotels in Osaka | Hotels in Kyoto | Hotels in Fukuoka | Hotels in Sapporo | Hotels in Seoul | Hotels in Taipei | Hotels in Singapore | Hotels in Kuala Lumpur | Hotels in Bangkok | Hotels in Da Nang
        Featured Flight Destinations <br />
        Flights to Cebu | Flights to Jakarta | Flights to Hanoi | Flights to Chengdu | Flights to Phuket | Flights to Macau | Flights to Ho Chi Minh | Flights to Osaka | Flights to Shenzhen | Flights to Shanghai | Flights to Beijing | Flights to Hong Kong | Flights to Seoul | Flights to Bangkok | Flights to Taipei | Flights to Singapore | Flights to Tokyo | Flights to Manila | Flights to Guangzhou | Flights to Kuala Lumpur <br />
        Featured Tours & Tickets
        Shanghai Disneyland Ticket | Forbidden City Ticket | Terracotta Warriors Ticket | Sichuan Opera Show Ticket | Universal Orlando Ticket | Legoland Florida Ticket | Antelope Canyon Ticket | Empire State Building Observation Deck Ticket | Statue of Liberty Cruise | Kualoa Ranch Day Tour <br />

        Trip.com Links <br />
        Trip.com App Android | Trip.com App iOS | Trip.com on Twitter | Trip.com on Facebook | Trip.com reviews | Hotels Near Me | Covid-19 Travel Restrictions| 2021 USA Federal Holidays| Trip.com promo code
        Links
        frontier airlines
        Featured Travel Guide
        VTL Flights to Singapore | 2021 Chinese Public Holiday Calendar | Top 10 to Know before Booking the Cosmopolitan of Las Vegas | Trip.com Hotel coupons and discounts 2021 | ⚡ 50% off Trip.com Flight Deals 2021 | Things to do & Best All-Inclusive Resorts on Isla Mujeres | 2021 Trip.com promo code, discount code, coupon | 2021 USA Federal Holidays | List of United States Federal Holidays 2022 | How to Explore World's Largest Universal Studios Beijing | Bank Holiday 2021 in the United Kingdom | All You Need to Know about NHS COVID Passport</p>
    </>

  );
};

export default TourPackage;
