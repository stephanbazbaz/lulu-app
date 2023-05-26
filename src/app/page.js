import styles from './page.module.scss'
import Header from '../components/Header/Header'
import MainPage from '../pages/MainPage/MainPage'
import Footer from '../components/Footer/Footer'
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <MainPage />
        <Footer />
      </div>
    </main>
  )
}
