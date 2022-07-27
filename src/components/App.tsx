import React from "react"
import "../styles/App.css"
import { options } from "../utils/options"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

function App() {
    return (
        <div className="App">
            <Autocomplete
                disablePortal
                popupIcon={false}
                autoHighlight={true}
                limitTags={10}
                onChange={(_event, value) => {
                    try {
                        value?.action()
                    } catch (e) {
                        console.log(e)
                    }
                }}
                ListboxProps={{ style: { minHeight: "300px", maxHeight: "300px" } }}
                noOptionsText="No commands found"
                open
                options={options.sort((a, b) => {
                    const textA = a.label.toLowerCase()
                    const textB = b.label.toLowerCase()
                    return textA < textB ? -1 : textA > textB ? 1 : 0
                })}
                autoComplete={true}
                renderInput={(params) => <TextField {...params} autoFocus={true} placeholder="Enter a command" />}
            />
        </div>
    )
}

export default App
