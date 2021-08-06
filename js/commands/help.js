function help() {
    const article = commandsClass.getAllCommandArgs(1, true);
    if (article) {
        switch (article) {
            case "echo":
                userInterfaceClass.outputColor(
                    "Echoes the provided string back.<br><br>" +
                    "Usage: [ECHO ]{[STRING]}<br><br>" +
                    "[STRING]&nbsp;&nbsp;&nbsp;&nbsp;Required - The string that gets echoed back.",
                    ``, `var(--blue)`
                );
                break;
            case "ver":
                userInterfaceClass.outputColor(
                    "Provides the current running build of NetcommandsClass.<br><br>" +
                    "Usage: [VER]",
                    ``, `var(--blue)`
                );
                break;
            case "prompt":
                userInterfaceClass.outputColor(
                    "Decides if the prompt is ON or OFF.<br><br>" +
                    "Usage: [PROMPT] {[TOGGLE]}<br><br>" +
                    "[TOGGLE]&nbsp;&nbsp;&nbsp;&nbsp;Optional - Accepts two values: ON and OFF. This value desides the state of the prompt output.",
                    ``, `var(--blue)`
                );
                break;
            case "error":
                userInterfaceClass.outputColor(
                    "For testing - Sends out an error message.<br><br>" +
                    "Usage: [ERROR]",
                    ``, `var(--blue)`
                );
                break;
            case "set":
                userInterfaceClass.outputColor(
                    "Set a variable that can be called back by everything in NetcommandsClass.<br><br>" +
                    "Usage: [ERROR] {[VARIABLE]} {[VALUE]}<br><br>" +
                    "[VARIABLE]&nbsp;&nbsp;Required - The name of the variable to be set<br>" +
                    "[VALUE]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required - The value of the variable to be set<br>",
                    ``, `var(--blue)`
                );
                break;
            case "cls":
                userInterfaceClass.outputColor(
                    "Clears the screen.<br><br>" +
                    "Usage: [CLS]",
                    ``, `var(--blue)`
                );
                break;
            case "reload":
                userInterfaceClass.outputColor(
                    "Reloads NetCMD and the theme, and also clears the history list.<br><br>" +
                    "Usage: [RELOAD]",
                    ``, `var(--blue)`
                );
                break;
            case "dir":
                userInterfaceClass.outputColor(
                    "Shows the contents of the current or specified directory.<br><br>" +
                    "Usage: [DIR] {[DIRECTORY]}<br><br>" +
                    "[DIRECTORY]&nbsp;&nbsp;Optional - The specified directory that will be read.",
                    ``, `var(--blue)`
                );
                break;
            case "cd":
                userInterfaceClass.outputColor(
                    "Changes the currenDir to the specified directory.<br><br>" +
                    "Usage: [CD] {[DIRECTORY]}<br><br>" +
                    "[DIRECTORY]&nbsp;&nbsp;Required - The specified directory that will be changed to.",
                    ``, `var(--blue)`
                );
                break;
            case "rf":
                userInterfaceClass.outputColor(
                    "Prints out the contents of a specified file.<br><br>" +
                    "Usage: [RF] {[FILE]}<br><br>" +
                    "[FILE]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required - The relative path the file to be read.",
                    ``, `var(--blue)`
                );
                break;
            case "colors":
                userInterfaceClass.outputColor(
                    "For testing - displays an example string in every color.<br><br>" +
                    "Usage: [COLORS]",
                    ``, `var(--blue)`
                );
                break;
            case "intro":
                userInterfaceClass.outputColor(
                    "Displays the intro text you see when you start NetcommandsClass.<br><br>" +
                    "Usage: [INTRO]",
                    ``, `var(--blue)`
                );
                break;
            case "theme":
                userInterfaceClass.outputColor(
                    "Changes the theme to a pre-made theme file.<br><br>" +
                    "Usage: [THEME] {[NAME]}<br><br>" +
                    "[NAME]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required - The name of the theme that will be applied.",
                    ``, `var(--blue)`
                );
                break;
            case "ls":
                userInterfaceClass.outputColor(
                    "For testing - shows every localStorage item under each other.<br><br>" +
                    "Usage: [LS]",
                    ``, `var(--blue)`
                );
                break;
            case "help":
                userInterfaceClass.outputColor(
                    "Gives detailed information about a command, or shows available built-in commands.<br><br>" +
                    "Usage: [HELP ]{[COMMAND]}<br><br>" +
                    "[COMMAND]&nbsp;&nbsp;&nbsp;&nbsp;Optional - If recognized gives detailed information about a command.",
                    ``, `var(--blue)`
                );
                break;
            case "rand":
                userInterfaceClass.outputColor(
                    "Gives back a random number with a max of the number specified.<br><br>" +
                    "Usage: [RAND ]{[MAX]}<br><br>" +
                    "[MAX]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required - The highest possible value.",
                    ``, `var(--blue)`
                );
                break;
            case "history":
                userInterfaceClass.outputColor(
                    "Shows a list of all the commands you entered.<br><br>" +
                    "Usage: [HISTORY]",
                    ``, `var(--blue)`
                );
                break;
            case "exit":
                userInterfaceClass.outputColor(
                    "Closes the current running instance of NetcommandsClass.<br><br>" +
                    "Usage: [EXIT]",
                    ``, `var(--blue)`
                );
                break;
            case "setls":
                userInterfaceClass.outputColor(
                    "Sets the specified localStorage item to the specified value.<br><br>" +
                    "Usage: [ERROR] {[ITEM]} {[VALUE]}<br><br>" +
                    "[ITEM]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required - The name of the item to be set<br>" +
                    "[VALUE]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required - The value of the item to be set<br>",
                    ``, `var(--blue)`
                );
                break;
            case "remls":
                userInterfaceClass.outputColor(
                    "Removes the specified localStorage item.<br><br>" +
                    "Usage: [ERROR] {[ITEM]}<br><br>" +
                    "[ITEM]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Required - The name of the item to be removed<br>",
                    ``, `var(--blue)`
                );
                break;
            case "zoom":
                userInterfaceClass.outputColor(
                    "Sets the zoom level of NetcommandsClass.<br><br>" +
                    "Usage: [ZOOM] {[LEVEL]}<br><br>" +
                    "[LEVEL]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Optional - The zoom level to set to.<br>",
                    ``, `var(--blue)`
                );
                break;
            default:
                userInterfaceClass.outputColor(
                    "[Error]: The specified command could not be found. For a list of commands, enter \"HELP\" without arguments."
                )
                break;
        }
    } else {
        userInterfaceClass.outputColor(
            `[ECHO]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Echoes back the given string.<br>` +
            `[VER]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gives back the current version.<br>` +
            `[PROMPT]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turns on or off the prompt<br>` +
            `[ERROR]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For testing - Sends out an error message<br>` +
            `[SET]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Set a variable<br>` +
            `[CLS]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clear the screen<br>` +
            `[RELOAD]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reloads NetCMD and the theme, and also clears the history list.<br>` +
            `[DIR]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows the contents of the current or specified directory.<br>` +
            `[CD]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Changes the current directory.<br>` +
            `[RF]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Prints the contents of the specified file.<br>` +
            `[COLORS]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For testing - displays an example string in every color.<br>` +
            `[INTRO]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Displays the intro text you see when you start NetcommandsClass.<br>` +
            `[THEME]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Changes the theme to a pre-made theme file.<br>` +
            `[LS]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shows the contents of LocalStorage.<br>` +
            `[HELP]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Displays this list or detailed information about a command.<br>` +
            `[HISTORY]&nbsp;&nbsp;&nbsp;&nbsp;Shows a list of the commands you entered.<br>` +
            `[SETLS]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sets the specified localStorage item to the specified value.<br>` +
            `[ZOOM]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sets the zoom level of NetcommandsClass.<br>` +
            `[REMLS]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Removes the specified localStorage item<br>` +
            `[EXIT]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Closes the current running instance<br>`,
            ``, `var(--blue)`
        );
    }
    userInterfaceClass.prompt();
}