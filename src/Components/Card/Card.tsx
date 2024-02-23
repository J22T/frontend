import React from 'react';
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) : JSX.Element => {
  return (
    <div className="card">
        <img
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012021/bitcoin.jpg?.kOW8GTaYGXV2d2XO.ExonHlpJqvgQYf&itok=E_OXstG-"
        alt="BTC"
        />
        <div className="details">
            <h2>
              {companyName} ({ticker})
            </h2>
            <p>${price}</p>
        </div>
        <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis consequatur alias mollitia impedit velit dignissimos est optio modi expedita enim, quibusdam temporibus quasi, explicabo illo tempora doloribus, sequi aperiam amet.</p>
     </div>
  );
};

export default Card;