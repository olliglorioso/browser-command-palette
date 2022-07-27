export const newTab = () => {
    window.open("https://www.google.com/", "_blank")
}

export const googleSearch = () => {
    window.open("https://www.google.com/", "_blank")
}

export const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
}

export const scrollToTop = () => {
    window.scrollTo(0, 0)
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
