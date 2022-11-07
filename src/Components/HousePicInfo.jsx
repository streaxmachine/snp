import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gsap } from "gsap";
import { setHouseShowInfo } from "../redux/actions";

const HousePicInfo = () => {
  const dispatch = useDispatch();
  const showInfo = useSelector((state) => state.houseInfo);

  const handleClick = () => {
    gsap.to(".place-information", { x: 0, duration: 1 });
    setTimeout(() => {
      dispatch(setHouseShowInfo(false));
    }, 1000);
  };

  useEffect(() => {
    if (showInfo) {
      gsap.to(".place-information", { x: -300, duration: 1 });
    }
  }, [showInfo]);

  return (
    <>
      {showInfo ? (
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
