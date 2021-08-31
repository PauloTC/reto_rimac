import styles from '@/styles/CoverageItem.module.scss'
import { useState, useEffect } from 'react'

export default function CoverageItem({title, price , increasesPrice, decreasesPrice, sinister}) {

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if(checked) {
      increasesPrice(price)
    } else {
      decreasesPrice(price)
    }
  }, [checked])

  return (
    <div className={styles.coverage} >
      <h4 className={styles.coverage_title} >{title}</h4>
      <input className={styles.coverage_arrow} type="checkbox" id="vehicle" />
      <label className={styles.coverage_text} htmlFor="vehicle">
      He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
      </label>
      <input
        type='checkbox' 
        id={sinister}
        onChange={ () => setChecked(!checked)} />
      <label htmlFor={sinister} >Agregar</label>
    </div>
  )
}
