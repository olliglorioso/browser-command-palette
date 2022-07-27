import { bingSearch, closeAllWindows, closeTab, duckDuckGoSearch, googleSearch, newTab, newWindow, reloadTab, yahooSearch } from "./actions"

// Options for command palette in alphabetical order
export const options = [
    { label: "Open: Google", action: googleSearch },
    { label: "Open: DuckDuckGo", action: duckDuckGoSearch },
    { label: "Open: Bing", action: bingSearch },
    { label: "Open: Yahoo", action: yahooSearch },
    { label: "Open: Empty Tab", action: newTab },
    { label: "Open: Empty Window", action: newWindow },
    { label: "Close: Current Tab", action: closeTab },
    { label: "Close: All Windows", action: closeAllWindows },
    { label: "Reload: Page", action: reloadTab },
]
