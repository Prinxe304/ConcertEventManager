import { useEffect, useState } from "react"
import { months } from "../../Utils/EventDatabase"
import { years } from "../../Utils/EventDatabase"
import "./FilterBox.css"


const displayRender = (value) => {

  return value.map((value, index) => {
    return <option value={value} key={index} >
      {value}
    </option >
  })
}



const FilterBox = ({ getMonthYearInfo }) => {
  const [getMonth, setMonth] = useState("January");
  const [getYear, setYear] = useState("2025");

  const changeMonth = (e) => {
    setMonth(e.target.value)
  }
  const changeYear = (e) => {
    setYear(e.target.value)
  }

  useEffect(() => {
    const update = () => {
      getMonthYearInfo({ getMonth, getYear })
    }
    console.log(getMonth, getYear)
    update();
  }, [getMonth, getYear, getMonthYearInfo])

  return (
    <div className="search-events-wrapper">
      <div className="issue">
        <form className="search-events-card">

          <h2 className="search-events-title">Search Events</h2>
          <p className="search-events-subtitle">
            Filter events by month and year
          </p>

          <div className="search-field">
            <label className="search-label">Month</label>
            <select
              value={getMonth}
              onChange={changeMonth}
              className="search-select"
            >
              {displayRender(months)}
            </select>
          </div>

          <div className="search-field">
            <label className="search-label">Year</label>
            <select
              value={getYear}
              onChange={changeYear}
              className="search-select"
            >
              {displayRender(years)}
            </select>
          </div>
          <div className="buttons">
            {/* <button type="submit" className="search-button"> */}
            {/*   Search Events */}
            {/* </button> */}
          </div>

        </form>
      </div>
    </div>

  )
}

export default FilterBox
