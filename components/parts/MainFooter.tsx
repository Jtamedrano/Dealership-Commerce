import React from "react";
import { Container } from "react-bootstrap";
import NavFooter from "./NavFooter";

interface FooterProps {
  dealer_name?: string;
  group_name?: string;
}

const MainFooter: React.FC<FooterProps> = ({
  dealer_name = "Auto Dealer",
  group_name = " Auto Dealer Group",
}) => {
  return (
    <Container fluid="lg">
      <p>
        MSRP is the Manufacturer's Suggested Retail Price, which is not
        necessarily the sale price and is not the advertised price. For specific
        pricing information, please contact {dealer_name}.
      </p>
      <p>
        The Advertised Price for any vehicle does not include dealer installed
        accessories. These accessories can be purchased for an additional cost.
      </p>
      <p>
        All vehicles subject to prior sale. All prices plus government fees and
        taxes, any finance charges, any dealer document processing charges
        ($85), any electronic filing charge, and any emission testing charge.
        Offers and prices not available to other dealers, wholesalers, or
        brokers. Special financing in lieu of any rebates. This price may not be
        combined with any other offer.
      </p>
      <p>
        Once a Sold Order is placed and the Partial Payment is collected there
        are no refunds available for payments made. If you do not want your Sold
        Order Unit your Partial Payment will be held for assisting in, but not
        limited to, handling fees and liabilities for placing a false order. As
        it stands all transactions are final.
      </p>
      <p>
        Mileage based on 2020/2021 EPA mileage ratings. Use for comparison
        purposes only. Your mileage (MPGe/MPG) and range will vary depending on
        driving conditions, how you drive and maintain your vehicle,
        battery-pack age/condition, and other factors. For additional
        information about EPA ratings visit
        https://www.fueleconomy.gov/feg/label/learn-more-gasoline-label.shtml,
        https://www.fueleconomy.gov/feg/label/learn-more-electric-label.shtml,
        and https://www.fueleconomy.gov/feg/label/learn-more-PHEV-label.shtml.
      </p>
      <p>
        While every reasonable effort is made to ensure the accuracy of this
        information, we are not responsible for any errors or omissions
        contained on these pages. Please verify all pricing, vehicle equipment,
        and any additional information in question with {dealer_name}
      </p>
      <p>
        This website and its content is copyright of {group_name} - ©2011 - 2021{" "}
        {group_name}. All rights reserved.
      </p>
      <NavFooter />
    </Container>
  );
};

export default MainFooter;
