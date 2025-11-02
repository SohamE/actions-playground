import * as core from "@actions/core";
import * as github from "@actions/github";
try {
  const message = core.getInput("message");
  core.info(`Your Message: ${message}`);
} catch (error) {
  core.setFailed("Caught error");
  core.setFailed(error.message);
}
