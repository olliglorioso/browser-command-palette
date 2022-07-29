import React, { CSSProperties, SyntheticEvent, useState } from "react"
import "../styles/App.css"
import { options } from "../utils/options"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { OptionValue } from "../utils/types"
import { createFilterOptions } from "@mui/material/Autocomplete"
import { stateChangeHandler } from "../utils/utils"
import { search } from "../utils/actions"
import { MenuItem } from "@mui/material"

function App() {
    const [text, setText] = useState("")

    const onChange = async (_event: SyntheticEvent, value: OptionValue) => {
        if (value?.label === "" || !value?.label) return
        try {
            const canContinue = await stateChangeHandler(value?.label || "", setText)
            if (canContinue) {
                value?.action(), window.close()
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
        stringify: (option: OptionValue): string => `${option?.label} ${option?.keywords?.join(" ")}` || "",
    })

    const searchSubmit = async () => {
        await search(text.substring(1)), window.close()
        return
    }

    const textFieldStyle: CSSProperties = {
        fontFamily: "georgia",
        paddingLeft: 16,
        border: "1px solid black",
        fontSize: 15,
    }

    const menuItemStyle: CSSProperties = {
        fontFamily: textFieldStyle.fontFamily,
        fontSize: textFieldStyle.fontSize,
        height: 30,
    }

    const placeholder = "Enter a command, or search by typing >olliglorioso or .olliglorioso."
    return (
        <div className="App">
            {!text.includes(">") && !text.includes(".") ? (
                <>
                    <Autocomplete
                        disablePortal
                        className="Autocomplete"
                        popupIcon={false}
                        autoHighlight={true}
                        limitTags={7}
                        onChange={onChange}
                        inputValue={text}
                        size="small"
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
                        renderOption={(params, option, state) => {
                            console.log(params, option, state)
                            return (
                                <MenuItem {...params} style={menuItemStyle}>
                                    {option?.label}
                                </MenuItem>
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
