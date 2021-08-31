import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '@/styles/Form.module.scss'
import { useState } from "react"

export default function Form() {

  const router = useRouter()

  const [cellphone, setCellphone] = useState('')
  const [license, setLicense] = useState('')
  const [document, setDocument] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('license',license);
    if(!cellphone || !license || !document ) {
      toast.error('Es necesario todos los campos')
    } else if (document.length != 8) {
      toast.error('Documento invalido')
    } else if (cellphone.length != 9) {
      toast.error('Telefono invalido')
    } else if (license.length != 7) {
      toast.error('La placa es invalida')
    } else {
      router.push(`/arma_tu_plan`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h3 className={styles.form_title}>Déjanos tus datos </h3>
      <ToastContainer />
      <div className={styles.form_document} >
        <select className={styles.form_select} name="select">
          <option value="value1" defaultValue >DNI</option>
          <option value="value2">RUC</option>
          <option value="value3">C.E</option>
        </select>
        <input className={styles.form_input} onChange={e => setDocument(e.target.value)} maxLength={8} placeholder="Nro. de doc" value={document} />
      </div>
      <input className={styles.form_input} onChange={e => setCellphone(e.target.value)} maxLength={9} type="text" placeholder="Celular" value={cellphone} />
      <input className={styles.form_input} onChange={e => setLicense(e.target.value)} maxLength={7} type="text" placeholder="Placa" value={license} />
      <div className={styles.form_terms}>
        <input type="checkbox" id="terms" name="Terminos"/>
        <label htmlFor="terms">Acepto la <a href='#' >Política de Protecciòn de Datos Personales </a>  y los <a href='#' >Términos y Condiciones.</a> </label>
      </div>
      <input className={styles.form_btn} type='submit' value='COTÍZALO' />
    </form>
  )
}
