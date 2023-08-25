import React from "react"
import styles from  './styles.module.scss';

interface IVideo {
  src: string
  title: string
}

const Video = ({ src, title }: IVideo) => {
  return (
    <div className={styles.videoContainer}>
        <div>
            <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.iframe}></iframe>
        </div>
    </div>
  )
}

export default Video