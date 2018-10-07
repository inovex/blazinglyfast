// require github and webpagetest node module
var GitHubApi = require("@octokit/rest");
var webPageTest = require("webpagetest");
// make sure you store the tokens in a secure place and paste them when running this cript
if (
  (process.env.WEBPAGETEST_API_KEY ||
    process.env.TEST_URL ||
    process.env.GIT_TOKEN) === undefined
) {
  throw new Error(
    "The script failed since you did not provide a WEBPAGETEST_API_KEY a TEST_URL and a GIT_TOKEN"
  );
}

const testURL = process.env.TEST_URL;
const webpagetestKey = process.env.WEBPAGETEST_API_KEY;
const gitToken = process.env.GIT_TOKEN;

// init webpagetest
const wpt = new webPageTest("www.webpagetest.org", webpagetestKey);
// define github repo
const myRepo = "blazinglyfast";
const myOwner = "inovex";

// init github
let github = new GitHubApi();

