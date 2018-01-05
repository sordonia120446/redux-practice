import React from "react";


const ItemList = props => {

  return (
    <ul>
      {props.items
        .map((item, ind) => {
          return (<li key={ind}>
            {item.label}
          </li>)
      })}
    </ul>
  );

};

export default ItemList;
