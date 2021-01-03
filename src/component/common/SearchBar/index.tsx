import React from 'react'
import { GoSearch } from 'react-icons/go'

const SearchBar = () => {
    return (
        <div style={{ flex: 1 }}>
            <div style={{ padding: 5, display: 'flex', flexDirection: 'row', alignItems: 'center', border: 2, borderStyle: 'solid', borderRadius: 999 }}>
                <input placeholder="Search" type="text" style={{ padding: 10, border: "none", width: '100%' }} />
                <GoSearch />
            </div>
        </div>
    )
}

export default SearchBar
