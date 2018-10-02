// Import React
import React from "react";

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
  Layout,
  Fill,
  Text,
  Appear,
  S,
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
          <Text margin="50px 0 0">
            <span role="img" aria-label="lighnting rocket car emoji">
              ⚡️🚀🚗💨
            </span>
          </Text>
          <Text margin="50px 0 0" textColor="invovexprimary" size={1} fit bold>
            How to build a high-performance web app and how to keep it top
            notch.
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
            textFont="header"
            textColor="inovexdarkblue"
            style={{
              transform: "skew(0, -4deg) rotateY(20deg)",
              background: "aqua"
            }}
          >
            Who am I?
          </Heading>
          <Layout>
            <Fill>
              <Layout>
                <Fill>
                  <Text margin="50px 0 0" role="img" aria-label="inovex logo">
                    Frontend developer @
                    <Image
                      alt="inovex logo"
                      src="https://www.inovex.de/typo3conf/ext/contentelements/Resources/Public/img/logo.svg"
                    />
                  </Text>
                </Fill>
                <Fill>
                  <Text
                    margin="50px 0 0"
                    role="img"
                    style={{
                      transform: "skew(0, -4deg) rotateY(20deg)",
                      fontWeight: "900"
                    }}
                  >
                    Jacob Cofman
                    <ul className="socialIcons">
                      <li>
                        {" "}
                        <a href="https://twitter.com/JCofman">
                          <svg
                            aria-labelledby="simpleicons-twitter-icon"
                            fill="#262626"
                            height="32"
                            width="32"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title id="simpleicons-twitter-icon">
                              Twitter icon
                            </title>
                            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="https://github.com/JCofman">
                          <svg
                            aria-labelledby="simpleicons-github-icon"
                            fill="#262626"
                            height="32"
                            width="32"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title id="simpleicons-github-icon">
                              GitHub icon
                            </title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <svg
                          aria-labelledby="simpleicons-gmail-icon"
                          fill="#262626"
                          height="32"
                          width="32"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title id="simpleicons-gmail-icon">Gmail icon</title>
                          <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
                        </svg>
                      </li>
                    </ul>
                  </Text>
                </Fill>
              </Layout>

              <Text margin="50px 0 0" role="img">
                <span role="img" aria-label="activities emoji">
                  🏐 💻 ⛺️ 🌲 🏃
                </span>
              </Text>
            </Fill>
          </Layout>
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
            Devicediversity
          </Heading>
          <Text margin="50px 0 0" textColor="tertiary" size={1}>
            <span role="img" aria-label="lightning and rocket">
              💻 📱
            </span>
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
              background: "aqua",
              margin: "50px 0 "
            }}
          >
            Nobody likes to wait!{" "}
          </Heading>
          <Image
            width="70%"
            alt="destroying computer"
            src={"./assets/hateToWait1.gif"}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          textColor="tertiary"
          progressColor={"inovexdarkblue"}
        >
          <Image
            width="70%"
            alt="destroying computer second gif"
            src={"./assets/hateToWait2.gif"}
          />
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
            margin="50px 0"
          >
            Slow and fast loading Webapps
          </Heading>
          <video width="640" height="480" controls>
            <source src="./assets/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <iframe
            src="https://www.webpagetest.org/video/view.php?id=180831_09af639265624a324c17019d22f816eee85800bf&embed=1&width=816&height=592"
            width="816"
            height="592"
          /> */}
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
            <span role="img" aria-label="women avoid gesture emoji">
              🙅
            </span>{" "}
            So how to avoid that{" "}
            <span role="img" aria-label="awomen avoid gesture emoji">
              🙅
            </span>
          </Heading>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="secondary"
          textColor="primary"
        >
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
          <Text>~170 KB (gzip)</Text>
          <List>
            <Appear>
              <ListItem>
                React ~40 KB (gzip) | Angular ~65 KB (gzip) | Vue ~30 KB (gzip){" "}
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="secondary"
          textColor="primary"
        >
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
            Make it fail!{" "}
          </Heading>
          <Text>
            placeholder why gif ... warum sollte man seine pipeline failen
            lassen wtf?
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
            Lightweight tools
          </Heading>
          <Layout>
            <Fill>
              <Image src={"./assets/bundlesize.png"} />
              <a href="https://github.com/siddharthkp/bundlesize">Bundlesize</a>
            </Fill>
            <Fill>
              <Image width="50%" src={"./assets/size-limit.svg"} />
              <a href="https://github.com/ai/size-limit">Size-Limit</a>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          {/* eslint-disable */}
          <CodePane
            lang="json"
            source={require("raw-loader!./bundlesize.example.json")}
            margin="20px auto"
            overflow="overflow"
          />
          {/* eslint-enable */}
          <List>
            <Appear>
              <ListItem>
                <span role="img" aria-label="hot fire emoji">
                  🔥 use{" "}
                </span>
                <a href="https://github.com/mysticatea/npm-run-all">
                  {" "}
                  npm-run-all
                </a>{" "}
                <span role="img" aria-label="hot fire emoji">
                  🔥
                </span>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="secondary"
          textColor="primary"
        >
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
        <Slide transition={["fade"]} bgColor="primary" className="slides-bg">
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
            Measure !== Measure
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <span role="img" aria-label="people family emoji">
                  👪 use{" "}
                </span>{" "}
                Real user monitoring (RUM)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                <span role="img" aria-label="computer emoji">
                  💻
                </span>{" "}
                Synthetic measurement
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="primary"
          className="slides-bg"
        >
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
            WebPagetest
          </Heading>
          <Image
            width="60%"
            alt="time to interactive calculation"
            src={"./assets/webpagetest.jpg"}
          />
          <a href="https://www.webpagetest.org/">WebPagetest</a>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="primary"
          className="slides-bg"
        >
          <Text>Create a github bot</Text>
          <Text>allow to acces project</Text>
          <Text>
            create your custom integration with github api your ci tool and your
            bot
          </Text>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="primary"
          className="slides-bg"
        >
          <Text>Speedtracker</Text>
          hier noc speedtracker logo und example zeigen.
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
        <Slide
          transition={["spin", "slide"]}
          bgColor="primary"
          className="slides-bg"
        >
          <Text>Use things like code-splitting... usw</Text>
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
            6. Make it fun
          </Heading>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="primary"
          className="slides-bg"
        >
          <Text margin="50px 0 0" textColor="invovexprimary" size={3}>
            SLACK integration
          </Text>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="primary"
          className="slides-bg"
        >
          <Text margin="50px 0 0" textColor="invovexprimary" size={3}>
            HUE integration
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
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
            7. Follow smart people!
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
            Follow smart people!.
          </Heading>
          <List>
            <ListItem>
              Addy Osmany{" "}
              <a href="https://twitter.com/addyosmani">@addyosmani</a>
            </ListItem>
            <ListItem>
              Ilya Grigorik{" "}
              <a href="https://twitter.com/igrigorik">@igrigorik</a>
            </ListItem>
            <ListItem>
              Lara Hogan{" "}
              <a href="https://twitter.com/lara_hogan">@lara_hogan</a>
            </ListItem>
            <ListItem>
              Rick Viscomi{" "}
              <a href="https://twitter.com/rick_viscomi">@rick_viscomi</a>
            </ListItem>
            <ListItem>
              Patrick Meenan{" "}
              <a href="https://twitter.com/patmeenan">@patmeenan</a>
            </ListItem>
            <ListItem>
              Tamy Everts <a href="https://twitter.com/tameverts">@tameverts</a>
            </ListItem>
            <ListItem>
              Steve Souders <a href="https://twitter.com/Souders">@Souders</a>
            </ListItem>
            <ListItem>
              Ben Schwarz{" "}
              <a href="https://twitter.com/benschwarz">@benschwarz</a>
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={["spin", "slide"]}
          bgColor="primary"
          className="slides-bg"
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
