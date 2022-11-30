import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gsap } from "gsap";
import { setSnpShowInfo } from "../redux/actions";

const SnpPicInfo = () => {
  const dispatch = useDispatch();
  const sideBar = useSelector((state) => state.sideBar);

  const handleClick = () => {
    gsap.to(".place-information", { x: 0, duration: 1 });
    setTimeout(() => {
      dispatch(setSnpShowInfo());
    }, 1000);
  };

  useEffect(() => {
    if (sideBar.snpInfo) {
      gsap.to(".place-information", { x: -300, duration: 1 });
    }
  }, [sideBar]);

  return (
    <>
      {sideBar.snpInfo ? (
        <div>
          <div className="place-information">
            <button className="button-31" onClick={handleClick}>
              CLOSE
            </button>
            <div style={{ textDecoration: "none" }}>
              <div className="snp-info">CHECK OUR MAIN SITE</div>
              <a
                href="https://snp.agency/en"
                target="blank"
                style={{ color: "black" }}
              >
                SNP
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SnpPicInfo;
