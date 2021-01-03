import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { GrAddCircle } from 'react-icons/gr';
import { BiChat } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoMdNotifications } from 'react-icons/io';
import logo from '../../Assets/Images/Logo.png'
import SearchBar from '../common/SearchBar';

const HeaderBar = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

            <HiMenuAlt1 size={24} />
            <img src={logo} style={{ height: 40, marginRight: 100 }} />
            <SearchBar />
            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 100, justifyContent: 'space-between', padding: 10 }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontSize: 10
                }}>
                    <GrAddCircle size={24} />
                    <p>create</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',

                    fontSize: 10
                }}>
                    <BiChat size={24} />
                    <p>chats</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',

                    fontSize: 10
                }}>
                    <IoMdNotifications size={24} />
                    <p>notifications</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',

                    fontSize: 10
                }}>
                    <CgProfile size={24} />
                    <p>profile</p>
                </div>

            </div>

        </div>
    )
}

export default HeaderBar
