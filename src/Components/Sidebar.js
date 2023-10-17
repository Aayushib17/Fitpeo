import React from 'react'
import Icon from '@mui/material/Icon';
import AppsIcon from '@mui/icons-material/Apps';
import SidebarRow from './SidebarRow';
import"./Sidebar.css";
import { Divider } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import CategoryIcon from '@mui/icons-material/Category';
import Person3Icon from '@mui/icons-material/Person3';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
function Sidebar() {
  return (
    <div className='Main'>
      <h2 className='Heading'>
           <SidebarRow selected Icon={AppsIcon}title="Dashboard"/> 
           </h2> <Divider/>
            <div className='sub'>
            <SidebarRow selected Icon={KeyIcon} title="Dashboard"/>
            <SidebarRow selected Icon={CategoryIcon} title="Product"/>
            <SidebarRow selected Icon={Person3Icon} title="Customers"/>
            <SidebarRow selected Icon={AccountBalanceWalletIcon} title="Income"/>
            <SidebarRow selected Icon={InsightsRoundedIcon} title="Promote"/>
            <SidebarRow selected Icon={HelpCenterIcon} title="Help"/>
    </div>
    </div>
  )
}

export default Sidebar;
