'use client'
import styles from './Contact.module.css'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'

const Contact = () => {
	const form = useRef()

	const [popUp, setPopUp] = useState(false)

	const sendEmail = e => {
		e.preventDefault()

		emailjs.sendForm(
			'service_lkl0tfl',
			'template_k1gvf8n',
			form.current,
			'kFNNVAzcW84WMk6KO'
		)

		form.current.reset()
	}

	const inputFocus = e => {
		if (e && e.target) {
			e.target.nextSibling.className = 'Contact_wtFocus__4oli8'
		}

		return null
	}

	const inputBlur = e => {
		if (e && e.target) {
			if (e.target.value.trim() === '') {
				e.target.nextSibling.className = 'Contact_wtoFocus__3Z_Jj'
			} else {
				e.target.nextSibling.className = 'Contact_wtFocus__4oli8'
			}
		}

		return null
	}

	return (
		<>
			<form ref={form} onSubmit={sendEmail} className={styles.form}>
				<div className={styles.inputContainer}>
					<label className={styles.spanContainer}>
						<input
							type='text'
							name='user_name'
							onFocus={e => inputFocus(e)}
							autoComplete='off'
							onBlur={e => inputBlur(e)}
						/>
						<span className={styles.wtoFocus}>Nombre</span>
					</label>
				</div>
				<div className={styles.inputContainer}>
					<label className={styles.spanContainer}>
						<input
							type='email'
							name='user_email'
							onFocus={e => inputFocus(e)}
							autoComplete='off'
							onBlur={e => inputBlur(e)}
						/>
						<span className={styles.wtoFocus}>Email</span>
					</label>
				</div>
				<div className={styles.textAreaContainer}>
					<label className={styles.span2Container}>
						<textarea
							name='message'
							onFocus={e => inputFocus(e)}
							onBlur={e => inputBlur(e)}
						/>
						<span className={styles.wtoFocus}>Mensaje</span>
					</label>
				</div>
				<button
					value='Send'
					className={styles.formButton}
					onClick={() => setPopUp(true)}
				>
					Enviar
				</button>
			</form>
			{popUp && (
				<div className={styles.popUp}>
					<span>¡Mensaje enviado!</span>
					<p onClick={() => setPopUp(false)}>X</p>
				</div>
			)}
		</>
	)
}

export default Contact
