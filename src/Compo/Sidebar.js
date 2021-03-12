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


function Sidebar() {
    return (
        <div className="sidebar">
            <Sidebarrow  src="https://static.wikia.nocookie.net/thejusticeworld/images/6/63/Luffy.jpg/revision/latest/scale-to-width-down/340?cb=20110416204724" title="Monkey.D Luffy"/>
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
