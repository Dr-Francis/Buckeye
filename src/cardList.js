import React from "react";
import { robots } from "./robots";
import Card from "./Card";

const cardComponent = robots.map((user, i) => {
  return (
    <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  );
});
const cardList = ({ robots }) => {
  return <div>{cardComponent}</div>;
};

export default cardList;
