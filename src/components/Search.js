import React from 'react'
import '../assets/styles/components/Search.scss'

export default function Search() {
    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className="input__search" placeholder="Buscar..."/>
        </section>
    )
}
