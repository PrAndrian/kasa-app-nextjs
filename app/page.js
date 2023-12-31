import styles from './css/Home.module.css'
import {listLogement} from '@/public/data/logements'
import Banner from './components/Banner'
import Thumb from './components/Thumb'

export const metadata = {
  title: 'Kasa - Accueil',
  description: 'Generated by create next app',
}

export default function page() {

  const urlImage = '/images/landscape_home.png';

  return (
    <main id={styles.home}>
      <Banner image={urlImage} />

      <section className={styles.thumbs_container}>
        {listLogement  && listLogement.map((logement) => (
          <Thumb
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  )
}
