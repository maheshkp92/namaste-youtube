import React from "react";
import Button from "./Button";

const buttonListArray = [
  "All",
  "Podcast",
  "Live",
  "Cricket",
  "Gaming",
  "Songs",
  "Movies",
  "News",
  "Football",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {buttonListArray.map((btnText) => (
        <Button key={btnText} name={btnText}></Button>
      ))}
      {/* <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Movies" />
      <Button name="News" />
      <Button name="Football" /> */}
    </div>
  );
};

export default ButtonList;
