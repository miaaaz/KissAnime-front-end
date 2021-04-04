import React from 'react'
import "./home.css"
import Search from "./search/search";
import TopNavBar from "./top-navbar/top-navbar";
import SmallCard from "./anime-grid/small-card";

const Home = () => {
  return(
      <div className="container pl-3 pr-3">
        <TopNavBar/>
        <Search/>

        {/*Editor's Picks*/}
        <div className={"container-fluid"}>
          <h4 className={"mb-3 wbdv-home-block-title"}>
            <span>
              Editor's Picks
            </span>

          </h4>
          <div className={"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6\""}>
              <SmallCard/>
              <SmallCard/>
              <SmallCard/>
              <SmallCard/>
              <SmallCard/>

          </div>
        </div>


      </div>



        )
}

export default Home