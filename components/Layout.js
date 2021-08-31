import Header from "./Header"
import styles from '@/styles/Layout.module.scss'
export default function Layout({children}) {
  return (
    <div className={styles.layout}  >
      <Header />
      <main className={styles.layout_body} >
        {children}
      </main>
    </div>
  )
}
