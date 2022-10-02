import React from 'react';
import { Outlet } from 'react-router-dom'
import { SideBar } from '../Components/SideBar';

export const SliderNav = () => {
  return (
    <div>
        <SideBar>
            <Outlet/>
        </SideBar>
    </div>
  )
}
