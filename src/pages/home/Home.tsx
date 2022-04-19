import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

//icons
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

//images
import cardImage from "assets/images/image.png";

const Home: React.FC = () => {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState([]);
  const [selectedCards, setSelectedCards] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/SergeyKhval/4f1160e2f3ef20a57c05e7edda43b426/raw/e128ec437ac009db94e94cf317e1badc37218691/users_slice.json"
      )
      .then((response) => {
        console.log(response);
        setRobots(response.data);
        setFilteredRobots(response.data);
      });
  }, []);

  const selectCard = (id: number, data: any) => {
    const newObj = {};

    if (selectedCards[`${data.email}`]) {
      console.log("here");

      delete selectedCards[`${data.email}`];

      setSelectedCards({ ...selectedCards });
    } else {
      newObj[data.email] = data;

      setSelectedCards({ ...selectedCards, ...newObj });
    }
  };

  const handleSearch = (e) => {
    const newRobots = robots;

    // window.location.replace(
    //   `${window.location.origin}?search=${e.target.value}`
    // );

    if (!e.target.value) {
      setRobots(newRobots);
    } else {
      setFilteredRobots(
        newRobots.filter((robot: any) => {
          return (
            robot.email.includes(e.target.value) ||
            robot.name.includes(e.target.value) ||
            robot.title.includes(e.target.value) ||
            robot.address.includes(e.target.value)
          );
        })
      );
    }
  };

  return (
    <div className="home">
      <div className="robo-page">
        <div className="">
          <SearchIcon className="search-icon" />
          <input type={"text"} className="search-bar" onChange={handleSearch} />
        </div>

        <div className="">
          {filteredRobots.length ? (
            filteredRobots.map((robot: any, index: number) => {
              const selected = selectedCards[`${robot.email}`] ? true : false;

              return (
                <>
                  <div className={`${selected ? "card-active" : ""} card`}>
                    <img
                      src={robot.avatar}
                      className="card-image"
                      alt="robot"
                    />
                    <div className="card-description ">
                      <div className="card-details">
                        <div className="">
                          <h3 className="title">{robot.name}</h3>
                          <p className="subtitle">{robot.title}</p>
                          <p className="location">
                            {robot.address}, {robot.city}
                          </p>
                        </div>

                        <p className="email">{robot.email}</p>
                      </div>

                      {selected ? <></> : <hr className="solid-hr" />}

                      <p
                        className="btn"
                        onClick={() => selectCard(robot.email, robot)}
                      >
                        {selected ? "SKIP SELECTION" : "MARK AS SIUTABLE"}
                      </p>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>
              <p>No Robots Found</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
