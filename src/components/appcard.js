import React from "react"
import * as styles from "./appcard.module.css"

export default function AppCard(props) {

    return (
        <div className={styles.app}>
            <img src={props.appIcon} className={styles.appIcon} alt="" />
            <div className={styles.description}>
                <h2 className={styles.appName}>{props.appName}</h2>
                <p>{props.longDesc}</p>
            </div>
        </div>
    )
}