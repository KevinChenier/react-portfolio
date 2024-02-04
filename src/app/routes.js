import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { Hovercraft } from "../pages/portfolio/hovercraft";
import { HorrorGame } from "../pages/portfolio/horrorgame";
import { ConcertVR } from "../pages/portfolio/concertvr";
import { VRClassification } from "../pages/portfolio/vrclassification";
import { Unknown9Awakening } from "../pages/portfolio/unknown9awakening";
import { AtaxiaTools } from "../pages/portfolio/ataxiatools";
import { ChemistryLab } from "../pages/portfolio/chemistrylab";
import { VRTreadmill } from "../pages/portfolio/vrtreadmill";
import { HoloPuncture } from "../pages/portfolio/holopuncture";
import { PointingAvatar } from "../pages/portfolio/pointingavatar";
import { Avator } from "../pages/portfolio/avator";
import { SpaceSurvivors } from "../pages/portfolio/spacesurvivors";
import { ICANBox } from "../pages/portfolio/icanbox";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/hovercraft" element={<Hovercraft />} />
        <Route path="/portfolio/horrorgame" element={<HorrorGame />} />
        <Route path="/portfolio/concertvr" element={<ConcertVR />} />
        <Route path="/portfolio/vrclassification" element={<VRClassification />} />
        <Route path="/portfolio/unknown9awakening" element={<Unknown9Awakening />} />
        <Route path="/portfolio/chemistrylab" element={<ChemistryLab />} />
        <Route path="/portfolio/ataxiatools" element={<AtaxiaTools />} />
        <Route path="/portfolio/vrtreadmill" element={<VRTreadmill />} />
        <Route path="/portfolio/holopuncture" element={<HoloPuncture />} />
        <Route path="/portfolio/pointingavatar" element={<PointingAvatar />} />
        <Route path="/portfolio/avator" element={<Avator />} />
        <Route path="/portfolio/spacesurvivors" element={<SpaceSurvivors />} />
        <Route path="/portfolio/icanbox" element={<ICANBox />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
