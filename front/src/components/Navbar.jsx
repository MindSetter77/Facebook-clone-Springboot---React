import React, {useState} from "react";
import './Navbar.css'

import { motion } from "framer-motion";

import { Link, NavLink } from "react-router-dom";

export const Navbar = ({user}) => {

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <motion.nav

        >
            <Link to="/" className="title">Fejsbook</Link>

            <div className="menu"
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                
                <li>
                    <NavLink to={`/profile/${user.user_id}`}>
                        {user.firstName}
                        </NavLink>
                </li>
                
            </ul>
        </motion.nav>
    )
}