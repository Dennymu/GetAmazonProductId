
var button = document.getElementById("button");
var input = document.getElementsByClassName("copy-area")[0];
button.addEventListener("click", function(e) {
  chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) {
    var url = tabs[0].url;
    if (!url.includes("amazon")) { return; }
    if (url.includes("/product/")) {
      url = url.substring(url.indexOf("product") + 8);
    } else if (url.includes("/gp/")) {
      url = url.substring(url.indexOf("/gp/") + 4);
    } else if (url.includes("/dp/")) {
      url = url.substring(url.indexOf("/dp/") + 4);
    }
    if (url.indexOf("/") > -1) {
      url = url.substring(0, url.indexOf("/"));
    } else if (url.indexOf("?") > -1) {
      url = url.substring(0, url.indexOf("?"));
    }
    input.setAttribute("value", url);
    console.log(input)
    var copy = document.querySelector(".copy-area");
    copy.select();
    document.execCommand("copy");
  });
});
