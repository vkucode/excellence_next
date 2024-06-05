'use client'
import styles from './contact.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import { RiMailSendLine } from "react-icons/ri";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

export default function Contact() {
    const [messageTextForm, setMessageTextForm] = useState("");
    const [iconMessage, setIconMessage] = useState("");
    const [localShow, setLocalShow] = useState("hidden");
    const [formState, setFormState] = useState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        type_projet: '',
        code_postal: '',
        message: ''
    });
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); 
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitDisabled(true);
        setIconMessage(""); // Resetează iconul de mesaj
    
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
            });
    
            if (response.ok) {
                setIconMessage(<FaRegCircleCheck />);
                setMessageTextForm('Message envoyé avec succès!');
                setFormSubmitted(true); // Setează formularul ca fiind trimis
            } else {
                throw new Error('Eroare la trimiterea mesajului');
            }
        } catch (error) {
            setIconMessage(<FaRegCircleXmark />);
            setMessageTextForm("Une erreur s'est produite pendant l'envoi du message.");
            setSubmitDisabled(false);
        } finally {
            setSubmitDisabled(false);
        }
    };

    return (
        <>
            <section className={styles.contactPage}>
                <div className={styles.imgHeader}>
                    <div className='absolute z-10 w-full h-full bg-black bg-opacity-30'></div>
                    <Image src='/img/about-3.jpg' width={1500} height={1500} alt='background' />
                    <div className='max-w-7xl w-full absolute z-20 bottom-5 md:bottom-10 text-left'>
                        <h2>Nous contacter</h2>
                    </div>
                </div>

                <div className={styles.formDiv}>
                    <h3 className='text-center text-2xl font-medium py-3'>Merci de renseigner les<br />information ci-dessous</h3>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" placeholder='Nom' required name='nom' value={formState.nom} onChange={handleChange} />
                            <input type="text" placeholder='Prenom' required name='prenom' value={formState.prenom} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="email" placeholder='E-mail' required name='email' value={formState.email} onChange={handleChange} />
                            <input type="tel" placeholder='Telephone' required name='telephone' value={formState.telephone} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="text" placeholder='Type de travaux' required name='type_projet' value={formState.type_projet} onChange={handleChange} />
                            <input type="number" placeholder='Code Postal: ex: 75001' required name='code_postal' value={formState.code_postal} onChange={handleChange} />
                        </div>
                        <textarea name="message" placeholder='Votre Message' required value={formState.message} onChange={handleChange}></textarea>
                        <button type='submit' disabled={submitDisabled || formSubmitted}>Envoyer <RiMailSendLine /></button>
                        <p>{iconMessage} {messageTextForm}</p>
                    </form>
                </div>
            </section>
        </>
    );
}
