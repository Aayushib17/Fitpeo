import React from 'react'
 import"./SideBarRow.css";
import Sidebar from './Sidebar';

function SidebarRow({ selected, Icon, title }) {
  return (
    <div className={`sidebarRow ${{selected} && "selected"}`}>
        <Icon className="sidebarRow__icon" />
      <h2 className='sidebarRow__title'>{title}</h2>
    </div>
  );
}

export default SidebarRow;
