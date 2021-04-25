import React, { useContext, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react';

// sidebar nav config
import navigation from './_nav';
import { UserContext } from 'src/App';

const newNav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />

  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Review',
    to: '/admin/review/add',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />

  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Take Service',
    to: '/admin/booking/607acea6d6b7573b5c6833cf',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />

  },
];

const TheSidebar = () => {

  const [user, setUser] = useContext(UserContext);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    fetch(`https://enigmatic-savannah-40617.herokuapp.com/admins?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setAccess(true);
        }
      })
  }, [])


  const dispatch = useDispatch()
  const show = useSelector(state => {
    return state.sidebarShow;
  });

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <h3 className="c-sidebar-brand-full text-white"
          name="logo-negative"
          height={35}>Admin</h3>
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        {
          access ? (
            <CCreateElement
              items={navigation}
              components={{
                CSidebarNavDivider,
                CSidebarNavDropdown,
                CSidebarNavItem,
                CSidebarNavTitle
              }}
            />
          ) : (
              <CCreateElement
                items={newNav}
                components={{
                  CSidebarNavDivider,
                  CSidebarNavDropdown,
                  CSidebarNavItem,
                  CSidebarNavTitle
                }}
              />
            )
        }




      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
