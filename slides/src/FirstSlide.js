// Import React
import React from "react";

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
  Text
} from "spectacle";

// mySlides.js
export default class FirstSlide extends Component {
  render() {
    return (
      <div hasSlideChildren>
        <Slide>
          WAS IST WEB PERFORMANCE Web Performance Startup time, , , Time to
          Interactive ... , respone zeit während der Anwendungspahse
          <List ordered start={2} type="A">
            <ListItem>Item 1</ListItem>
            <ListItem>boot up time</ListItem>
            <ListItem>first meaningful paint</ListItem>
            <ListItem>Frames per second</ListItem>
            hier sollte eine Liste von ganz vielen Metriken kommen
          </List>
        </Slide>
        <Slide>
          Warum ist Web-Performance so wichtig
          <List ordered start={2} type="A">
            <ListItem>Gerätediversität speziell emerging markets</ListItem>
            <ListItem>Größe der Websiten HTTP archive </ListItem>
            <ListItem>Letztlich auch Umsatz</ListItem>
            <ListItem>Frames per second</ListItem>
            hier sollte eine Liste von ganz vielen Metriken kommen
          </List>
        </Slide>

        <Slide>
          Setting the baseline
          <List ordered start={2} type="A">
            <ListItem>1. PerformanceBudget</ListItem>
            <ListItem>2. Messen</ListItem>
            <ListItem>3. Kontrollieren</ListItem>
          </List>
          <Quote>
            Performance budgets are critical because they keep everybody on the
            same page. They create a culture of shared enthusiasm for constantly
            improving the user experience and team accountability. Addy Osmani
          </Quote>
        </Slide>

        <Slide>
          CI CD tools und integration
          <List ordered start={2} type="A">
            <ListItem>Lighthouse</ListItem>
            <ListItem>WebpageTest</ListItem>
            <ListItem>Size-Limit, bundlesize</ListItem>
          </List>
        </Slide>
        <Slide>
          Zeige Probleme auf
          <List ordered start={2} type="A">
            <ListItem>Slack integration</ListItem>
            <ListItem>Philips Hue lamps</ListItem>
            <ListItem>Teste auf low level geräten</ListItem>

            <ListItem>
              Performance Kultur 1 mal im Monat nur mit 2G surfen...
            </ListItem>
          </List>
        </Slide>
        <Slide>
          Die besten Ressourcen die ich bisher 2018 gesehenhabe
          <List ordered start={2} type="A">
            <ListItem>
              https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4
            </ListItem>
            <ListItem>
              {" "}
              https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/
            </ListItem>
            <ListItem>
              https://speedcurve.com/blog/your-javascript-hurts/
            </ListItem>
          </List>
        </Slide>
      </div>
    );
  }
}
