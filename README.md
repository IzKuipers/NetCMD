# NetCMD

Yet another one of my projects built in electron, this time not focusing on GUI at all
With one of my other projects, ArcOS, it's mainly focused on the user interface, and
how it feels for the user. In NetCMD the same thing is done, just without the GUI part.

This project is entirely built in a terminal like environment, with real filesystem calls,
themes, a whole ton of commands, wide flexibility in the code base, and much more.

It was originally built to work only on Windows, so I kept cross-platform out of mind, but
I realized that now I'm using Linux more and more, I changed the code so that it would also
work on Linux, so now it's cross-platform, making it a great thing to try out for everyone.

## Setup
For this project I chose not to create installers for any major version releases, so the best
thing I can provide is information on how to download the code and install the components in
order for NetCMD to run.

First, download the code and extract it to a folder somewhere on your harddrive.

When you are in the folder that has `package.json` and everything in it, open up a terminal for
linux or Command Prompt for Windows, and then enter the following commands to install npm and
start the program automatically:

Linux:
```bash
npm i & npm start
```

Windows:
```batch
npm i && npm start
```

## Usage
When you don't know what commands to enter or what to do, just start by entering `help` for a list 
of commands. You can enter another command after `help` to get information about that command, for
example here is `help dir`:

```
/
$ help dir

Shows the contents of the current or specified directory.

Usage: DIR {DIRECTORY}

DIRECTORY  Optional - The specified directory that will be read.

/
$
```

## Thanks
If you do check out NetCMD, I want to thank you for doing so. Every project I create is a project that
I put together with great dedication and care, and it's just surreal to see it when someone checks out
a project that I created. So, if you do check it out, let me know.
