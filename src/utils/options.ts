import { closeAllWindows, closeTab, goBack, goForward, navigateTo, newTab, newWindow, reloadTab, setZoom } from "./actions"
import { urls } from "./constants"

const openWebsites = Object.entries(urls).map(([key, value]) => {
    return {
        label: `Open: ${key}`,
        keywords: [`open ${key}`, `${key} open`],
        action: newTab.bind(this, value),
    }
})

const navigateToWebsites = Object.entries(urls).map(([key, value]) => {
    return {
        label: `Go To: ${key}`,
        keywords: [`navigate to ${key}`, `go to ${key}`, `goto ${key}`, `goto${key}`, `${key} navigate to `, `${key} go to`, `${key} goto`, `navigateto ${key}`],
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
        keywords: ["empty", "empty tab", "new empty tab", "newtab", "emptytab", "newemptytab"],
        action: newTab.bind(this, urls.Google),
    },
    {
        label: "Update: Extension Dark Mode",
        keywords: ["dark mode", "dark mode extension", "light mode", "update extension light mode", "lght", "drk", "drka", "darka", "litgh", "ligth", "darkmode", "lightmode", "modes"],
        action: () => null,
    },
    {
        label: "Open: New Window",
        keywords: ["empty", "empty window", "new empty window", "newwindow", "emptywindow", "newemptywindow", "windows"],
        action: newWindow,
    },
    {
        label: "Info: Number of CPUs",
        keywords: ["cpu_amount", "get number of cpus", "get number of processors", "processors", "cpu amount", "processor amount", "numberofcpus", "numberofprocessors", "cpuamount"],
    },
    {
        label: "Info: Display Name",
        keywords: ["screen name", "namm", "display's", "displays'", "displayname"],
    },
    {
        label: "Close: Current Tab",
        keywords: ["turn off", "currenttab", "thistab", "this tab", "closecurrenttab", "closethistab"],
        action: closeTab,
    },
    {
        label: "Close: All Windows",
        keywords: ["turn off", "close all windows", "allwindows", "allwins", "closeallwindows", "closeallwinds", "closewindows", "close window", "close windows", "windowclose", "close chrome", "close google chrome", "closegooglechrome", "close google", "close browser", "closebrowser", "stop browser", "stop chrome", "stopchrome", "stopgooglechrome"],
        action: closeAllWindows,
    },
    {
        label: "Update: Reload Page",
        keywords: ["refresh", "refresh page", "re fresh", "re", "realoadpage", "refreshpage", "pagereload", "pagerefresh", "paage"],
        action: reloadTab,
    },
    {
        label: "Update: Go Back",
        keywords: ["updategoback", "goback", "recent page", "recentpage", "last page", "lastpage"],
        action: goBack,
    },
    {
        label: "Update: Go Forward",
        keywords: ["forwward", "nextpage", "next page", "nexti", "seuraava", "goto", "following page"],
        action: goForward,
    },
    {
        label: "Update: Zoom In x2",
        keywords: ["zoom to 100", "zooming", "zoom out", "zooom"],
        action: setZoom.bind(this, "2"),
    },
    // The following are not working, but would be great to make them working.
    // { label: "Update: Mute Tab", action: muteTab },
    // { label: "Update: Unmute tab", action: unmuteTab },
]
