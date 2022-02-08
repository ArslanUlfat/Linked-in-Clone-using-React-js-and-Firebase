import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useDispatch} from 'react-redux';
import {auth} from '../firebase';
import {logout} from '../features/userSlice';
import {useSelector} from  'react-redux';
import {selectUser} from '../features/userSlice';
function Header() {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const LogoutOfApp=()=>{
        dispatch(logout);
        auth.signOut();
    }
    return (
        <div className='header'>
            <div className="header_left">
                <img src="linkedin.png" />
            
            <div className="header_search">
                <SearchIcon  />
                <input type="text" placeholder='Search'/>
            </div>
            </div>
            <div className="header_right"> 
                <HeaderOptions Icon={HomeIcon} title="Home" />
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOptions Icon={ChatIcon} title='Messaging' />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions avatar={true} title="Me"  onClick={LogoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
