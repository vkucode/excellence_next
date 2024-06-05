import styles from './components.module.scss'
import Image from 'next/image'
import 'animate.css'

export default function Error404(){
    return(
        <>
            <section className={styles.errorPage}>
                <Image src="/img/backgroundmain.jpg" width={1500} height={1500} alt='background' className={styles.back404Img} />
                <div className='absolute z-10 flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-20'>
                    <Image src="/icon.png" width={100} height={300} alt='ExcellenceBTP' /> 
                    <h1>
                    Page en cours de développement
                    </h1>
                    <h2>
                        Merci de revenir plus tard 
                    </h2>
                    <a href="/contact">Nous contacter</a>
                    <div className='fixed bottom-5 right-5 flex mix-blend-difference bg-transparent text-white flex-row justify-center items-center'>
                       Powered by <Image src="/logoVku.png" width={50} height={200} alt='VKU CODE' />
                    </div>
                </div>
                
            </section>  
        </>
    )
}