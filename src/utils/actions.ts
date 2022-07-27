import { getAllWindows, getCurrentTab } from "./utils"

/* global chrome */
export const newTab = () => {
    window.open("https://www.google.com/", "_blank")
}

export const googleSearch = () => {
    window.open("https://www.google.com/", "_blank")
}

export const bingSearch = () => {
    window.open("https://www.bing.com/", "_blank")
}

export const duckDuckGoSearch = () => {
    window.open("https://duckduckgo.com/", "_blank")
}

export const yahooSearch = () => {
    window.open("https://www.yahoo.com/", "_blank")
}

export const newWindow = () => {
    window.open("https://www.google.com/", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes")
}

export const reloadTab = async () => {
    const currentTab = await getCurrentTab()
    chrome.tabs.reload(currentTab.id as number)
}

export const closeTab = async () => {
    const currentTab = await getCurrentTab()
    chrome.tabs.remove(currentTab.id as number)
}

export const closeAllWindows = async () => {
    const windows = await getAllWindows()
    for (let i = 0; i < windows.length; i++) {
        chrome.windows.remove(windows[i].id as number)
    }
}
