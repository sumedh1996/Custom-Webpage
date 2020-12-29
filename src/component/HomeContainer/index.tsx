import React from 'react'
import DataCard from '../common/DataCard'

const HomeContainer = () => {
    return (
        <div style={{ backgroundColor: 'blue', flex: 1, flexDirection: 'column', height: '100%' }}>
            <h1>This is Home Area</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <DataCard />
                <DataCard />
            </div>
        </div>
    )
}



export default HomeContainer
