import { styled } from "styled-components";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Map from "./components/Map";
import Result from "./components/Result";
import Error from "./components/Error";

const Results = styled.div`
  position: absolute;
  left: 20%;
  top: 24%;
  width: 60%;
  z-index: 1;
`;
const MapContainer = styled.div`
  position: relative;
  z-index: 0; /* Establece un z-index bajo para el mapa */
`;

function App() {
  const [domain, setDomain] = useState({});
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(false);

  return (
    <>
    <div className="relative h-screen">
      <Layout
        setAddress={setAddress}
        setDomain={setDomain}
        setError={setError}
        address={address}
        domain={domain}
      />
      
      <Results>{error ? <Error>Not a valid domain</Error> : <Result domain={domain} />}</Results>
      <MapContainer>{error ? null : <Map domain={domain} />}</MapContainer>
    </div>
        </>
  );
}

export default App;
