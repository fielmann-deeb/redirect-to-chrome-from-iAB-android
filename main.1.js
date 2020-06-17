const openCurrentLinkInChrome = function () {
  window.open(
    "googlechrome://navigate?url=" + encodeURIComponent(window.location.href),
    "_system"
  );
};
document.addEventListener("DOMContentLoaded", function (event) {
  const chromeBtn = document.getElementById("open-in-chrome-btn");
  chromeBtn.addEventListener("click", openCurrentLinkInChrome);
});
