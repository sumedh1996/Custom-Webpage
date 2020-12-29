import React from 'react';
import HeaderBar from '../HeaderBar';
import HomeContainer from '../HomeContainer';
import SideBar from '../SideBar';

const BaseComponent = () => {
    return (
        <div style={{
            height: '100%'
        }}>
            <HeaderBar />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%'
            }}>

                <SideBar />
                <HomeContainer />
            </div>
        </div>

    )
}

export default BaseComponent;
