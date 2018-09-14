// Import React
import React from "react";

import { VictoryPie } from "victory";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
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
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
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
        <Slide transition={["zoom"]} bgColor="primary" className="slides-bg">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <span role="img" aria-label="lightning and rocket">
              ⚡️🚀🚗💨
            </span>{" "}
            Blazingly fast{" "}
            <span role="img" aria-label="lightning and rocket">
              ⚡️🚀🚗💨
            </span>
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            How to build a high-performance web app and how to keep it top
            notch.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Web Performance
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Webperf Matters
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Constantly increasing website size
          </Heading>
          <Table>
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={4} textColor="secondary" caps>
            Devicediversity
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            <span role="img" aria-label="lightning and rocket">
              💻 📱
            </span>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
