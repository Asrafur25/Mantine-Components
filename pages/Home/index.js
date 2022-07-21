import { Container, Space } from "@mantine/core";
import React from "react";
import EmailBanner from "../../Components/EmailBanner";
import FeaturesImages from "../../Components/FeatureSection";
import HeroBullets from "../../Components/HeroBullets";
import Faq from "../../Components/Faq";
import ContactUs from "../../Components/ContactUs";
import ArticleCardVertical from "../../Components/Article_Card";
import NotFoundImage from "../../Components/ErrorPage";

const Home = () => {
  return (
    <>
      <HeroBullets />
      <FeaturesImages />
      <EmailBanner />
      <Faq />
      <ContactUs />
      <Space h="xl" />
      <ArticleCardVertical />
      <Space h="xl" />
      <NotFoundImage />
    </>
  );
};

export default Home;
