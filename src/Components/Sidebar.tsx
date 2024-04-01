import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&w=500&q=50" alt="" />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/PedroMolon.png" />

        <strong>Pedro Molon</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.button}>
        <a href="#">
          <PencilLine size={20}></PencilLine>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}