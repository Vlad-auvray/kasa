import React from 'react'
import { useParams } from 'react-router-dom';



export default function Logements() {

    const params = useParams();
    console.log(params);

  return (
    <div>
    <h1>Titre du logement</h1>
    </div>
  )
}
