import React from 'react'
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import {useSelector} from  'react-redux';
import {selectUser} from '../features/userSlice';
function Sidebar() {
    const user=useSelector(selectUser);
    const recentItems = (topic) => (
        <div className="sidebar_recentItems">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>

        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src='download.jfif' />
                <Avatar src={user.photoUrl} className='sidebar_avatar' >{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who Viewed you</p>
                    <p className='sidebar_statNumber'>2,543</p>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on Post</p>
                    <p className='sidebar_statNumber'>2,445</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItems("React JS")}
                {recentItems("Programming")}
                {recentItems("Javascript")}
                {recentItems("Node JS")}
            </div>
        </div>
    )
}

export default Sidebar
