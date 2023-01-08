import React, { useState } from 'react';
import Header from './Header';
import ModelCanvas from './ModelCanvas';

import "./UploadModelPage.scss"

export default function UploadModelPage() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const validateFile = (file_json) => {
        const fileExtension = file_json.name.split('.').pop();
        if ( !(fileExtension === "glb" || fileExtension === "gltf") ){
            return false;
        }
        else {
            return true;
        }
    }

    const handleChange = function loadFile(e) {
        setError(null);
        if (e.target.files.length > 0) {
          const file_json = e.target.files[0];

          if (validateFile(file_json)){
            const file = URL.createObjectURL(e.target.files[0]);
            setFile(file);
          }
          else {
            setError("Ошибка! Неправильное расширение файла модели");
          }
        }
    };

    return (
        <div className="upload-model-page">
            {
                !file &&
                <div>
                    <Header />
                    <div className='label-and-form'>
                        <label htmlFor="formFileLg" className="form-label">Загрузите свою модель</label>
                        <input className="form-control form-control-lg" id="formFile" type="file" onChange={handleChange} accept=".glb,.gltf" />
                    </div>
                </div>
            }
            { file && <ModelCanvas modelPath={file} /> }

            { 
            error && 
            <div className='error-message'>
                {error}
            </div> 
            }
        </div>
    );
}