import { Dispatch, SetStateAction } from "react"
import { getCpuAmount, getDisplayName, getPrimaryDisplayInfo } from "./actions"

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
export const stateChangeHandler = async (label: string, setText: Dispatch<SetStateAction<string>>): Promise<boolean> => {
    if (!label) return true
    if (label.includes("Info: Number of CPUs")) {
        const processorAmount = await getCpuAmount()
        setText(processorAmount.toString())
        return false
    } else if (label.includes("Info: Display Name")) {
        const displayName = await getDisplayName()
        setText(displayName)
        return false
    } else if (label.includes("Info: Is This Primary Display")) {
        const isIt = await getPrimaryDisplayInfo()
        setText(isIt === true ? "Yes" : "No")
        return false
    }
    return true
}

export const validUrl = (str: string) => {
    const pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
        "i"
    ) // fragment locator
    return !!pattern.test(str)
}
