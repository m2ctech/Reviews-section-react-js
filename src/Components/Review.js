import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

//css
import classes from "./Review.module.css";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  function nextPerson() {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }

  function prevPerson() {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  function randomPerson() {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className={classes.review}>
      <div className={classes.imagecontainer}>
        <img src={image} alt={name} className={classes.person} />
        <span className={classes.quoteicon}>
          <FaQuoteRight />
        </span>
      </div>
      <div className={classes.persondetails}>
        <h4 className={classes.author}>{name}</h4>
        <br />
        <p className={classes.job}>{job}</p>
      </div>
      <p className={classes.info}>{text}</p>
      <div className={classes.buttons}>
        <button className={classes.prev} onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className={classes.next} onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className={classes.random} onClick={randomPerson}>
        random-member
      </button>
    </article>
  );
}
