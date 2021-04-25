import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard/Orders',
    to: '/admin/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Admin',
    to: '/admin/admin',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Service',
    route: '/service',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Services',
        to: '/admin/service/all',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Service',
        to: '/admin/service/add',
        icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
      },

    ]
  },

]

export default _nav
