import { bingSearch, duckDuckGoSearch, googleSearch, newTab, newWindow, reload, yahooSearch } from "./actions"

// Options for command palette in alphabetical order
export const options = [
    { label: "Open: Google", action: googleSearch },
    { label: "Open: DuckDuckGo", action: duckDuckGoSearch },
    { label: "Open: Bing", action: bingSearch },
    { label: "Open: Yahoo", action: yahooSearch },
    { label: "Open: Empty Tab", action: newTab },
    { label: "Open: Empty Window", action: newWindow },
    { label: "Search bar", action: () => console.log("No actions yet") },
    { label: "Reload Extension", action: reload },
]
