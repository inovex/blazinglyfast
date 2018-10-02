# ⚡️ How to build a high-performance web app and how to keep it top notch ⚡️

[![Build Status](https://travis-ci.org/inovex/blazinglyfast.svg?branch=master)](https://travis-ci.org/inovex/blazinglyfast)

[![Lighthouse score: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=Perf&compact&cachebust)](https://github.com/inovex/blazinglyfast/)
[![Lighthouse score: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=PWA&compact&cachebust)](https://github.com/inovex/blazinglyfast/)
[![Lighthouse score: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=A11y&compact&cachebust)](https://github.com/inovex/blazinglyfast/)
[![Lighthouse score: 85/100](https://lighthouse-badge.appspot.com/?score=85&category=Best Practices&compact&cachebust)](https://github.com/inovex/blazinglyfast/)

This is a sample repo which uses [gatsby](https://github.com/gatsbyjs/gatsby) starter-blog and shows how you can leverage modern performance quality assurance technqiues on how to start with a fast and performant blog and how to keep it to notch. You can use most of the tools with all other web project based on vue, react angular or vanilla js.

While there are a lot of awesome resources on how to improve performance leveraging modern techniques like code splitting or the PRPL-pattern... etc. I couldn't find a lot of information on how to build an automated ci pipeline to make sure that you don't regret on performance or at least you can decide wheter these changes are worth the performance degration. This repo covers some steps on how you can use awesome open source tools and include them in your CI pipeline.

## Setting the baseline

1. hwhat is web performance -> RAIL (https://developers.google.com/web/fundamentals/performance/rail)
   There are a lot of buzzwords when talking about loading performance but you can leverage loading into three different user timings.

2. Define a performance budget
   alex russel link
3. Tooling

lightweit tooling
vscode plugin cost
bundleuthopia
bundle-size
size-limit

4. CI / CD

make issues as obvious as possible use badges they not only look good. make pipeline fails use your light bulbs :D

5. Measure

6. Fix

7. Repeat

8. Its a never ending story try to make web performance issues as obvious as possible
   Before you can

## Further Links and some Tools worth checking out

[speedcurve]()
[calibre]()
[sitespeed.io]()
[garie]()
[webpagetest] https://www.webpagetest.org/

| Name               | Website                                                 | Kind                    | Costs |
| ------------------ | ------------------------------------------------------- | ----------------------- | ----- |
| Yslow              | http://yslow.org/                                       | Browsertool             | free  |
| Catchpoint         | http://www.catchpoint.com/                              | Synthetic und RUM       | paid  |
| Lighthouse         | https://github.com/GoogleChrome/lighthouse              | Synthetic / Browsertool | free  |
| Webpagetest        | https://www.webpagetest.org/                            | Synthetic               | free  |
| Speedcurve         | https://speedcurve.com/inovex/site/                     | Synthetic               | paid  |
| Pagespeed insights | https://developers.google.com/speed/pagespeed/insights/ | Synthetic               | free  |
| Gtmetrix           | https://gtmetrix.com                                    | Synthetic               | paid  |
| Pingdom            | https://tools.pingdom.com/                              | Synthetic               | paid  |
| Websitespeedranker | http://websitespeedranker.com/                          | Synthetic               | free  |
| Keycdn             | https://tools.keycdn.com/speed                          | Synthetic               | free  |
| Statuscake         | https://www.statuscake.com/                             | Synthetic               | paid  |
| Calibre            | https://calibreapp.com/                                 | Synthetic               | paid  |
| Raventools         | https://raventools.com/site-auditor/                    | Synthetic               | paid  |
| Dareboost          | https://www.dareboost.com/en/home                       | Synthetic               | paid  |
| Varvy              | https://varvy.com/pagespeed/                            | Synthetic               | free  |
| Uptrends           | https://www.uptrends.com/tools/website-speed-test       | Synthetic               | paid  |
| Dotcom             | https://www.dotcom-tools.com/website-speed-test.aspx    | Synthetic               | paid  |
| Pagescoring        | http://www.pagescoring.com/website-speed-test/          | Synthetic               | free  |
| Yellowlab          | http://yellowlab.tools/                                 | Synthetic               | free  |
| Chrome devtools    | in Chrome                                               | Browsertool             | free  |
| Sucuri             | https://performance.sucuri.net/                         | Synthetic               | free  |
| Pagelocity         | http://pagelocity.com/                                  | Synthetic               | paid  |
| Sitespeed io       | https://www.sitespeed.io/                               | Synthetic               | free  |
| Wesbiteoptimzation | http://www.websiteoptimization.com/services/analyze/    | Synthetic               | free  |
| Ocagate            | http://www.octagate.com/service/SiteTimer/              | Synthetic               | free  |
| Loadimpact         | https://loadimpact.com/                                 | Synthetic               | paid  |
| Ping on me         | https://www.pingon.me/                                  | Synthetic               | paid  |
| Dynatrace          | https://www.dynatrace.com/                              | Synthetic and RUM       | paid  |
| Webhint            | https://github.com/webhintio/hint                       | Synthetic               | paid  |
| Gary               | https://github.com/boyney123/garie                      | Synthetic               | free  |
| Speedtracker       | https://github.com/speedtracker/speedtracker            | Synthetic               | free  |
