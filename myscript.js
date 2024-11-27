"use strict"

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".navigation");

navToggle.addEventListener("click", () => {
    navigation.classList.toggle("show-nav");
    navToggle.classList.toggle("rotate");
})