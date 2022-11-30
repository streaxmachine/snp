import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gsap } from "gsap";
import { setHouseShowInfo } from "../redux/actions";

const HousePicInfo = () => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.sideBar);

  const handleClick = () => {
    gsap.to(".place-information", { x: 0, duration: 1 });
    setTimeout(() => {
      dispatch(setHouseShowInfo());
    }, 1000);
  };

  useEffect(() => {
    if (sideBar.houseInfo) {
      gsap.to(".place-information", { x: -300, duration: 1 });
    }
  }, [sideBar]);

  return (
    <>
      {sideBar.houseInfo ? (
        <div>
          <div className="place-information">
            <button className="button-31" onClick={handleClick}>
              CLOSE
            </button>
            <div style={{ textDecoration: "none" }}>
              <div className="snp-info">
                Это проект, в котором digital создателям было предложено создать
                независимую связь с натуральным камнем, стирающую разделение
                между первоисточником и материалом.
              </div>
              <a
                href="https://mfisher-apollonas.com"
                target="blank"
                style={{ color: "black" }}
              >
                Welcome to The Quarry House
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HousePicInfo;
