import styles from '@/styles/AsideHome.module.scss'

export default function HomeAside() {
  return (
    <div className={styles.aside}>
      <div className={styles.aside_container}>
        <p className={styles.aside_action}>¡NUEVO!</p>
        <h3 className={styles.aside_title} >Seguro <strong>Vehicular <br /> Traking</strong></h3>
        <p className={styles.aside_subtitle}>Cuentanos donde le haras seguimiento a tu seguro</p>
      </div>
      <h3 className={styles.aside_copy}>© 2021 RIMAC Seguros y Reaseguros.</h3>
    </div>
  )
}
