
import styles from '@/app/css/Accomodation.module.css'
import {listLogement} from '@/public/data/logements'
import Image from 'next/image';
import Head from 'next/head';
import Gallery from '@/app/components/Gallery';
import Rating from '@/app/components/Rating';
import Collapse from '@/app/components/Collapse';
import Tag from '@/app/components/Tag';

const page = ({params}) => {
  const logementId = params.logementId;

  const logementData = listLogement.find((logement) => logement.id === logementId);

  return (
    <>    
      <Head>
        <title>{`Kasa - ${logementData !== undefined ? logementData.title : 'Introuvable'}`}</title>
      </Head>
      <div className={styles.logement}>
        <Gallery
          title={logementData.title}
          pictures={logementData.pictures}
        />
        <section className={styles.info_container}>
          <header className={styles.info_header}>
            <h1 className={styles.title_logement}>
              {logementData.title}
            </h1>
            <span className={styles.location_logement}>
              {logementData.location}
            </span>
            <div className={styles.tags_logement}>
              {logementData.tags.map((tag) => <Tag key={tag} tag={tag} />)}
            </div>
          </header>
          <footer className={styles.info_footer}>

            <Rating rating={logementData.rating} />

            <div className={styles.profile_info}>
              <span>{logementData.host.name}</span>
              <Image
                className={styles.profile_picture}
                src={logementData.host.picture}
                width={100} 
                height={100}
                alt={`${logementData.host.name}`}
              />
            </div>
          </footer>
        </section>

        <section className={styles.collapse_container}>
          <Collapse
            title="Description"
            text={logementData.description}
          />
          <Collapse
            title="Equipments"
            text={logementData.equipments.map((equipement) => (`${equipement}\r\n`))}
          />
        </section>
      </div>
    </>
  );
}



export default page