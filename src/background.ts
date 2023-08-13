chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if(tab.status === "complete"){
		console.log(`Tabed onUpdated`)
		console.log(tabId, changeInfo, tab)
	}
});

// chrome.bookmarks.getRecent(10, (results) => {
// 	console.log(`bookmarks:`, results)
// });

console.log(`this is background service worker`)

export {}