searchGoogle = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://www.google.com/search?q=" + query});
  chrome.tabs.create({url: "https://duckduckgo.com/?q=!ducky" + query});
};

chrome.contextMenus.create({
  title: "Open Article in New Tab",
  contexts:["selection"],
  onclick: searchGoogle
});
