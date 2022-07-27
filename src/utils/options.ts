import { closeAllWindows, closeTab, navigateTo, muteTab, newTab, newWindow, reloadTab, unmuteTab } from "./actions"
import { urls } from "./constants"

// Options for command palette in alphabetical order
export const options = [
    { label: "Open: Google", action: newTab.bind(this, urls.Google) },
    { label: "Open: DuckDuckGo", action: newTab.bind(this, urls.DuckDuckGo) },
    { label: "Open: Bing", action: newTab.bind(this, urls.Bing) },
    { label: "Open: Yahoo", action: newTab.bind(this, urls.Yahoo) },
    { label: "Open: Facebook", action: newTab.bind(this, urls.Facebook) },
    { label: "Open: Wikipedia", action: newTab.bind(this, urls.Wikipedia) },
    { label: "Open: YouTube", action: newTab.bind(this, urls.Youtube) },
    { label: "Open: New Tab", action: newTab.bind(this, urls.Google) },
    { label: "Open: New Window", action: newWindow },

    { label: "Navigate To: Google", action: navigateTo.bind(this, urls.Google) },
    { label: "Navigate To: Yahoo", action: navigateTo.bind(this, urls.Yahoo) },
    { label: "Navigate To: DuckDuckGo", action: navigateTo.bind(this, urls.DuckDuckGo) },
    { label: "Navigate To: Bing", action: navigateTo.bind(this, urls.Bing) },
    { label: "Navigate To: Facebook", action: navigateTo.bind(this, urls.Facebook) },
    { label: "Navigate To: Wikipedia", action: navigateTo.bind(this, urls.Wikipedia) },
    { label: "Navigate To: Youtube", action: navigateTo.bind(this, urls.Youtube) },

    { label: "Close: Current Tab", action: closeTab },
    { label: "Close: All Windows", action: closeAllWindows },

    { label: "Update: Reload Page", action: reloadTab },
    // The following are not working, but would be great to make them working.
    // { label: "Update: Mute Tab", action: muteTab },
    // { label: "Update: Unmute tab", action: unmuteTab },
]
