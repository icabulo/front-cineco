// eslint-disable-next-line object-curly-newline
import { Input } from "antd"
// import "./search-list.scss"
import { useDispatch } from "react-redux"
import { filterCinemaAsync } from "../../../context/features/cinema/cinemaSlice"

const { Search } = Input

function SearchCinema() {
  const dispatch = useDispatch()

  const onSearch = async (value) => {
    // eslint-disable-next-line radix
    dispatch(filterCinemaAsync(value))
  }

  return (
    <Search
      placeholder="search by name"
      onSearch={onSearch}
      allowClear
      style={{
        width: 300,
      }}
    />
  )
}
export default SearchCinema
