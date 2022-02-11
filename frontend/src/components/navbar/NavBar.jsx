import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React from 'react'
import './navbar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='container'>

            <div className="left">
                <img src="https://socialgeek.co/wp-content/uploads/2017/06/Netflix-Logo-Print_CMYK.jpg" alt="" />
                <span>Inicio</span>
                <span>Series</span>
                <span>Películas</span>
                <span>Nuevo y popular</span>
                <span>Mi lista</span>
            </div>

            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src="https://scontent.fuio21-1.fna.fbcdn.net/v/t39.30808-6/272822970_4680519538731320_8687988279161756096_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHg-MHei7ZAnL5-PfR19Llu0Wy_mdhAA9LRbL-Z2EAD0mTHh-j8gwb5RsCG11gP09Mbh27C8SSrIdMdy7vdwwI_&_nc_ohc=YoFGs-5RyHQAX_hHQsK&_nc_ht=scontent.fuio21-1.fna&oh=00_AT_z018Y-q3J7OlQov2UrjGLMpqIJ_VF_9YZV29jSwmPDw&oe=620C11F8" alt="" />
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Ajustes</span>
                        <span>Cerrar sesión</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NavBar