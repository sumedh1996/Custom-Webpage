import React from 'react';
import HeaderBar from '../HeaderBar';
import HomeContainer from '../HomeContainer';
import SideBar from '../SideBar';

const BaseComponent = () => {
    return (
        <div style={{
            height: '100%',
            
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center'
        }}>
            <div style={{
                height: '100%',
                maxWidth: 1600,
                alignContent: 'center',
                justifyContent: '',
                alignSelf: 'center'
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
        </div>

    )
}

export default BaseComponent;
