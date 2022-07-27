import { urls } from "./constants"
import { getAllWindows, getCurrentTab } from "./utils"

/* global chrome */
export const newTab = (url?: string) => {
    window.open(url || urls.Google, "_blank")
}

export const newWindow = (url?: string) => {
    window.open(url || urls.Google, "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes")
}

export const reloadTab = async () => {
    const tab = await getCurrentTab()
    chrome.tabs.reload(tab.id as number)
}

export const closeTab = async () => {
    const tab = await getCurrentTab()
    chrome.tabs.remove(tab.id as number)
}

export const closeAllWindows = async () => {
    const windows = await getAllWindows()
    for (let i = 0; i < windows.length; i++) {
        chrome.windows.remove(windows[i].id as number)
    }
}

export const navigateTo = async (url?: string) => {
    // const tab = await getCurrentTab()
    chrome.tabs.update({ url })
}

export const muteTab = async () => {
    const tab = await getCurrentTab()
    chrome.tabs.update(tab.id as number, { muted: true })
}

export const unmuteTab = async () => {
    const tab = await getCurrentTab()
    chrome.tabs.update(tab.id as number, { muted: false })
}
