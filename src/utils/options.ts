import { closeAllWindows, closeTab, navigateTo, muteTab, newTab, newWindow, reloadTab, unmuteTab } from "./actions"
import { urls } from "./constants"

// Options for command palette in alphabetical order
export const options = [
    { label: "Open: Google", action: newTab.bind(urls.Google) },
    { label: "Open: DuckDuckGo", action: newTab.bind(urls.DuckDuckGo) },
    { label: "Open: Bing", action: newTab.bind(urls.Bing) },
    { label: "Open: Yahoo", action: newTab.bind(urls.Yahoo) },
    { label: "Open: New Tab", action: newTab.bind(urls.Google) },
    { label: "Open: New Window", action: newWindow },

    { label: "Navigate To: Google", action: navigateTo.bind(urls.Google) },
    { label: "Navigate To: Yahoo", action: navigateTo.bind(urls.Yahoo) },
    { label: "Navigate To: DuckDuckGo", action: navigateTo.bind(urls.DuckDuckGo) },
    { label: "Navigate To: Bing", action: navigateTo.bind(urls.Bing) },
    { label: "Navigate To: Custom", action: (url?: string) => navigateTo.bind(url) },

    { label: "Close: Current Tab", action: closeTab },
    { label: "Close: All Windows", action: closeAllWindows },

    { label: "Update: Reload Page", action: reloadTab },
    { label: "Update: Mute Tab", action: muteTab }, // Not working
    { label: "Update: Unmute tab", action: unmuteTab }, // Not working
]
