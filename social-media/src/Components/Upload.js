import React from 'react';
import styles from './Upload.module.css';
import { useDropzone } from 'react-dropzone';

const Upload = () => {

  const [files, setFiles] = React.useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ))

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Upload de imagem</h1>
        <div className={styles.UpContainer}>
          <div {...getRootProps()} className={styles.stage}>
            <input {...getInputProps()} />
            <div className={styles.uploadIcon}></div>
            <p>Arraste e solte uma imagem aqui ou clique no botão abaixo</p>
          </div>
          <div>{images}</div>
        </div>
      </div>
    </section>
  )
}

export default Upload;