import React from 'react';
import PhotosGallery from './Components/PhotosGallery';

export default function App() {

    const photos = [
        "http://placeimg.com/140/60/people",
        "http://placeimg.com/140/60/animals",
        "http://placeimg.com/140/60/tech"
    ]
    return (
        <>
            <h1> Galeria de Fotos </h1>
            <PhotosGallery
                photos={photos}
            />
        </>
    );
}