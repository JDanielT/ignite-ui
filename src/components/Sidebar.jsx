import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <aside className={styles.sidebar} >
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile} >

                <img 
                    className={styles.avatar}
                    src="https://github.com/JDanielT.png"
                />

                <strong>Daniel T.</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Perfil
                </a>
            </footer>

        </aside>
    );
}