import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
  <div className={styles.container}>
    <ExperienceBar />

    <section>
      <div>
        {/* div da esquerda */}
        <Profile />
        <CompletedChallenges /> 
      </div>
      <div>#div da direita</div>
    </section>
  </div>
  )
}
