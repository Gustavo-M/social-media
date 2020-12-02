import React from 'react';
import styles from './Upload.module.css';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const Upload = ({flag, content}) => {

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
      flag(acceptedFiles)
      content(acceptedFiles[0].preview)
    },
  })

  files.map((file) => (
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
            <FontAwesomeIcon icon={faCloudUploadAlt} className={styles.uploadIcon} />
            <p>Arraste e solte uma imagem aqui ou clique no botão abaixo</p>
            <button className={styles.upBtn}>Pesquisar imagens</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Upload;