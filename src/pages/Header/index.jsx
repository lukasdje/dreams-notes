import "./Header.scss"
import React from "react"

export default function Header(props) {
    return (
        <div className="Header">
            <div className="search">
                <p><i class="fas fa-search"></i></p>
                <input type="search" name="" id="" placeholder="Buscar..."/>
            </div>

            <div className="containerUser">

                <div className="nameUser">
                    <h3>Lucas Siqueira</h3>
                    <p>Admin</p>
                </div>
                <div className="avatarUser">
                    <img src="https://avatars.githubusercontent.com/u/62457621?v=4" alt="Lucas" />
                    <p><i class="fas fa-chevron-down"></i></p>
                </div>
                <div className="icons">
                    <p><i class="far fa-bell"></i></p>
                    <p><i class="fas fa-sign-out-alt"></i></p>
                </div>
            </div>
        </div>
    )
}