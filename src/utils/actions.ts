import { urls } from "./constants"
import { getAllWindows, getCurrentTab } from "./utils"

/* global chrome */
export const newTab = (url?: string) => {
    window.open(url || urls.Google, "_blank")
}

export const newWindow = (url?: string) => {
    window.open(url || urls.Google, "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes")
}

export const reloadTab = async () => await chrome.tabs.reload()
export const goBack = async () => await chrome.tabs.goBack()
export const goForward = async () => await chrome.tabs.goForward()
export const navigateTo = async (_url?: string) => await chrome.tabs.update({ url: _url })

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

export const getCpuAmount = async (): Promise<string> => {
    const cpuInfo = await chrome.system.cpu.getInfo()
    const numOfProcessors = cpuInfo.numOfProcessors
    return numOfProcessors.toString()
}

export const getDisplayName = async (): Promise<string> => {
    const displayInfo = await chrome.system.display.getInfo()
    const name = displayInfo.length > 1 ? displayInfo.map((dis) => dis.name).join(", ") : displayInfo[0].name
    return name
}

export const setZoom = async (factor?: string) => {
    const f = factor ? parseFloat(factor) : 0
    chrome.tabs.setZoom(f)
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const search = async (text: string): Promise<void> => {
    chrome.search.query({ text }, () => {
        return
    })
}

// The following don't work.
// export const muteTab = async () => {
//     const tab = await getCurrentTab()
//     await chrome.tabs.update(tab.id as number, { muted: true })
// }

// export const unmuteTab = async () => {
//     const tab = await getCurrentTab()
//     await chrome.tabs.update(tab.id as number, { muted: false })
// }
