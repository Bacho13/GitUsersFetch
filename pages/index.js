import Head from 'next/head'
import Card from '../components/Card'
import styles from "../styles/CardLayout.module.css";

export const getStaticProps = async () => {
  const res = await fetch('https://api.github.com/users');
  const data = await res.json();


  return {
    props: {
      users: data
    }
  }
}


export default function Home({ users }) {
  return (
    <div>
      <Head>
        <title>GitHub Users</title>
        <meta name="description" content="Using the app u cant search for git users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      
        <div className={styles.Grid} >
          {users.map(user => (
            <Card key={user.id} name={user.login} pageUrl={user.html_url} imgSrc={user.avatar_url} className={styles.CardItem}  />
          ))}
        </div>
      
    </div>
  )
}
