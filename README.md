# browser-command-palette

## Download here: [coming_soon](www.google.com)

---

## About

Chrome extension, which gives you a powerful command palette, like in VSCode! Open it with Ctrl/MacCtrl + Shift + P, or change to your own hotkey at [chrome://extensions/shortcuts](chrome://extensions/shortcuts). Has many different commands and you can do a search with your default engine by writing > or . as the first letter. Scroll to the end to see the full list of commands.

## Bug reports / enhancements / feature requests

Create a [new issue](https://github.com/olliglorioso/browser-command-palette/issues) with an appropriate label & good description.

## Contribute

The more commands, the better extension. This is why your help is needed with creating new commands, fixing bugs and improving UI. Guide:

1. Search for existing bugs / features requests from the GitHub's [issue-section](https://github.com/olliglorioso/browser-command-palette/issues).
    - Found something interesting? Continue to part 2.
    - Have your own idea? Open a new issue and continue to part 2.
2. Fork this repository.
3. Clone the forked repository & create a new branch starting with the issue number.
4. Make the required edits.
5. Commit with appropriate message & push to remote.
6. Make a pull request with the main-branch of the original repository as a target.
7. Wait for approval & comments & suggestions.
8. Once approved, merge to the main-branch.

Development environment setup: ```npm install``` and ```npm start``` and go to http://localhost:3000.

To try the extension in production-like environment,
first run ```npm run build``` and upload the generated build-folder to [chrome://extensions](chrome://extensions/shortcuts) as an unpacked file.

## Full list of commands

| Command name         | Description                                                                    |
|----------------------|--------------------------------------------------------------------------------|
| Close: All Windows   | Closes **all** Chrome windows that are open.                                   |
| Close: Current Tab   | Closes the current tab.                                                        |
| Go To: {website}*     | Navigates to {website}* in the current tab.                                   |
| Open: {website}*      | Opens {website}* in a new tab.                                                |
| Update: Dark Mode    | Changes the extension theme to dark mode. Visible on light mode.               |
| Update: Light Mode   | Changes the extension theme to light mode. Visible on dark mode.               |
| Info: Display Name   | Lists (separated by comma) all the user-friendly names of the displays in use. |
| Info: Number Of CPUs | Number of CPUs/processors in the computer.                                     |

*available websites are some popular websites listed in `src/utils/constants`.
