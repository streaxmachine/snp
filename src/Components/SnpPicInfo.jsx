import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gsap } from "gsap";
import { setSnpShowInfo } from "../redux/actions";

const SnpPicInfo = () => {
  const dispatch = useDispatch();
  const showInfo = useSelector((state) => state.snpInfo);

  const handleClick = () => {
    gsap.to(".place-information", { x: 0, duration: 1 });
    setTimeout(() => {
      dispatch(setSnpShowInfo(false));
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
