import React from 'react';
import Card from '../Card/Card';
import { JsxElement } from 'typescript';

interface Props {};

const CardList : React.FC<Props>  = (props: Props): JSX.Element => {
  return (
    <div>
      <Card companyName="BTC" ticker="BTC" price={50000} />
      <Card companyName="Microsoft" ticker="MSFT" price={300} />
      <Card companyName="Tesla" ticker="TSLA" price={400} />
    </div>
  );
};

export default CardList;