export type OptionValue = {
    label: string
    action?: () => void
    keywords?: Array<string>
} | null

export type DOMMessage = {
    type: "GET_DOM"
}

export type DOMMessageResponse = {
    title: string
    headlines: Array<string>
}
