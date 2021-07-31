import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar'
import CategoryBar from '../components/CategoryBar'
import CourseCard from '../components/CourseCard'


export default function Home() {
  return (
    <>
    <NavBar />
    <div className={styles.main}>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
      <CourseCard/>
    </div>
    
    </>
  )
}
