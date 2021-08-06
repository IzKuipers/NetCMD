/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class commands {
    default() {
        userInterfaceClass.outputColor(`[Error]: "${globalCommandList[0]}" was not recognized.`, ``, "var(--red)");
    }

    echo() {
        let str = "";
        for (let i = 1; i < globalCommandList.length; i++) {
            str += `${globalCommandList[i]} `;
        }
        userInterfaceClass.output(str);
        userInterfaceClass.prompt();
    }

    ver() {
        /* userInterfaceClass.outputColor(`[███████████]`,`var(--color)`,`var(--blue)`);
        userInterfaceClass.outputColor(`[█]██[████████]`,`var(--color)`,`var(--blue)`);
        userInterfaceClass.outputColor(`[███]██[██████]`,`var(--color)`,`var(--blue)`);
        userInterfaceClass.outputColor(`[█]██[████]███[█]`,`var(--color)`,`var(--blue)`);
        userInterfaceClass.outputColor(`[███████████]`,`var(--color)`,`var(--blue)`); */
        userInterfaceClass.outputColor(`You are currently running build [${version}].`, ``, `var(--blue)`);
        userInterfaceClass.prompt();
    }

    prompt() {
        if (globalCommandList[1] === "on") {
            displayPrompt = true;
        } else if (globalCommandList[1] === "off") {
            displayPrompt = false;
        } else {
            userInterfaceClass.outputColor(`Environment Variable [displayPrompt] is set to [${displayPrompt}]`, ``, `var(--blue)`)
        }
        userInterfaceClass.prompt();
    }

    error() {
        console.error("Indeterminate Error: Testing Purposes");
        userInterfaceClass.prompt();
    }

    set() {
        const evr = globalCommandList[1];
        let str = "";

        for (let i = 2; i < globalCommandList.length; i++) {
            str += `${globalCommandList[i]} `;
        }
        str = str.trim();
        let doesContain = false;
        for (let i = 0; i < environmentVariables.length; i++) {
            if (JSON.stringify(environmentVariables[i]).startsWith(`{"${evr}":"`)) {
                doesContain = true;
                environmentVariables[i] = JSON.parse(`{"${evr}":"${str}"}`);
                break;
            }
        }
        if (!doesContain) {
            environmentVariables.push(JSON.parse(`{"${evr}":"${str}"}`));
        }
        console.log(environmentVariables);
        userInterfaceClass.prompt();
    }

    cls() {
        userInterfaceClass.clearScreen();
        userInterfaceClass.prompt();
    }

    reload() {
        window.location.reload();
    }

    dir() {
        let fileList = "";
        let foldList = "";
        let directory = "";

        if (globalCommandList[1]) {
            // eslint-disable-next-line prefer-destructuring
            directory = globalCommandList[1];
        } else {
            directory = currentDir;
        }

        fs.readdir(directory, { encoding: "utf8" }, (err, files) => {
            if (!files || err) {
                userInterfaceClass.output(`Failed to open directory.\nReason: "${directory}" could not be found`);
                userInterfaceClass.prompt();
            } else {
                userInterfaceClass.outputColor(`Contents of [${directory}]`, ``, `var(--blue)`);
                for (let i = 0; i < files.length; i++) {
                    if (new commands().isDir(`${directory}\\${files[i]}`)) {
                        foldList += `<span class="material-icons folder">folder</span> [${files[i]}\\]<br>`;
                    } else {
                        fileList += `<span class="material-icons file">description</span> ${files[i]}<br>`;
                    }
                }
                const final = `${foldList}${fileList}`;
                userInterfaceClass.outputColor(final, ``, `var(--blue)`);
                userInterfaceClass.prompt();
            }
        });
    }

    isDir(path) {
        try {
            const stat = fs.lstatSync(path);
            return stat.isDirectory();
        } catch (e) {
            return false;
        }
    }

    isFile(file) {
        try {
            const stat = fs.lstatSync(file);
            return stat.isFile();
        } catch (e) {
            return false;
        }
    }

    cd() {
        let newPath = "";
        for (let i = 1; i < globalCommandList.length; i++) {
            if (i !== globalCommandList.length - 1) {
                newPath += `${globalCommandList[i]} `;
            } else { newPath += globalCommandList[i]; }
        }
        if (newPath !== "\\") {
            if (this.isDir(path.join(currentDir, newPath))) {
                currentDir = path.join(currentDir, newPath);
            } else if (this.isDir(newPath)) {
                currentDir = newPath;
            } else {
                userInterfaceClass.output(`Unable to change the directory.\nReason:"${newPath}" could not be found.`)
            }
        } else {
            currentDir = "\\";
        }
        userInterfaceClass.prompt();
    }

    cdParentDir() {
        const prevPath = currentDir;
        const newPath = path.dirname(prevPath).split(path.sep).pop();
        if (prevPath === newPath) {
            currentDir = newPath;
        }
    }

    rf() {
        let file = "";
        for (let i = 1; i < globalCommandList.length; i++) {
            file += `${globalCommandList[i]} `;
        }
        file = file.trim();
        if (!this.isFile(file) && this.isFile(`${currentDir}\\${file}`)) {
            file = `${currentDir}\\${file}`;
        }
        fs.readFile(file, {encoding:"utf-8"}, (err, data) => {
            if (err || !data) {
                userInterfaceClass.output(`Unable to read file.\nReason: "${file}" could not be found.`);
                userInterfaceClass.prompt();
            } else {
                userInterfaceClass.outputColor(`Reading file: [${file}]<br><br><hr>`, ``, `var(--blue)`);
                userInterfaceClass.output(data);
                userInterfaceClass.outputHTML(`<br><hr>`);
                userInterfaceClass.prompt();
            }
        });
    }

    colors() {
        userInterfaceClass.outputColor(`(01) Black&nbsp; : [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `black`);
        userInterfaceClass.outputColor(`(02) White &nbsp;: [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, 'white');
        userInterfaceClass.outputColor(`(03) Normal : [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, ``);
        userInterfaceClass.outputColor(`(04) Gray&nbsp;&nbsp;&nbsp;: [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `var(--gray)`);
        userInterfaceClass.outputColor(`(05) Red&nbsp;&nbsp;&nbsp;&nbsp;: [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `var(--red)`);
        userInterfaceClass.outputColor(`(06) Green&nbsp;&nbsp;: [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `var(--green)`);
        userInterfaceClass.outputColor(`(07) Yellow : [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `var(--yellow)`);
        userInterfaceClass.outputColor(`(08) Blue&nbsp;&nbsp;&nbsp;: [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `var(--blue)`);
        userInterfaceClass.outputColor(`(09) Purple : [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `var(--purple)`);
        userInterfaceClass.outputColor(`(0A) Aqua&nbsp;&nbsp;&nbsp;: [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `var(--aqua)`);
        userInterfaceClass.outputColor(`(0B) Orange : [The quick brown fox jumped over the lazy dog. 0123456789]`, ``, `var(--orange)`);
        userInterfaceClass.prompt();
    }

    intro() {
        userInterfaceClass.outputColor("[█] Welcome to [NetCMD]!", "", 'var(--purple)');
        userInterfaceClass.outputColor("[█]", "", 'var(--blue)');
        userInterfaceClass.outputColor(`[█] You are currently running build [${version}].`, "", 'var(--aqua)');
        userInterfaceClass.outputColor("[█]", "", 'var(--green)');
        userInterfaceClass.outputColor(`[█] Current theme is [${localStorage.getItem("theme")}].`, "", 'var(--yellow)');
        userInterfaceClass.outputColor("[█]", "", 'var(--orange)');
        userInterfaceClass.outputColor("[█] You can type [help] for a list of commands.", "", 'var(--red)');
        userInterfaceClass.prompt();
    }

    theme() {
        let theme = "css/";
        for (let i = 1; i < globalCommandList.length; i++) {
            theme += `${globalCommandList[i]} `;
        }
        theme = theme.trim();
        theme += ".css";
        fs.exists(path.join(__dirname, theme), (exists) => {
            if (exists) {
                userInterfaceClass.outputColor(`[ SUCCESS]: <span style="color:var(--blue)">${theme}</span> has been found!`, ``, `var(--green)`);
                userInterfaceClass.applyTheme(theme);
            } else {
                userInterfaceClass.outputColor(`[ ERROR&nbsp; ]: <span style="color:var(--blue)">${theme}</span> doesn't exist!`, ``, `var(--red)`);
                userInterfaceClass.applyTheme("");
            }
            userInterfaceClass.prompt();
        })


    }

    ls() {
        userInterfaceClass.outputColor("Showing contents of [localStorage]<br><br>", ``, `var(--blue)`)
        for (let i = 0; i < localStorage.length; i++) {
            userInterfaceClass.outputColor(`[${localStorage.key(i)}]: ${localStorage.getItem(localStorage.key(i))}`, ``, `var(--yellow)`);
        }
        userInterfaceClass.prompt();
    }

    help() {
        help();
    }

    getAllCommandArgs(startIndex, lowerCase = false) {
        let arg = "";
        for (let i = startIndex; i < globalCommandList.length; i++) {
            arg += `${globalCommandList[i]} `;
        }
        arg = arg.trim();
        if (lowerCase) {
            arg = arg.toLowerCase();
        }
        return arg;
    }

    history() {
        userInterfaceClass.outputColor("Contents of [history] list:<br><br>", ``, `var(--blue)`);
        for (let i = 0; i < hist.length; i++) {
            userInterfaceClass.outputColor(`[${hist[i]}]`, ``, `var(--yellow)`);
        }
        userInterfaceClass.prompt();
    }

    rand() {
        const nr = parseInt(this.getAllCommandArgs(1, true));
        if (nr) {
            userInterfaceClass.outputColor(`Min: [0], Max: [${nr}], Output: [${Math.floor(Math.random() * nr)}]`, ``, `var(--yellow)`);
        } else {
            userInterfaceClass.outputColor(`[Error]: Number specified invalid!`);
        }
        userInterfaceClass.prompt();
    }

    setls() {
        const item = globalCommandList[1];
        const valu = this.getAllCommandArgs(2);

        if (item && valu) {
            localStorage.setItem(item, valu);
            userInterfaceClass.outputColor(`localStorage item [${item}] set to [${valu}].`, ``, `var(--yellow)`);
        } else {
            userInterfaceClass.outputColor(`[Error]: Arguments specified invalid!`);
        }
        userInterfaceClass.prompt();
    }

    remls() {
        const item = globalCommandList[1];
        if (item) {
            localStorage.removeItem(item);
            userInterfaceClass.outputColor(`localStorage item [${item}] removed.`, ``, `var(--yellow)`);
        } else {
            userInterfaceClass.outputColor(`[Error]: item specified invalid!`);
        }
        userInterfaceClass.prompt();
    }

    zoom() {
        if (globalCommandList[1]) {
            zoomLevel = parseInt(globalCommandList[1]);
            document.body.style.zoom = `${zoomLevel}%`;
        } else {
            userInterfaceClass.outputColor(`The current zoom level is [${zoomLevel}].`, ``, `var(--yellow)`);
        }

        userInterfaceClass.prompt();
    }

    exit() {
        userInterfaceClass.outputColor("[█] Now stopping NetCMD . . .", "", 'var(--green)');
        getElemId(inputId).setAttribute("disabled", "");
        setTimeout(() => {
            window.close();
        }, 4000);
    }

    maximize() {
        electronRemote.BrowserWindow.getCurrentWindow().maximized = !electronRemote.BrowserWindow.getCurrentWindow().maximized
    }

    fullscreen() {
        const args = this.getAllCommandArgs(1,true);
        switch(args) {
            case "off":
                electronRemote.getCurrentWindow().fullScreen = false;
                userInterfaceClass.outputColor(`Fullscreen turned [${electronRemote.getCurrentWindow().fullScreen ? "on" : "off"}]`,``,`var(--blue)`);
                break;
            case "on":
                electronRemote.getCurrentWindow().fullScreen = true;
                userInterfaceClass.outputColor(`Fullscreen turned [${electronRemote.getCurrentWindow().fullScreen ? "on" : "off"}]`,``,`var(--blue)`);
                break;
            case "toggle":
                electronRemote.getCurrentWindow().fullScreen = !electronRemote.getCurrentWindow().fullScreen;
                userInterfaceClass.outputColor(`Fullscreen turned [${electronRemote.getCurrentWindow().fullScreen ? "on" : "off"}]`,``,`var(--blue)`);
                break;
            case "status":
                userInterfaceClass.outputColor(`Fullscreen is currently [${electronRemote.getCurrentWindow().fullScreen ? "on" : "off"}].`,``,`var(--blue)`);
                break;
            default:
                userInterfaceClass.outputColor("[Error]: Only one of these arguments are accepted:");
                userInterfaceClass.outputColor("[on], [off], [status] or [toggle].",``,`var(--blue)`);
                break;
        }
        userInterfaceClass.prompt();
    }
}

const cmdToken = true;