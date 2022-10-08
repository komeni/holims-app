import "bootstrap/dist/css/bootstrap.min.css";
import Quotes from "./Quotes";

import { Particles } from "@blackbox-vision/react-particles";

const App = () => {
  return (
    <>
      <Particles
        id="simple"
        width="auto"
        height="100vh"
        style={{
          backgroundColor: "transparent",
          position: "fixed",
          top: "0px",
          bottom: "0px",
          left: "0px",
          right: "0px",
          zIndex: "-1",
        }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <Quotes />
    </>
  );
};

export default App;
