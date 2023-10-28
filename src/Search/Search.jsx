import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Search.css'
import Select from 'react-select'

function Search({search}) {
    const onSearch = (word)=>{
      search(word)
    }
    const options = [
        { value: 'movie', label: 'Movie' },
        { value: 'tv', label: 'TV' },
        { value: 'person', label: 'Person' },
      ]
      const filterIcon = (
        <>
          <FontAwesomeIcon icon={faFilter} /> <span>Media Type</span>
        </>
      );
  return (
    <div className='search-content py-5 w-100'>
        <div className="container d-flex justify-content-between">
            <div className="col-sm-8 col-md-5">
                <div className="search d-flex justify-content-between align-items-center">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='me-1 fs-5'/>
                    <input onChange={(e)=>{onSearch(e.target.value)}} className='form-control border-0 bg-transparent ms-2' type="search" placeholder="Find movies tv shows documentary and more..." />
                </div>
            </div>
            <div className="col-sm-4 col-md-2">
                <div className="filter">
                    <Select options={options} placeholder={filterIcon}>
                    </Select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search