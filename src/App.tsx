import "./App.css";
import EarthCanvas from "./components/earth";
import { motion } from "framer-motion";
import { slideIn } from "../src/utils/motion";
import StarsCanvas from "./components/star";
import Card from "./components/card";

function App() {
  return (
    <>
      <div style={{ position: "relative", width: "100vw", height: "90vh" }}>
        <StarsCanvas />

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          style={{
            display: "flex",
            width: "100vw",
            height: "100%",
          }}
        >
          <Card />
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
}

export default App;
