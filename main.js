searchSites = function(word){
  var query = word.selectionText;
  var website = window.location.host;
  chrome.tabs.create({url: "https://www.google.com/search?q=" + website + query});
  chrome.tabs.create({url: "https://duckduckgo.com/?q=!ducky+" + website + query});
};

chrome.contextMenus.create({
  title: "Open Article in New Tab",
  contexts:["selection", "editable"],
  onclick: searchSites
});
