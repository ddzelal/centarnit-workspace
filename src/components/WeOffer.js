import React, { useEffect } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import Aos from "aos";
import 'aos/dist/aos.css'

function WeOffer() {

  useEffect(()=> {
    Aos.init({duration:2000})
  }, [])

  return (
    <div className="weoffer-container">
      <div data-aos="fade-right" className="card-offer">
        <div className="h1-offer">
          <WifiIcon />
          <h3>High-Speed Wireless</h3>
        </div>
        <div className="text-offer">
          <p>
            Sed ut prepricetesf unde ominus late nute se vegsacc sedod sites
            prepricetesf unde ominus late Sed ut prepricetesf unde ominus late
            nute se vegsacc sedod sites prepricetesf unde ominus lat Sed ut
            prepricetesf unde ominus late nute se vegsacc sedod sites
            prepricetesf unde ominus latnute se vegsacc sedod sites
          </p>
        </div>
      </div>

      {/* card */}

      <div className="card-offer" data-aos="fade-down">
        <div className="h1-offer">
          <WifiIcon />
          <h3>High-Speed Wireless</h3>
        </div>
        <div className="text-offer">
          <p>
            Sed ut prepricetesf unde ominus late nute se vegsacc sedod sites
            prepricetesf unde ominus late Sed ut prepricetesf unde ominus late
            nute se vegsacc sedod sites prepricetesf unde ominus lat Sed ut
            prepricetesf unde ominus late nute se vegsacc sedod sites
            prepricetesf unde ominus latnute se vegsacc sedod sites
          </p>
        </div>
      </div>
      {/* card */}

      <div className="card-offer" data-aos="fade-left">
        <div className="h1-offer">
          <WifiIcon />
          <h3>High-Speed Wireless</h3>
        </div>
        <div className="text-offer">
          <p>
            Sed ut prepricetesf unde ominus late nute se vegsacc sedod sites
            prepricetesf unde ominus late Sed ut prepricetesf unde ominus late
            nute se vegsacc sedod sites prepricetesf unde ominus lat Sed ut
            prepricetesf unde ominus late nute se vegsacc sedod sites
            prepricetesf unde ominus latnute se vegsacc sedod sites
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeOffer;
