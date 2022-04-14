function RatingList({ numbers, onRateChange, rate }) {
  const listItems = numbers.map((number, index) => (
    <li
      className={`rounded rounded__button ${
        index + 1 === rate ? "rounded__button--active" : ""
      }`}
      key={number.toString()}
      onClick={() => onRateChange(number)}
    >
      {number}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default RatingList;
