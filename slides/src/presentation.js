// Import React
import React from "react";

import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Image,
  Text,
  S,
  Typeface,
  TableRow,
  Table,
  TableBody,
  TableHeaderItem,
  TableItem,
  TableHeader
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

//own styles
import "./styles.css";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#262626",
    quaternary: "#ff4081",
    header: "#fd0",
    invovexprimary: "#262626",
    inovexdarkblue: "#063c7e",
    inovexgreen: "#9ccd00",
    inovexblue: "#00b0f0"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
    header: {
      name: "Pacifico",
      googleFont: true,
      styles: ["400", "700i", "900"]
    }
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
          bgColor="primary"
          className="slides-bg"
          progressColor={"inovexdarkblue"}
        >
          <Heading
            size={1}
            lineHeight={1}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Blazingly fast blog
          </Heading>
          <Text margin="50px 0 0" role="img" aria-label="lightning and rocket">
            ⚡️🚀🚗💨
          </Text>
          <Text margin="50px 0 0" textColor="invovexprimary" size={1} fit bold>
            How to build a high-performance web app and how to keep it top
            notch.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={4}
            lineHeight={1}
            textColor="white"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              fontWeight: "900"
            }}
          >
            Basics
          </Heading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          progressColor={"inovexdarkblue"}
        >
          <Heading
            size={4}
            textFont="header"
            textColor="inovexdarkblue"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Web Performance?
          </Heading>
          <Text margin="50px 0 0" textColor="invovexprimary" size={1} fit bold>
            Focus on <S type="italic">Loading</S> but there are a lot more
            metrics like <S type="strikethrough">FPS</S> or{" "}
            <S type="strikethrough">Runtime performance</S> .
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          progressColor={"inovexdarkblue"}
        >
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Three main loading phases!
          </Heading>
          <Image src={"./assets/speed-metrics.png"} />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          progressColor={"inovexdarkblue"}
        >
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Webperf Matters!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize={50}>
              The browser transformed from being an awesome interactive document
              viewer into being the worlds most advanced widerly distributed
              application runtime.
            </Quote>
            <Cite textColor="inovexblue">Tom Dale 2013</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          progressColor={"inovexdarkblue"}
        >
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Constantly increasing website size
          </Heading>
          <Table margin="50px 0 0">
            <TableHeader>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem>2011</TableHeaderItem>
                <TableHeaderItem>2018</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>Mobile</TableItem>
                <TableItem>~200 KB</TableItem>
                <TableItem>
                  ~1200 KB <span style={{ color: "red" }}>(▲770.0%)</span>
                </TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Desktop</TableItem>
                <TableItem>~500 KB</TableItem>
                <TableItem>
                  ~1500 KB <span style={{ color: "red" }}>(▲220.0%)</span>
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        {/*  GIF FUNNY 50MB SITE THE VERGE */}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Devicediversity
          </Heading>
          <Text margin="30px 0 0" textColor="tertiary" size={1}>
            <span role="img" aria-label="lightning and rocket">
              💻 📱
            </span>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Slow and fast loading Webapps
          </Heading>
          <List textColor="inovexprimary">
            <ListItem>Is it happening</ListItem>
            <ListItem>Is it visible</ListItem>
            <ListItem>Is it usable</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={4}
            lineHeight={1}
            textColor="white"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              fontWeight: "900"
            }}
          >
            1. Defining your Webperf Budget
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            RAIL
          </Heading>
          <Text margin="50px 0 0">
            Googles RAIL model tries to give you an abstract basic metric. Based
            on perception, human psychology research and technical
            considerations the first meaningful paint in under{" "}
            <S type="bold">1s</S> and to be interactiv in under{" "}
            <S type="bold">5s</S>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua",
              margin: "50px 0 "
            }}
          >
            Time to Interactive
          </Heading>
          <Image
            width="80%"
            alt="time to interactive calculation"
            src={"./assets/tti.svg"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua",
              margin: "50px 0 "
            }}
          >
            Our performance budget
          </Heading>
          <Text>~170 KB (gz)</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={4}
            lineHeight={1}
            textColor="white"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              fontWeight: "900"
            }}
          >
            2. Create a CI/CD Pipeline
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua",
              margin: "50px 0 "
            }}
          >
            Lightweight tools
          </Heading>
          <Image src={"./assets/bundlesize.png"} />
          <Image src={"./assets/size-limit.svg"} />
        </Slide>
        {/* eslint-disable */}
        <CodePane
          lang="json"
          source={require("raw-loader!../assets/bundlesize.example")}
          margin="20px auto"
          overflow="overflow"
        />
        {/* eslint-enable */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={4}
            lineHeight={1}
            textColor="white"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              fontWeight: "900"
            }}
          >
            3. Measure
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={4}
            lineHeight={1}
            textColor="white"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              fontWeight: "900"
            }}
          >
            4. Improve
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={4}
            lineHeight={1}
            textColor="white"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              fontWeight: "900"
            }}
          >
            5. Repeat
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" className="slides-bg">
          <Heading
            size={1}
            lineHeight={1}
            textColor="inovexdarkblue"
            textFont="header"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Thanks
          </Heading>
          <Text margin="50px 0 0" textColor="invovexprimary" size={3}>
            I am <a href="https://twitter.com/JCofman">@jcofman</a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
