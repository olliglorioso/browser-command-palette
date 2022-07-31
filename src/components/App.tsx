import React, { CSSProperties, SyntheticEvent, useState } from "react"
import "../styles/App.css"
import { options } from "../utils/options"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { OptionValue } from "../utils/types"
import { createFilterOptions } from "@mui/material/Autocomplete"
import { stateChangeHandler } from "../utils/utils"
import { search } from "../utils/actions"
import { MenuItem, PaletteMode, Paper, useMediaQuery } from "@mui/material"

function App() {
    const [text, setText] = useState("")
    const item = localStorage.getItem("local_mode")
    const localMode: PaletteMode | undefined = item ? (item as PaletteMode) : undefined
    const preferredMode: PaletteMode | undefined = useMediaQuery("(prefers-color-scheme: dark)") ? ("dark" as PaletteMode) : ("light" as PaletteMode)
    const [mode, setMode] = useState<PaletteMode | undefined>(localMode ? localMode : preferredMode)

    const onChange = async (_event: SyntheticEvent, value: OptionValue) => {
        if (value?.label === "" || !value?.label) return
        try {
            if (value?.label === "Update: Extension Dark Mode") {
                const newMode = mode === "dark" ? "light" : "dark"
                setMode(newMode), localStorage.setItem("local_mode", newMode)
            }
            const canContinue = await stateChangeHandler(value?.label || "", setText)
            if (canContinue) {
                value?.action?.(), window.close()
                return
            }
        } catch (e) {
            window.close()
            return
        }
    }

    const filterOptions = createFilterOptions({
        ignoreAccents: true,
        ignoreCase: true,
        trim: true,
        stringify: (option: OptionValue): string => `${option?.label} ${option?.label.replace(" ", "")} ${option?.label.replace(":", "")} ${option?.keywords?.join(" ")}` || "",
    })

    const searchSubmit = async () => {
        await search(text.substring(1)), window.close()
        return
    }

    const getOptionLabel = (option: OptionValue) => {
        if (!option) return ""
        if (option.label.includes("Update: Extension Dark Mode")) {
            if (mode === "dark") return "Update: Light Mode"
            return "Update: Dark Mode"
        }
        return option.label
    }

    const dark = "#282828",
        light = "#fff",
        backgroundColor = mode === "dark" ? dark : light,
        textColor = mode === "dark" ? light : dark

    const textFieldStyle: CSSProperties = {
        fontFamily: "georgia",
        paddingLeft: 16,
        border: `1px solid ${textColor}`,
        fontSize: 15,
        width: 600,
        color: textColor,
        backgroundColor,
        marginBottom: 0,
    }

    const menuItemStyle: CSSProperties = {
        fontFamily: textFieldStyle.fontFamily,
        fontSize: textFieldStyle.fontSize,
        backgroundColor,
        color: textColor,
        marginTop: 0,
        zIndex: 2,
        height: 30,
    }

    const paperComponentStyle: CSSProperties = {
        backgroundColor,
        zIndex: 1,
    }

    const placeholder = "Enter a command, or search by typing > or ."
    return (
        <div className="App" style={{ backgroundColor }}>
            {!text.includes(">") && !text.includes(".") ? (
                <>
                    <Autocomplete
                        disablePortal
                        className="Autocomplete"
                        popupIcon={false}
                        autoHighlight
                        openOnFocus
                        limitTags={7}
                        onChange={onChange}
                        inputValue={text}
                        size="small"
                        color={backgroundColor}
                        getOptionLabel={getOptionLabel}
                        filterOptions={filterOptions}
                        noOptionsText="No commands found"
                        ListboxProps={{ style: { minHeight: "300px", maxHeight: "300px" } }}
                        open
                        options={options.sort((a, b) => {
                            const textA = a.label.toLowerCase(),
                                textB = b.label.toLowerCase()
                            return textA < textB ? -1 : textA > textB ? 1 : 0
                        })}
                        autoComplete={true}
                        PaperComponent={(params) => <Paper {...params} sx={paperComponentStyle} variant="elevation" />}
                        renderOption={(params, option) => {
                            return (
                                <>
                                    <MenuItem {...params} sx={menuItemStyle} className="option">
                                        {getOptionLabel(option)}
                                    </MenuItem>
                                </>
                            )
                        }}
                        renderInput={(params) => {
                            return (
                                <TextField
                                    variant="standard"
                                    {...params}
                                    InputProps={{
                                        ...params.InputProps,
                                        style: textFieldStyle,
                                        disableUnderline: true,
                                    }}
                                    className="TextField"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)}
                                    autoFocus={true}
                                    placeholder={placeholder}
                                />
                            )
                        }}
                    />
                </>
            ) : (
                <>
                    <form onSubmit={searchSubmit} autoComplete="off">
                        <button type="submit"></button>
                        <TextField
                            className="TextField"
                            name="search"
                            variant="standard"
                            InputProps={{
                                style: textFieldStyle,
                                disableUnderline: true,
                            }}
                            size="small"
                            onChange={(e) => setText(e.target.value)}
                            autoFocus={true}
                            value={text}
                        />
                        <MenuItem style={menuItemStyle}>Search: {text.substring(1)}</MenuItem>
                    </form>
                </>
            )}
        </div>
    )
}

export default App
