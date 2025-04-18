"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

type Testemonial = {
  text: string;
  author: string;
  role: string;
};

const testemonialsArray: Testemonial[] = [
  { text: "Vukasin is excellent! He brought us a contract on the first proposal and that tells a lot about his outreach skills. Our project went in another direction, so we're closing the contract, but I recommend him to anyone.", author: "John Doe", role: "Founder | Inrise Work" },
  { text: "Vukasin is excellent! He brought us a contract on the first proposal and that tells a lot about his outreach skills. Our project went in another direction, so we're closing the contract, but I recommend him to anyone.", author: "John Doe", role: "Founder | Inrise Work" },
  { text: "Vukasin is excellent! He brought us a contract on the first proposal and that tells a lot about his outreach skills. Our project went in another direction, so we're closing the contract, but I recommend him to anyone.", author: "John Doe", role: "Founder | Inrise Work" },
  { text: "Vukasin is excellent! He brought us a contract on the first proposal and that tells a lot about his outreach skills. Our project went in another direction, so we're closing the contract, but I recommend him to anyone.", author: "John Doe", role: "Founder | Inrise Work" },
  { text: "Vukasin is excellent! He brought us a contract on the first proposal and that tells a lot about his outreach skills. Our project went in another direction, so we're closing the contract, but I recommend him to anyone.", author: "John Doe", role: "Founder | Inrise Work" },

];
export default function Testemonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = testemonialsArray.length;

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  return (
    <div className="testemonials">
      <div className="testemonials-div">
        {testemonialsArray.map((item, i) => {
          let className = "testemonial";
          if (i === currentIndex) className += " active";
          else if (i === (currentIndex - 1 + totalItems) % totalItems) className += " prev";
          else if (i === (currentIndex + 1) % totalItems) className += " next";
          else className += " hidden";

          return (
            <div key={i} className={className}>
              <p>{item.text}</p>
              <p className="user">
                <b>{item.author}</b><br />
                {item.role}
              </p>
            </div>
          );
        })}
      </div>

      <div className="strelicaL" onClick={prev}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="strelicaR" onClick={next}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>

      <div className="dec1"></div>
      <div className="dec2"></div>
      <div className="dec3"></div>
      <div className="blur"></div>
    </div>
  );
}

