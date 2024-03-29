import styles from "../styles/Card.module.css";
import Image from "next/image";
import { FaGithub } from "react-icons/fa"
import Link from "next/link"



const Card = (props) => {
    return (
        <div className={styles.container}>

            {/* user profile pic */}
            <div className={styles.imgCont}>
                <Image src={props.imgSrc} alt="" width="140px" height="140px" className={styles.img} />
            </div>

            {/* user profile name */}
            <h1 className={styles.nameH1}>{props.name}</h1>

            {/* button of the profile card with github icon and text navigates to the user github page */}
            <Link href={props.pageUrl}>
                <a target="_blank" className={styles.aBtn}>
                    <button className={styles.button}>
                        <FaGithub className={styles.btnIcon} />
                    </button>
                </a>
            </Link>

        </div >
    )
}

export default Card