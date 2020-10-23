import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./BaseLayout.css";

const BaseLayout = (props) => {
  return (
    <div className="home-layout">
      <Nav />
      <div className="home-layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

export default BaseLayout;
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Header(props) {
//   const { currentUser, handleLogout } = props;

//   return (
//     <div>
//       <h1>Laundromutt</h1>
//       {
//         currentUser ?
//           <>
//             <p>{currentUser.username}</p>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//           :
//           <Link to='/login'>Login/Register</Link>
//       }
//       <hr />
//       {
//         currentUser &&
//         <>
//           <Link to='/clients'>Clients</Link>
//           <Link to='/dogs'>Dogs</Link>
//         </>
//       }
//     </div>
//   )
// }