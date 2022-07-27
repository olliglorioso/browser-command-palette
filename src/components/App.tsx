import React, { SyntheticEvent } from "react"
import "../styles/App.css"
import { options } from "../utils/options"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

type OptionValue = {
    label: string
    action: any
} | null

function App() {
    const onChange = (_event: SyntheticEvent, value: OptionValue) => {
        try {
            value?.action()
            window.close()
            return
        } catch (e) {
            console.log(e)
            window.close()
            return
        }
    }

    return (
        <div className="App">
            <Autocomplete
                disablePortal
                popupIcon={false}
                autoHighlight={true}
                limitTags={7}
                onChange={onChange}
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
                    return <TextField {...params} autoFocus={true} placeholder="Enter a command" />
                }}
            />
        </div>
    )
}

export default App
