import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect, $ } from "@wdio/globals";

import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";
import jobDetailsPage from "../pageobjects/jobDetails.page.js";

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  await expect(SecurePage.flashAlert).toBeExisting();
  await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

// Step definitions
Given(/^User Naviage to geniehealthcare (\w+) page$/, async (homePath) => {
  await browser.url(`https://www.geniehealthcare.com/#/${homePath}`);
  expect(browser).toHaveUrl(`https://www.geniehealthcare.com/#/${homePath}`);
});

When(/^User Click on "([^"]*)" tab in the menu$/, async (getTabName) => {
  await (await $(`//a[text()='${getTabName}']`)).click();
  await driver.refresh();
});

Then(
  /^User verify "([^"]*)" dashboard is opened in new tab$/,
  async function (dashboardText) {
    const expectedText = await $(`//h2[text()="${dashboardText}"]`);
    await (await expectedText).isDisplayed();
  }
);

When(/^User Click on first job Id$/, async () => {
  await browser.pause(7000);

  await browser.switchWindow("Jobs");

  const getFirstID = await (
    await $("//table//tbody//tr[2]//td[2]//a")
  ).getText();

  let clickOnJobID = await $(
    `//table//tbody//tr[2]//td[2]//a[contains(@href,'#/job/job/${getFirstID}')]`
  );

  await clickOnJobID.click();
});

Then(
  /^User able to see Job Details screen for first job id is displayed$/,
  async () => {
    await browser.pause(4000);
    await browser.switchWindow("Job");

    const getFirstJobIDValue = await (await $("//h2[1]")).getText();
    expect(getFirstJobIDValue).toEqual("Job 1174721");
  }
);

Then(
  /^User verify JobId, State, City, Shift and Specialty Job details screen matches Jobs dashboard for given job id$/,
  async function () {
    const verifyFirstJobState = await $("//span[text()='New Hope']").getText();
    const verifyFirstJobID = await (await $("//h2[1]")).getText();
    const verifyFirstJobCity = (await $("//*[text()='Minnesota']")).getText();
    const verifyFirstJobSpecialty = (
      await $("//*[text()=' Medical Assistant (MA)']")
    ).getText();
    const verifyFirstJobShift = await (
      await $("//*[text()='7:00 AM 5:30 PM']")
    ).getText();

    expect(verifyFirstJobID).toEqual("Job 1174721");
    expect(await verifyFirstJobState).toEqual("New Hope");
    expect(await verifyFirstJobCity).toEqual("Minnesota");
    expect(await verifyFirstJobSpecialty).toEqual("Medical Assistant (MA)");
    expect(await verifyFirstJobShift).toEqual("7:00 AM 5:30 PM");
    await browser.closeWindow();
  }
);
