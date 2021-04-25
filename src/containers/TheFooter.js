import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span>Pritom</span>
        <span className="ml-1">&copy; {new Date().getFullYear()} Pritom Dip.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <span>React admin</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)