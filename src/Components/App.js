import React from "react";
import Review from "./Review";

//css
import classes from "./App.module.css";

export default function App() {
  return (
    <div className={classes.mainpage}>
      <h1 className={classes.head}>Our Reviews</h1>
      <Review />
    </div>
  );
}
