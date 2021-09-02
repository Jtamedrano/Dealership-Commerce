import type { NextPage } from "next";
import Head from "next/head";
import { Jumbotron, SquareGrid } from "../components/parts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auto Dealer</title>
      </Head>
      <h1>Auto Dealer</h1>
      <div className="Home__jumbotron">
        <Jumbotron />
      </div>
      <div className="Home__square_grid">
        <SquareGrid />
      </div>
      <div className="Home__type type">
        <div className="type__wrapper">
          <h2>SEARCH BY TYPE</h2>
          <ul>
            <li>Convertible</li>
            <li>Coupe</li>
            <li>Hatchback</li>
            <li>SUV</li>
            <li>Sedan</li>
            <li>Truck</li>
            <li>Van</li>
          </ul>
        </div>
      </div>
      <div className="Home__services services">
        <div className="services__box image">
          <div className="services__image-wrapper">
            <img
              src="/assets/car-buying-1.jpg"
              alt="Red car door being opened by someone"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="services__box">
          <h3>Shop By Price Range</h3>
          <p>Find the perfect vehicle in your price range</p>
        </div>
        <div className="services__box">
          <h3>Finance Options</h3>
          <p>Large range of finance options are available.</p>
        </div>
        <div className="services__box image">
          <div className="services__image-wrapper">
            <img
              src="/assets/car-buying-2.jpg"
              alt="Negotiating Deal"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="services__box image">
          <div className="services__image-wrapper">
            <img
              src="/assets/car-service.jpg"
              alt="Someone working on a tire"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="services__box">
          <h3>Vehicle Service</h3>
          <p>
            There is no need to overpay for professional auto repair. Top
            technology, skilled technicians, and fair pricing have made Auto
            Dealer a #1 ranking auto service center.
          </p>
        </div>
        <div className="services__box contact">
          <h3>Get In Touch</h3>
          <p>
            1600 Amphitheatre Pkwy
            <br />
            Mountain View, CA 94043
          </p>
          <p>
            Contact Our Sales Department
            <br />
            <span className="phone">1-855-836-1987</span>
          </p>
          <div className="contact__hours">
            <div className="contact__hours__item">
              <p>Monday</p>
              <p>8:30 am - 9:00 pm</p>
            </div>
            <div className="contact__hours__item">
              <p>Tuesday</p>
              <p>8:30 am - 9:00 pm</p>
            </div>
            <div className="contact__hours__item">
              <p>Wednesday</p>
              <p>8:30 am - 9:00 pm</p>
            </div>
            <div className="contact__hours__item">
              <p>Thursday</p>
              <p>8:30 am - 9:00 pm</p>
            </div>
            <div className="contact__hours__item">
              <p>Friday</p>
              <p>8:30 am - 9:00 pm</p>
            </div>
            <div className="contact__hours__item">
              <p>Saturday</p>
              <p>8:30 am - 9:00 pm</p>
            </div>
            <div className="contact__hours__item">
              <p>Sunday</p>
              <p>8:30 am - 9:00 pm</p>
            </div>
          </div>
          <p>See All Department Hours</p>
        </div>
        <div className="services__box image">
          <div className="services__image-wrapper">
            <img
              src="/assets/google-map-ph.jpg"
              alt="Phone with google maps open"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div className="Home__SEO">
        <h2>
          YOUR LOCAL AUTO DEALER FOR ALL YOUR SALES, SERVICE, AND PARTS NEEDS
        </h2>
        <h3>New Cars, Trucks and SUVs near Mountain View</h3>
        <p>
          Our auto dealer in Mountain View proudly serves everyone! Auto Dealer
          is happy to bring you a wide selection of new and used cars, trucks
          and SUVs. Looking for a specific vehicle like a used Chevrolet
          Silverado 1500 in Mountain View? Feel free to browse our online
          inventory or stop by and look at all we have to offer! With affordable
          prices, competitive financing options and more, you will be glad you
          chose us for all your pre-owned needs!
        </p>

        <h3>Which Vehicle is Right for You?</h3>
        <p>
          Our staff of friendly and knowledgeable salespeople can answer the
          questions you have about our extensive 2020 and 2021 New inventory. Do
          you need the power to tow your trailer or boat? Do you need financing?
          We can sit down with you and find the right payment, or lease that
          works with your budget.
        </p>

        <h3>Your Riverside Chevrolet Dealer for Parts and Service</h3>
        <p>
          When your engine light goes off, it's reassuring to know that you can
          trust our ASE certified technicians to find the problem and fix it.
          Our service center offers convenient hours and online scheduling so
          your routine maintenance fits in with your life. As a GM Certified
          Service Center your vehicle's warranty will be maintained with only
          genuine GM parts. With years of experience helping customers with all
          their automotive needs, the Moss Bros. Chevrolet Dealership has
          everything you need for maintenance and repair. You can order parts or
          schedule service appointments online or speak to our friendly staff
          about any of your questions and concerns. We take pride in being a top
          Chevrolet dealer in Moreno Valley Serving Riverside, San Bernardino
          and Fontana and that includes offering awesome service discounts and
          staffing fully trained and certified technicians! Call our service
          department today at (855) 999-2990 or 855-399-1924 to speak to a sales
          representative!
        </p>
      </div>
    </>
  );
};

export default Home;
