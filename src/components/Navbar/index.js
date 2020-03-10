import React, { Component } from 'react'
import css from './Navbar.module.css'

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            app: { name: "Yuk Coba" },
            menu: [
                {
                    id: 1,
                    name: "Menu 1",
                    link: "/menu1"
                },
                {
                    id: 2,
                    name: "Menu 2",
                    link: "/menu2"
                }
            ]
        }
    }

    render() {
        const { app, menu } = this.state
        return (
            <div>
                <ul className={css.navbar}>
                    <li><a className={css.active} href="#">{app.name}</a></li>
                    {menu.map(({ id, name, link }) => (
                        <li><a href={link}>{name}</a></li>
                    ))}
                    <li className={css.right}><a href="#">Login</a></li>
                </ul>
            </div>
        )
    }
}

