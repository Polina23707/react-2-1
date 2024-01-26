import Filter from "./Filter";

const Toolbar = (props) => {
  return(
    <div className="toolbar">
      {props.filters.map((filter) => 
        <Filter filter={filter} key={filter.length} onSelectedFilter={props.onSelectFilter}/>
      )}
    </div>
  )
}

export default Toolbar;