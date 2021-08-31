import Image from 'next/image'
import LogoHeader from '../public/images/logo.png'
import styles from '@/styles/Header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
      <figure className={styles.figure}>
        <Image
          src={LogoHeader}
          alt="logo"
          width={150}
          height ={80}
        />
      </figure>
      <div className={styles.info}>
        <h5>¿Tienes alguna duda?</h5>
        <span>(01) 411 6001</span>
      </div>
    </div>
  )
}
