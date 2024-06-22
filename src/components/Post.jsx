
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/JDanielT.png"/>

                    <div className={styles.authorInfo}>
                        <strong>Daniel Tavares</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time>Publicado à 1h</time>

            </header>

            <div className={styles.content} >
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Quas tenetur nisi vel dolores, reprehenderit officia nulla voluptate in rem totam, doloremque doloribus nostrum ea sed. 
                    Dignissimos nam quia officiis porro.
                </p>
            </div>

        </article>
    )
}