import Link from 'next/link'
import styles from '@/styles/Plan.module.scss'
import CoverageItem from '@/components/CoverageItem'
import { useState, useEffect } from "react"

export default function YourPlan() {

  const [mount, setMount] = useState(14300)
  const [price, setPrice] = useState(70)
  const [memory, setMemory] = useState('')


  const data = [
    {
      title: 'Llanta robada',
      price: 15,
      sinister: 'robo'
    },
    {
      title: 'Choque y/o pasarte la luz roja',
      price: 20,
      sinister: 'choque'
    },
    {
      title: 'Atropello en la vía Evitamiento',
      price: 50,
      sinister: 'atropello'
    }
  ]

  const increasesMount = () => {
    setMount( mount + 100)
    // if( mount > 16000 ) {
    //   console.log('mayor a 1600')
    // }
  }

  const decreasesMount = () => {
    setMount( mount - 100)
  }

  useEffect(() => {
    let license = localStorage.getItem('license');
    setMemory(license)
  })

  const increasesPrice = (p) => {
    setPrice( price + p)
  }
  const decreasesPrice = (p) => {
    setPrice( price - p)
  }

  return (
    <div className={styles.plan}>
      <div className={styles.plan_aside} >
        Aside
      </div>
      <div className={styles.plan_body}>
        <Link href='/'>
            <a>Volver</a>
        </Link>
        <h3>¡Hola, Juan!</h3>
        <p>Conoce las coberturas para tu plan</p>
        <div>
          <span>Placa: {`${memory.toUpperCase()}`} </span>
          <p>Wolkswagen 2019 Golf</p>
        </div>
        <div>
          <div>
            <span>Indica la Suma Asegurada</span>
            <span>MIN $12,500 | MAX $16,500</span>
          </div>
          <div className={styles.plan_mount} >
            <button onClick={decreasesMount}>-</button>
            <p>{mount}</p>
            <button onClick={increasesMount} >+</button>
          </div>
        </div>
        <h4>Agrega o quita coberturas</h4>
        {
          data.map( (c,index) => {
            return (
              <CoverageItem 
                key={index} 
                increasesPrice={increasesPrice}  
                decreasesPrice={decreasesPrice}  
                price={c.price} 
                title={c.title}
                sinister={c.sinister} />
            )
          })
        }
        <div>
          <h3>Monto</h3>
          <h3>{price}</h3>
        </div>
      </div>
    </div>
  )
}
