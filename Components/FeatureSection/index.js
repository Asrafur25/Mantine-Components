import React from "react";
import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
} from "@mantine/core";
import featureImage1 from "../../public/kobby-mendez-d0oYF8hm4GI-unsplash.jpg";

import featureImage2 from "../../public/2.png";

import featureImage3 from "../../public/3.png";

import featureImage4 from "../../public/4.png";


const data = [
  {
    img: featureImage1,
    title: "Pharmacists",
    description:
      "Azurill can be seen bouncing and playing on its big, rubbery tail",
  },
  {
    img: featureImage2,
    title: "Lawyers",
    description: "Fans obsess over the particular length and angle of its arms",
  },
  {
    img: featureImage3,
    title: "Bank owners",
    description:
      "They divvy up their prey evenly among the members of their pack",
  },
  {
    img: featureImage4,
    title: "Others",
    description: "Phanpy uses its long nose to shower itself",
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 8],
    letterSpacing: 0.5,
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    padding: 5,
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },
}));

const FeaturesImages = () => {
  const { classes } = useStyles();

  const items = data.map((item) => (
    <div className={classes.item} key={item.img}>
      <ThemeIcon
        variant="light"
    /*     className={classes.itemIcon} */
        size={60}
        radius="md"
      >
        <Image src={item.img} />
      </ThemeIcon>

      <div>
        <Text weight={700} size="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text color="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>Use cases</Text>

      <Title className={classes.title} order={2}>
        PharmLand is <span className={classes.highlight}>not</span> just for
        pharmacists
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" sx={{textAlign:"center"}}>
          Its lungs contain an organ that creates electricity. The crackling
          sound of electricity can be heard when it exhales. Azurill’s tail is
          large and bouncy. It is packed full of the nutrients this Pokémon
          needs to grow.
        </Text>
      </Container>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 30 }}
      >
        {items}
      </SimpleGrid>
    </Container>
  );
};
export default FeaturesImages;
