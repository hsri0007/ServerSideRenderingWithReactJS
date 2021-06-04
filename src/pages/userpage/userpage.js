import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions";

const Components = () => {
  const data = useSelector((state) => state.counter);
  return (
    <div>
      <div>{data.value[0].name}</div>
    </div>
  );
};

export default {
  loadData: (store) => store.dispatch(getUsers()),
  component: Components,
};
