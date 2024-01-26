const Filter = (props) => {
  function click() {
    props.onSelectedFilter(props.filter);
  }

  return(
    <button className="filter" onClick={click}>{props.filter}</button>
  )
}

export default Filter;