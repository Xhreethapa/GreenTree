import React from 'react'
import './Sidebar.css'
import Sidebarrow from './Sidebarrow'
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import {useStateValue} from '../StateProvider';



function Sidebar() {
    const[{user}, dispatch]= useStateValue();

    return (
        <div className="sidebar">
            <Sidebarrow  src={user.photoURL} title={user.displayName}/>
            <Sidebarrow Icon={LocalHospitalIcon}title="COVID-19 Information Center"/>
            <Sidebarrow Icon={EmojiFlagsIcon} title="Pages"/>
            <Sidebarrow Icon={PeopleIcon} title="Friends"/>
            <Sidebarrow Icon={ChatIcon} title="Messenger"/>
            <Sidebarrow Icon={StorefrontIcon} title="MarketPlace"/>
            <Sidebarrow Icon={VideoLibraryIcon} title="Videos"/>
            <Sidebarrow Icon={ExpandMoreOutlinedIcon} title="MarketPlace"/>
        </div>
    )
}

export default Sidebar
