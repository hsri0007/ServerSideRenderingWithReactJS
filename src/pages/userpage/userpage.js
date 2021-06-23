import React from "react";
import { useSelector, useDispatch } from "react-redux";

const UserPage = () => {
  const { value: data } = useSelector((state) => state.counter);
  return <div>{data[0].name}</div>;
};

export default UserPage;
