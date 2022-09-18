import React from "react";

function Pricebox({ priceboxItem }) {
  const { icon, title, content, price, badge, best } = priceboxItem;
  return (
    <div
      className={
        best
          ? "price-item bg-white rounded shadow-dark text-center best"
          : "price-item bg-white rounded shadow-dark text-center"
      }
    >
      {badge && <span className="badge">{badge}</span>}
      <img src={icon} alt="Regular" />
      <h2 className="plan">{title}</h2>
      {content.map((singleContent) => (
        <p key={singleContent.id}>{singleContent.text}</p>
      ))}
      <h3 className="price">
        <em>$</em>
        {price}
        <span>per hour</span>
      </h3>
      <a target='_blank' href="https://www.fiverr.com/users/almamunx08" className="btn btn-default">
        Get Started
      </a>
    </div>
  );
}

export default Pricebox;
