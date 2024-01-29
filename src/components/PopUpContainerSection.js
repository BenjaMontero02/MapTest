import dynamic from 'next/dynamic'; // Composant LeafletMap chargé dynamiquement 

const PopUpContainerSection = dynamic( () => import('./PopUpDecider'), { ssr: false } );

export default PopUpContainerSection; 