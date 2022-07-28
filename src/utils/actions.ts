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

export const navigateTo = async (_url?: string) => {
    const tab = await getCurrentTab()
    await chrome.tabs.update(tab.id as number, { url: _url })
}

export const muteTab = async () => {
    const tab = await getCurrentTab()
    await chrome.tabs.update(tab.id as number, { muted: true })
}

export const unmuteTab = async () => {
    const tab = await getCurrentTab()
    await chrome.tabs.update(tab.id as number, { muted: false })
}

export const getCpuAmount = async (): Promise<number> => {
    const cpuInfo = await chrome.system.cpu.getInfo()
    const numOfProcessors = cpuInfo.numOfProcessors
    return numOfProcessors
}

export const getDisplayName = async (): Promise<string> => {
    const displayInfo = await chrome.system.display.getInfo()
    const name = displayInfo.length > 1 ? displayInfo.map((dis) => dis.name).join(", ") : displayInfo[0].name
    return name
}

export const getPrimaryDisplayInfo = async (): Promise<boolean> => {
    const displayInfo = await chrome.system.display.getInfo()
    const isIt = displayInfo[0].isPrimary
    return isIt
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const search = async (text: string): Promise<void> => {
    chrome.search.query({ text }, () => {
        return
    })
}
