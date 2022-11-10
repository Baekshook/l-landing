import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import Pricing from "@components/Pricing";
import theme from "./theme";
import "@fontsource/nanum-gothic";
import Fonts from "./font";
import { useState } from "react";
import useObserver from "./hooks/useObserver";

function App() {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(1);

  const handleVisible = (index) => {
    return () => {
      setCurrentVisibleIndex(index);
    };
  };

  const heroRef = useObserver(handleVisible(0));
  const featuresRef = useObserver(handleVisible(1));
  const statisticsRef = useObserver(handleVisible(2));
  const pricingRef = useObserver(handleVisible(3));
  const heroTwoRef = useObserver(handleVisible(4));
  
  const handleClickNavLink = (index) => {
 const refs = [heroRef, featuresRef, statisticsRef, pricingRef, heroTwoRef];
 refs[index].current.scrollIntoView({
  behavior: "smooth",
  inline: "center",
  block: "center"
 })
  }
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar currentVisibleIndex={currentVisibleIndex} onClickNavLink={handleClickNavLink} />
      <Hero ref={heroRef} />
      <Features ref={featuresRef}/>
      <Statistics ref={statisticsRef}/>
      <Pricing ref={pricingRef}/>
      <HeroTwo ref={heroTwoRef}/>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
