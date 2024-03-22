import React from 'react'
import styles from '../../styles/SideBar.module.css'
import { NavLink } from 'react-router-dom'

import { useSelector } from 'react-redux'

const SideBar = () => {
    const {list} = useSelector((state)=>state.categories)


    return (
        <div className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
                <nav>
                    <ul className={styles.menu}>
                        {list.slice(0, 6).map(({ id, name})=>(
                            <li key={id}>
                            <NavLink  to={`/categories/${id}`}>
                                {name}
                            </NavLink>
                        </li>
                        )) }
                        
                        
                    </ul>
                </nav>

                <div className={styles.footer}>
                    <a className={styles.link}
                        href="/help"
                        target='_blank'
                    >
                        Help
                    </a>

                    <a 
                    className={styles.link} 
                    href="/terms" target='_blank' 
                    style={{ textDecoration: "underline" }}
                    >
                        Terms & Conditions
                        </a>
                </div>

        </div>
    )
}

export default SideBar
