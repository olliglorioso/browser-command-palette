import { closeAllWindows, closeTab, navigateTo, newTab, newWindow, reloadTab } from "./actions"
import { urls } from "./constants"

const openWebsites = Object.entries(urls).map(([key, value]) => {
    return {
        label: `Open: ${key}`,
        keywords: [`open ${key}`, `new ${key}`, `new tab ${key}`, `${key} open`],
        action: newTab.bind(this, value),
    }
})

const navigateToWebsites = Object.entries(urls).map(([key, value]) => {
    return {
        label: `Navigate To: ${key}`,
        keywords: [`navigate to ${key}`, `go to ${key}`, `goto ${key}`, `${key} navigate to `, `${key} go to`, `${key} goto`],
        action: navigateTo.bind(this, value),
    }
})
// Options for command palette in alphabetical order.
// Secondary keywords are similar words to the label.
export const options = [
    ...openWebsites,
    ...navigateToWebsites,
    {
        label: "Open: New Tab",
        keywords: ["open new tab", "empty", "empty tab", "new empty tab"],
        action: newTab.bind(this, urls.Google),
    },
    {
        label: "Open: New Window",
        keywords: ["open new window", "empty", "empty window", "new empty window"],
        action: newWindow,
    },

    {
        label: "Close: Current Tab",
        keywords: ["close current tab", "turn off"],
        action: closeTab,
    },
    {
        label: "Close: All Windows",
        keywords: ["close all windows", "turn off", "close all windows"],
        action: closeAllWindows,
    },
    {
        label: "Update: Reload Page",
        keywords: ["reload page", "refresh", "refresh page", "re fresh", "re"],
        action: reloadTab,
    },
    // The following are not working, but would be great to make them working.
    // { label: "Update: Mute Tab", action: muteTab },
    // { label: "Update: Unmute tab", action: unmuteTab },
]
