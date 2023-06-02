"use strict";

const header = document.querySelector(".header");
const body = document.querySelector("body");
const totalFollowers = document.querySelector(".total-followers");
const darkModeText = document.querySelector(".dark-mode-text");
const usernameText = document.querySelectorAll(".username-text");
const followersText = document.querySelectorAll(".followers-text");
const descriptionText = document.querySelectorAll(".description-text");
const number = document.querySelectorAll(".number");
const followersCard = document.querySelectorAll(".followers-card");
const gridCard = document.querySelectorAll(".grid-card");
const overviewTitle = document.querySelector(".overview-today");
const switcher = document.querySelector(".switcher");

let isDarkMode = true;

const switchMode = function () {
  if (isDarkMode) {
    lightModeOn();
  } else {
    darkModeOn();
  }
};

const darkModeOn = function () {
  header.style.backgroundColor = "#20222f";
  body.style.backgroundColor = "#1d1f29";
  body.style.color = "#fff";
  totalFollowers.style.color = "#8c98c6";
  darkModeText.style.color = "#8c98c6";
  usernameText.forEach((element) => {
    element.style.color = "#8c98c6";
  });
  followersText.forEach((element) => {
    element.style.color = "#8c98c6";
  });
  descriptionText.forEach((element) => {
    element.style.color = "#8c98c6";
  });
  number.forEach((element) => {
    element.style.color = "#fff";
  });
  followersCard.forEach((element) => {
    element.style.backgroundColor = "#252b42";
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "#333a55";
    });
    element.addEventListener("mouseout", function () {
      element.style.backgroundColor = "#252b42";
    });
  });
  gridCard.forEach((element) => {
    element.style.backgroundColor = "#252b42";
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "#333a55";
    });
    element.addEventListener("mouseout", function () {
      element.style.backgroundColor = "#252b42";
    });
  });
  overviewTitle.style.color = "#fff";

  isDarkMode = true;
};

const lightModeOn = function () {
  header.style.backgroundColor = "#F7F9FF";
  body.style.backgroundColor = "#Fff";
  body.style.color = "#1d1f29";
  totalFollowers.style.color = "#63687d";
  darkModeText.style.color = "#63687d";
  usernameText.forEach((element) => {
    element.style.color = "#63687d";
  });
  followersText.forEach((element) => {
    element.style.color = "#63687d";
  });
  descriptionText.forEach((element) => {
    element.style.color = "#63687d";
  });
  number.forEach((element) => {
    element.style.color = "#1d1f29";
  });
  followersCard.forEach((element) => {
    element.style.backgroundColor = "#F1F3FA";
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "#E1E4F0";
    });
    element.addEventListener("mouseout", function () {
      element.style.backgroundColor = "#F1F3FA";
    });
  });
  gridCard.forEach((element) => {
    element.style.backgroundColor = "#F1F3FA";
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "#E1E4F0";
    });
    element.addEventListener("mouseout", function () {
      element.style.backgroundColor = "#F1F3FA";
    });
  });
  overviewTitle.style.color = "#63687D";

  isDarkMode = false;
};

switcher.addEventListener("change", switchMode);
