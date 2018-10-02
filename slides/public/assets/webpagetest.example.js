var GitHubApi = require("@octokit/rest");
var webPageTest = require("webpagetest");

if (
  (process.env.WEBPAGETEST_API_KEY ||
    process.env.TEST_URL ||
    process.env.GIT_TOKEN) === undefined
) {
  throw new Error(
    "The script hasnt run since you did not provide a webpagtest api key a test url and a git token"
  );
}

const wpt = new webPageTest(
  "www.webpagetest.org",
  process.env.WEBPAGETEST_API_KEY
);

const myRepo = "blazinglyfast";
const myOwner = "inovex";
const testURL = process.env.TEST_URL;
let dataAsMarkdown = "";

// init github
let github = new GitHubApi();

github.authenticate({ type: "oauth", token: process.env.GIT_TOKEN });

wpt.runTest(
  testURL,
  {
    video: true,
    pollResults: 5,
    timeout: 1000,
    lighthouse: true
  },
  function(err, result) {
    console.log(err || result);
    if (result) {
      convertToMarkdown(result);
    }
  }
);

const convertToMarkdown = result => {
  dataAsMarkdown = `
# WebpageTest report
* run id: ${result.data.id}
* URL testid: ${result.data.testUrl}
* Summary of the test: ${result.data.summary}
* location where the test has run: ${result.data.location}
* from run parameter: ${result.data.from}
* connectivity: ${result.data.connectivity}
* runs: ${result.data.runs}, successFullRuns: ${result.data.successfulFVRuns}`;
  /**
   * fetch all commits and append webpagetest markdown data to the latest
   */
  github.repos
    .getCommits({ owner: myOwner, repo: myRepo })
    .then(allCommits => {
      return github.repos.createCommitComment({
        owner: myOwner,
        repo: myRepo,
        sha: allCommits.data[0].sha,
        body: dataAsMarkdown
      });
    })
    .catch(error => {
      console.log(`ERROR could either not get commits of the repo ${myRepo} of the owner ${myOwner}
            or could not sent the commit to the repositorie ERRORMSG: ${error}
            `);
    });
};
