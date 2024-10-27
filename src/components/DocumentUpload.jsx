import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DocumentUpload = ({ onNext }) => {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the files here...</p>
            ) : (
                <p>Drag & drop your files here, or click to select files</p>
            )}
            <button onClick={onNext}>Next</button>
        </div>
    );
};

export default DocumentUpload;
