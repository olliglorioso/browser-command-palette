export const getCurrentTab = async (): Promise<chrome.tabs.Tab> => {
    const queryOptions = { active: true, lastFocusedWindow: true }
    if (!chrome.tabs) throw new Error("No tabs open.")
    const [tab] = await chrome.tabs.query(queryOptions)
    return tab
}

export const getAllWindows = async (): Promise<Array<chrome.windows.Window>> => {
    const queryOptions = {}
    if (!chrome.windows) throw new Error("No windows open.")
    const windows = chrome.windows.getAll(queryOptions)
    return windows
}
