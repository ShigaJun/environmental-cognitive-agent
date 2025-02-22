import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import React from "react";

const style = {
  width: 200,
	height: 150,
	border: "1px dotted #888"
};

let file = null;

export default function DropImageZone() {
  const onDrop = useCallback((acceptedFiles) => {
		// Do something with the files
        file = acceptedFiles[0];
		console.log('acceptedFiles:', file);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
	
    return (
		<div {...getRootProps()} style={style}>
			<input {...getInputProps()} />
			{
				isDragActive ?
					<p>Drop the files here ...</p> :
					<p>Drag 'n' drop some files here, or click to select files</p>
			}
		</div>
	);
}
