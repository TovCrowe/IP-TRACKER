import React, { useState, useEffect } from "react";
import bgImg from "../img/pattern-bg-desktop.png";
import styled from "styled-components";
import iconArrow from "../assets/icon-arrow.svg";

const Search = styled.div`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Layout({ setAddress, setDomain, setError, address, domain}) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!address) {
      return;
    }

    const getLocation = async () => {
      try {
        
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_EvfUqdpwfKmb4CSIvojyF8OJsTKDV&ipAddress=${inputValue}`
        );
        if (!response.ok) {
          // Handle response errors here
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setDomain(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }

    };

    getLocation();
  }, [address]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (domain) {
      setError(false);
      setAddress(inputValue);
    } else if(!domain){
      setError(true);
    }
  };

  return (
    <div>
      <Search>
        <h1 className="text-white font-bold text-2xl mb-4">IP Address Tracker</h1>
        <form className="text-gray-800 font-bold mb-4 flex " onSubmit={handleSubmit}>
          <input
            className="border-2 p-2 placeholder-gray-600 rounded-l-full w-80 focus:outline-none"
            name="searchInput1"
            type="text"
            id="searchInput"
            placeholder="Search for any IP address or domain:"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">
            <img
              src={iconArrow}
              className="py-6 px-4 bg-black rounded-r-full hover:bg-gray-900"
              alt="Button"
            />
          </button>
        </form>
      </Search>
    </div>
  );
}

export default Layout;