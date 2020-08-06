import React from "react";

export default class DogList extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello dogs</h1>
        {// console.log(typeof this.props.dogs)
        this.props.dogs && this.props.dogs.map(adogImg => {
          return <img src={adogImg} alt="" />;
        })}
      </div>
    );
  }
}
