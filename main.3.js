const openCurrentLinkInChrome = function () {
  window.open(
    "googlechrome://navigate?url=" + encodeURIComponent(window.location.href),
    "_system"
  );
};
document.addEventListener("DOMContentLoaded", function (event) {
  const chromeBtn = document.getElementById("open-in-chrome-btn");
  chromeBtn.addEventListener("click", openCurrentLinkInChrome);

  const intentAnchor = document.getElementById("open-in-chrome-intent");
  intentAnchor.href =
    "intent://" +
    window.location.host +
    window.location.pathname +
    "#Intent;scheme=http;action=android.intent.action.VIEW;end;";
});
