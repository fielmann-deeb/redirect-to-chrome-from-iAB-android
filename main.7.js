const openCurrentLinkInChrome = function () {
  window.open(
    "googlechrome://navigate?url=" + encodeURIComponent(window.location.href),
    "_system"
  );
};
document.addEventListener("DOMContentLoaded", function (event) {
  // const chromeBtn = document.getElementById("open-in-chrome-btn");
  // chromeBtn.addEventListener("click", openCurrentLinkInChrome);

  const chromeIntentAnchor = document.getElementById("open-in-chrome-intent");
  chromeIntentAnchor.href =
    "intent://" +
    window.location.href.replace("https://", "") +
    "#Intent;scheme=https;package=com.android.chrome;end";

  const chooseBrowserIntentAnchor = document.getElementById(
    "choose-your-browser-intent"
  );
  chooseBrowserIntentAnchor.href =
    "intent://" +
    window.location.host +
    window.location.pathname +
    "#Intent;scheme=http;action=android.intent.action.VIEW;end;";
});
