import React, { useState } from 'react'

const Reuseable = () => {
    const [showBoss, setShowBoss] = useState(false)

    const toggleShowBoss = () => {
        setShowBoss((toggle) => !toggle)
    }
  return (
    <>
        <h1>This is Prevail</h1> 
       {showBoss && <p>Show me you are boss</p>}
        <button onClick={toggleShowBoss}>show</button>
    </>
  )
}

export default Reuseable

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { navbarPagehover } from '../utilis'

// export default function NavbarDropdownPage() {
//     const [dropDown, setDropDown] = useState(false)

//   return (
//     <>
//       <ul className={dropDown ? 'home-dropdown clicked' : 'home-dropdown'} onClick={()=> setDropDown(!dropDown)}>
//           {
//              navbarPagehover.map((item, index) => (
//                  <li key={index}>
//                      <Link onClick={()=> setDropDown(!dropDown)} to={item.path}>{item.title}</Link>
//                  </li>
//              ))
//           }
//       </ul>
//     </>
//   )
// }
