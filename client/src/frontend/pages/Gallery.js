import React from 'react';
import ImageCard from "../components/homepage/ImageCard";
import DescriptionContainer from "../components/homepage/DescriptionContainer";


const Gallery = () => {
    return (
      <div id="gallery">
        <DescriptionContainer
          heading={"My Gallery"}
          description={
            "Something short and leading about the collection below—its contents, nd sweet, but not too short so folks don’t simply skip over it entirely."
          }
        />
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
              <ImageCard />
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Gallery;