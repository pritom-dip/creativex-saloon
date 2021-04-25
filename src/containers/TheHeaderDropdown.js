import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import avatar from 'src/assets/images/8.jpg';
import { logoutUser } from 'src/admins/pages/login/LoginManager';
import { useHistory } from 'react-router-dom';

const TheHeaderDropdown = () => {
  const history = useHistory();
  const hadnleLogOut = () => {
    logoutUser()
      .then(res => {
        if (res) {
          history.push('/')
        }
      })
  }

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={avatar}
            className="c-avatar-img"
            alt="admin@gmail.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
          <span onClick={hadnleLogOut}>Logout</span>
        </CDropdownItem>

      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
