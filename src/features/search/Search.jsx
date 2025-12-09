import React, { useEffect, useState } from 'react'
import useDebounce from '../../hooks/useDebounce'

const Search = ({onSearch}) => {

  const [searchQuery,setSearchQuery] = useState("")

  const debounceValue = useDebounce(searchQuery, 2000);

  useEffect(() => {
    onSearch(debounceValue)
  },[debounceValue])


  return (
    <div>
      <input
        type="text"
        placeholder='Search...'
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export default Search;
