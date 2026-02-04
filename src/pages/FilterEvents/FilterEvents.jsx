import { useCallback, useState } from "react";
import FilterBox from "../../Components/FilterBox/FilterBox";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import Navi from "../../Components/Navigation/Navi";

export default function FilterEvents() {

  const [getMonthYear, setMonthYear] = useState({
    getMonth: null,
    getYear: null
  })

  const getMonthYearInfo = useCallback(({ getMonth, getYear }) => {
    setMonthYear({ getYear, getMonth });
  }, [])
  return (
    <div>
      <Navi />
      <FilterBox getMonthYearInfo={getMonthYearInfo} />
      <SearchFilter getMonthYear={getMonthYear} />
    </div>
  )
}
