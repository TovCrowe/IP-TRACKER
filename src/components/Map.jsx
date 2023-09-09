import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map({ domain }) {
  const mapRef = useRef(null);

  useEffect(() => {
    // Verificar si el mapa está inicializado y el dominio ha cambiado
    if (mapRef.current && domain && domain.location) {
      // Obtener la instancia del mapa
      const map = mapRef.current.leafletElement;

      // Actualizar la posición del marcador
      const newPosition = [domain.location.lat, domain.location.lng];
      map.setView(newPosition, map.getZoom());

      // Actualizar la posición del marcador (si es necesario)
      map.eachLayer((layer) => {
        if (layer instanceof Marker) {
          layer.setLatLng(newPosition);
        }
      });
    }
  }, [domain]); 
  
  if(!domain || !domain.ip || !domain.location){
    return null;
  }

  return (
      <MapContainer center={[domain.location.lat, domain.location.lng]} zoom={16} scrollWheelZoom={false} className='w-full  h-screen'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[domain.location.lat, domain.location.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
}

export default Map;