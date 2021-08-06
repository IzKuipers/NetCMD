/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-undef */

// eslint-disable-next-line 
onload = function() {
    userInterfaceClass.applyTheme(this.localStorage.getItem("theme"));
    let evaulationList = userInterfaceClass.evaluateScripts(),
        continueExec = true;
    for (var i = 0; i < evaulationList.length; i++) {
        if (!evaulationList[i]) {
            userInterfaceClass.outputColor(`[Error]: Script at index [${i}] not loaded!`);
            continueExec = false;
        }
    }
    //if (continueExec) {
        setTimeout(() => {
            userInterfaceClass.defineDOMHooks();
            commandsClass.intro();

            userInterfaceClass.focusToInput();
            setInterval(() => {
                userInterfaceClass.focusToInput();
            }, 10);
        }, 100);
    //}
};


// eslint-disable-next-line no-unused-vars
class userInterface {
    executeProgram(instructions = []) {
        for (let i = 0; i < instructions.length; i++) {
            this.evaluateCommand(instructions[i], true);
        }
    }

    clearScreen() {
        getElemId("terminalBody").innerHTML = "";
    }

    output(str, color = "") {
        const elmnt = createElem("p");
        elmnt.innerText = str;
        elmnt.style.color = color;
        getElemId("terminalBody").append(elmnt);
    }

    outputHTML(str, color = "") {
        const elmnt = createElem("p");
        elmnt.innerHTML = str;
        elmnt.style.color = color;
        getElemId("terminalBody").append(elmnt);
    }

    evaluateCommand(override = "") {
        let command;
        if (override) {
            command = override;
        } else {
            command = getElemId(inputId).value;
        }

        if (!hist.includes(command)) hist.push(command);
        const commandList = command.split(" ");
        globalCommandList = commandList;
        console.log(
            `%c[SUCCESS] ui.evaluateCommand: Evaluating first argv: "${commandList[0]}", argvlist is "${commandList}"`,
            "color:lime"
        );
        userInterfaceClass.output("\n");
        const cmd = new commands();
        switch (commandList[0].toLowerCase()) {
            case "echo":
                cmd.echo();
                break;
            case "ver":
                cmd.ver();
                break;
            case "prompt":
                cmd.prompt();
                break;
            case "error":
                cmd.error();
                break;
            case "cls":
                cmd.cls();
                break;
            case "set":
                cmd.set();
                break;
            case "reload":
                cmd.reload();
                break;
            case "dir":
                cmd.dir();
                break;
            case "cd":
                cmd.cd();
                break;
            case "rf":
                cmd.rf();
                break;
            case "colors":
                cmd.colors();
                break;
            case "intro":
                cmd.intro();
                break;
            case "theme":
                cmd.theme();
                break;
            case "ls":
                cmd.ls();
                break;
            case "help":
                cmd.help();
                break;
            case "history":
                cmd.history();
                break;
            case "rand":
                cmd.rand();
                break;
            case "setls":
                cmd.setls();
                break;
            case "remls":
                cmd.remls();
                break;
            case "zoom":
                cmd.zoom();
                break;
            case "exit":
                cmd.exit();
                break;
            case "fullscreen":
                cmd.fullscreen();
                break;
            case "":
                userInterfaceClass.prompt();
                break;
            default:
                cmd.default();
                userInterfaceClass.prompt();
                break;
        }
    }

    prompt() {

        const dvdiv = createElem("p");
        const cddir = createTextNode(currentDir);
        const prmpt = createTextNode("$ ");
        const brek = createElem("br");
        const brek2 = createElem("br");
        const input = createElem("input");
        const cdhos = createElem("span");

        cdhos.style.opacity = "0.5";
        cdhos.append(cddir)
        console.log(`%c[VARDEFS] ui.prompt: dvdiv = ${dvdiv}, prmpt = ${prmpt}, input = ${input}`, 'color:yellow');

        this.focusToInput();

        try {
            getElemId(inputId).setAttribute("disabled", "");
            console.log(`%c[SUCCESS] ui.prompt: set attribute "disabled" to enabled for "${inputId}"`, "color:lime");
        } catch (e) { console.log(`%c[FAILURE] ui.prompt: couldn't set attribute "disabled" to enabled for "${inputId}"`, "color:red"); }

        input.id = `input${Math.floor(Math.random() * 0x32767)}`;
        inputId = input.id;
        input.setAttribute("spellcheck", "false");

        if (displayPrompt) {
            dvdiv.append(brek2);
            dvdiv.append(cdhos);
            dvdiv.append(brek);
            dvdiv.append(prmpt);
        }

        dvdiv.append(input);

        getElemId("terminalBody").append(dvdiv);

        console.log(`%c[SUCCESS] ui.prompt: Appended input with id "${input.id}" to "terminalBody"`, "color:lime");
    }

    focusToInput() {
        try {
            getElemId(inputId).focus();
        } catch (e) { /** */ }
    }

    defineDOMHooks() {
        document.addEventListener("click", () => {
            userInterfaceClass.focusToInput();
        });

        document.addEventListener("keydown", (e) => {
            console.log(e.key);
            if (e.key === "Enter") {
                userInterfaceClass.evaluateCommand();
            }
            if (e.key === "ArrowUp") {
                if (hist.length !== 0) {
                    if (histReturnInt === 0) {
                        histReturnInt = hist.length - 1
                    } else {
                        histReturnInt -= 1;
                    }
                    getElemId(inputId).value = hist[histReturnInt];
                    getElemId(inputId).focus();
                }
            }
            if (e.key === "Escape") {
                getElemId(inputId).value = "";
            }
            if (e.key === "=" && e.ctrlKey) {
                zoomLevel += 5;
                document.body.style.zoom = `${zoomLevel}%`;
            }
            if (e.key === "-" && e.ctrlKey) {
                zoomLevel -= 5;
                document.body.style.zoom = `${zoomLevel}%`;
            }
        });

        console.error = (e) => {
            userInterfaceClass.output(`[ERROR_INTERNAL] ${e}`, "var(--red)");
        }

        window.onerror = (e) => {
            userInterfaceClass.output(`[ERROR_JSDOMEXC] ${e}`, "var(--red)");
        }
    }

    outputColor(text, pri = "", sec = "var(--red)") {
        const x = text.split(/(\[[^\]]*\])/);
        let out = "";
        for (let i = 0; i < x.length; i++) {
            const str = x[i].replace("[", "").replace("]", "")
            if (x[i].startsWith("[") && x[i].endsWith("]")) {
                out += `<span style="color:${sec}">${str}</span>`;
            } else {
                out += `<span style="color:${pri}">${str}</span>`;
            }
        }
        this.outputHTML(out);
    }

    applyTheme(theme) {
        if (theme) {
            fs.exists(path.join(__dirname, theme), (exists) => {
                if (exists) {
                    getElemId("themeLoader").href = theme;
                    localStorage.setItem("theme", theme);
                } else {
                    this.outputColor("[Error]: The configured theme could not be found. Fallback has been applied.<br><br>", ``, `var(--red)`);
                }
            });
        }
    }
    evaluateScripts() {
        let cmdValid = false,
            domValid = false,
            envValid = false,
            etcValid = false;

        try { cmdValid = cmdToken; } catch { cmdValid = false; }
        try { domValid = domToken; } catch { domValid = false; }
        try { envValid = envToken; } catch { envValid = false; }
        try { etcValid = etcToken; } catch { etcValid = false; }

        console.log(cmdValid, domValid, envValid, etcValid);
        return ([cmdValid, domValid, envValid, etcValid]);
    }
}