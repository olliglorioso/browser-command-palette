import { bingSearch, copyUrl, duckDuckGoSearch, googleSearch, newTab, newWindow, scrollToTop, yahooSearch } from "./actions"

// Options for command palette in alphabetical order
export const options = [
    { label: "Google search", action: googleSearch },
    { label: "DuckDuckGo search", action: duckDuckGoSearch },
    { label: "Bing search", action: bingSearch },
    { label: "Yahoo search", action: yahooSearch },
    { label: "New tab", action: newTab },
    { label: "New window", action: newWindow },
    { label: "Search bar", action: () => console.log("No actions yet") },
    { label: "Copy url", action: copyUrl },
    { label: "Copy location", action: copyUrl },
]
