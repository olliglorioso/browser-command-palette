import React, { SyntheticEvent, useState } from "react"
import "../styles/App.css"
import { options } from "../utils/options"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { OptionValue } from "../utils/types"
import { createFilterOptions } from "@mui/material/Autocomplete"
import { stateChangeHandler } from "../utils/utils"

function App() {
    const [text, setText] = useState("")

    const onChange = async (_event: SyntheticEvent, value: OptionValue) => {
        try {
            const canContinue = await stateChangeHandler(value?.label || "", setText)
            if (canContinue) {
                value?.action, window.close()
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

    return (
        <div className="App">
            <Autocomplete
                disablePortal
                popupIcon={false}
                autoHighlight={true}
                limitTags={7}
                onChange={onChange}
                inputValue={text}
                filterOptions={filterOptions}
                ListboxProps={{ style: { minHeight: "300px", maxHeight: "300px" } }}
                noOptionsText="No commands found"
                open
                options={options.sort((a, b) => {
                    const textA = a.label.toLowerCase()
                    const textB = b.label.toLowerCase()
                    return textA < textB ? -1 : textA > textB ? 1 : 0
                })}
                autoComplete={true}
                renderInput={(params) => {
                    return <TextField {...params} value={text} onChange={(e) => setText(e.target.value)} autoFocus={true} placeholder="Enter a command" />
                }}
            />
        </div>
    )
}

export default App
