import React from 'react'


import styled from "styled-components";
const StyledDiv = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    
  }
`;



function Result({domain}) {
  if (!domain || !domain.ip || !domain.location) {
    return null; // O mostrar un mensaje de error adecuado
  }

  return (
    <StyledDiv className="bg-gray-100 shadow-lg flex justify-evenly p-7 rounded-xl sm:flex-row">
    <div>
      <h3 className='text-gray-400'>IP ADDRESS</h3>
      <p>{domain.ip}</p>
    </div>
    <div>
      <h3 className='text-gray-400'>LOCATION</h3>
      <p>{`${domain.location.region}, ${domain.location.country}`}</p>
    </div>
    <div>
      <h3 className='text-gray-400'>TIMEZONE</h3>
      <p>{domain.location.timezone}</p>
    </div>
    <div>
      <h3 className='text-gray-400'>ISP</h3>
      <p>{domain.isp}</p>
    </div>
  </StyledDiv>
  )
}

export default Result