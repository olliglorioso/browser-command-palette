import { closeAllWindows, closeTab, navigateTo, newTab, newWindow, reloadTab } from "./actions"
import { urls } from "./constants"

const openWebsites = Object.entries(urls).map(([key, value]) => {
    return { label: `Open: ${key}`, action: newTab.bind(this, value) }
})

const navigateToWebsites = Object.entries(urls).map(([key, value]) => {
    return { label: `Navigate To: ${key}`, action: navigateTo.bind(this, value) }
})
// Options for command palette in alphabetical order
export const options = [
    ...openWebsites,
    ...navigateToWebsites,
    { label: "Open: New Tab", action: newTab.bind(this, urls.Google) },
    { label: "Open: New Window", action: newWindow },

    { label: "Close: Current Tab", action: closeTab },
    { label: "Close: All Windows", action: closeAllWindows },

    { label: "Update: Reload Page", action: reloadTab },
    // The following are not working, but would be great to make them working.
    // { label: "Update: Mute Tab", action: muteTab },
    // { label: "Update: Unmute tab", action: unmuteTab },
]
