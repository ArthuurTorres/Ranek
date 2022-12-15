import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato"
        description="Entre em Contato"
      />
      <img src={foto} alt="maquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>tuzin@com</li>
          <li>+55 (22)99782-2626</li>
          <li>Rua Abius - Cabo Frio</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato;
