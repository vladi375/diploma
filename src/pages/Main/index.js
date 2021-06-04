import React from 'react';
import { useSelector } from 'react-redux';

import './style.css';

export function MainPage() {
  const user = useSelector((state) => state.signIn.user);
  return (
    <div className='page'>
      <div className='page-main'>
        <div>
          {
            <h1 className='welcome-text'>
              Welcome to the React-Store
              {user ? `, ${user.name.first} ${user.name.last}!` : '!'}
            </h1>
          }
          <h3>WHAT WE DO?</h3>
          <p>
            React-Store gives you a chance to quickly and easily find the phone
            you want and have it delivered to your home in no time, regardless
            of your location, as long as it is in one of the countries of the
            EU.
          </p>
          <h3>WHY DO CUSTOMERS LOVE US?</h3>
          <p>
            We have been in the business for quite a while now, and it that time
            we have not only managed to make close relationships with numerous
            suppliers all over the world, but also to recognize what people
            need. This means that we are always able to offer all the latest
            phones, great prices, reliable service, fast delivery and premium
            customer support.
          </p>
          <h2>The Story</h2>
          <h3>BEGINNING</h3>
          <p>
            React-Store website was launched in 2011, but its story actually
            began some 8 years before that when a group of college friends
            decided to go into business together. We started selling phones in
            shops, but our combined ambition, drive and abilities soon made us
            look for new challenges and new markets. Starting an online shop
            provided for both and allowed us to develop a strong international
            presence in a number of EU countries.{' '}
          </p>
          <h3>TODAY</h3>
          <p>
            Collective experience of our team members and the years we have
            spent in the business allowed us to develop a vast network of
            suppliers, ensuring that our customers will always find what they
            are looking for. This also means that we are able to offer great
            prices, which are constantly being updated and follow the shifts in
            the market. Our affordability, fast and reliable delivery, and the
            fact that you will always be able to find the phone that you are
            looking for in our offer, have made us stand out in the market, but
            they are simply symptoms of our dedication to what we are doing and
            our desire to constantly keep improving. We know that in order to do
            that, we need to keep in close touch with our customers and listen
            to their suggestions and critiques. This is why our customer
            service, which is always there to answer any question that you may
            have, is just as willing to listen as it is to inform.
          </p>
        </div>
      </div>
    </div>
  );
}
