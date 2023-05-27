const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    search();
  }
});

const search = () => {
  const input = searchInput.value;

  window.location.href =
    "https://www.google.com/search?q=" +
    input +
    "&oq=" +
    input +
    "&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIQCAEQLhjHARixAxjRAxiABDIKCAIQLhixAxiABDIKCAMQLhixAxiABDINCAQQABiDARixAxiABDIHCAUQLhiABDIHCAYQABiABDIKCAcQABixAxiABDIKCAgQABixAxiABDIHCAkQABiPAtIBCDYyMmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8";
};

const overflow = document.querySelector(".overflow");
searchInput.addEventListener("click", () => {
  let searchBar = document.querySelector(".search-bar");
  searchBar.style.height = "450px";
  overflow.style.visibility = "visible";
});

const searchTextArea = document.querySelector(".search-text-area");

searchInput.addEventListener("blur", () => {
  let searchBar = document.querySelector(".search-bar");
  searchBar.style.height = "45px";
  overflow.style.visibility = "hidden";
});

const menuIcon = document.querySelector(".circleMenu");
menuIcon.addEventListener("mouseover", (e) => {
  hoverMenuIcon();
});

menuIcon.addEventListener("mouseout", (e) => {
  hoverOutMenuIcon();
});

const hoverMenuIcon = () => {
  let menuPosition = document.querySelector(".menu-icon");
  let positionLeftMenu = menuPosition.getBoundingClientRect().left - 38;

  const googleApps = document.querySelector(".hover-googleApps");
  googleApps.style.left = positionLeftMenu.toString() + "px";
  googleApps.style.visibility = "visible";
  console.log(positionLeft);
};

const hoverOutMenuIcon = () => {
  const googleApps = document.querySelector(".hover-googleApps");
  googleApps.style.visibility = "hidden";
};

const userIcon = document.querySelector(".user-icon");
userIcon.addEventListener("mouseover", (e) => {
  hoverUserIcon();
});

userIcon.addEventListener("mouseout", (e) => {
  hoverOutUserIcon();
});

const hoverUserIcon = () => {
  let userPosition = document.querySelector(".user-icon");
  let positionLeftMenu = userPosition.getBoundingClientRect().left - 100;

  const account = document.querySelector(".hover-account");
  account.style.left = positionLeftMenu.toString() + "px";
  account.style.visibility = "visible";
  console.log(positionLeft);
};

const hoverOutUserIcon = () => {
  const account = document.querySelector(".hover-account");
  account.style.visibility = "hidden";
};
