import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import iconLocation from '../assets/icon-location.svg';

function Map({ domain }) {
  // Obtener la referencia al mapa
  const mapRef = useRef(null);

  useEffect(() => {
    // Verificar si el mapa está inicializado y el dominio ha cambiado
    if (mapRef.current && domain && domain.location) {
      // Obtener la instancia del mapa
      const map = mapRef.current.leafletElement;

      // Actualizar la posición del marcador
      const newPosition = [domain.location.lat, domain.location.lng];
      const currentZoom = map.getZoom();
      
      // Centrar el mapa en la nueva posición y mantener el nivel de zoom actual
      map.setView(newPosition, currentZoom);
    }
  }, [domain]);

  if (!domain || !domain.ip || !domain.location) {
    return null;
  }

  // Generar una clave única basada en la ubicación del dominio
  const mapKey = `${domain.location.lat}-${domain.location.lng}`;

  const customIcon = L.icon({
    iconUrl: iconLocation,
    iconSize: [32, 32], // Tamaño del ícono (ajusta según tus necesidades)
  });
  return (
    <MapContainer key={mapKey} ref={mapRef} center={[domain.location.lat, domain.location.lng]} zoom={15} scrollWheelZoom={false} className='w-full  h-screen'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[domain.location.lat, domain.location.lng]} icon={customIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;