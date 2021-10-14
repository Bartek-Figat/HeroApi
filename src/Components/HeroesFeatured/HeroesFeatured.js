import React, { useEffect, useState } from "react";
import { getBasicHeroInfoById } from "../../Requests/requests";
import HeroFeatured from "./HeroFeatured/HeroFeatured";
import Loader from "../Loader/Loader";
import "./HeroesFeatured.css";

function HeroesFeatured() {
  const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    fetchAndDisplayFeaturedHeroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAndDisplayFeaturedHeroes = async () => {
    let herosList = [];
    let numberOfId;
    

    for (let i = 0; i < 4; i++) {
      numberOfId = Math.floor(Math.random() * (731 - 0 + 1)) + 0;
      const data  = await getBasicHeroInfoById(numberOfId);
      herosList.push(data)
    }


    if(!herosList){
      setLoadingState(true);
    }else{
      setFeaturedHeroesList(herosList);
      setLoadingState(false);
    }

  };

  return (
    <>
      <section className="featured">
        <h1>Featured Heroes</h1>
        {!isLoading && (
          <div className="featured__list">
            {Object.values(featuredHeroesList).map(
              ({ name, imgUrl, powerstats, id }) => (
                <HeroFeatured
                  key={name}
                  name={name}
                  powerstats={powerstats}
                  imgUrl={imgUrl}
                  id={id}
                />
              )
            )}
          </div>
        )}{" "}
        {isLoading && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </section>
    </>
  );
}
export default HeroesFeatured;


