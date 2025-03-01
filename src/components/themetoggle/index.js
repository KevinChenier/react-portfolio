import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import solaire from "../../assets/gifs/solaire.gif"


const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme ); 
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      <img className="solaire" src={solaire} style={{ width: "2em", height: "2em" }}  ></img>
    </div>
  );
};
{/*<div  className="nav_ac"* onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
*/}
export default Themetoggle;
