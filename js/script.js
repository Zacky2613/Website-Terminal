// Untrustworthy | By Zacky2613

var command_history = []
var uparrow_counter = 0

var flag_text = "SEkgbTBtIEkgZmlndTNlZCAwdXQgdGgzIHBhNTV3MHJkIQ=="
// var flag_text = "HI m0m I figu3ed 0ut th3 pa55w0rd!"
var readme_text = "lol"

Paragraph_Maker = ( text, element_id="lorem", div_id="") => {
    let paragraph = document.createElement("p");

    if ( element_id !== "lorem" ) {
        paragraph.setAttribute("id", element_id);
    }

    if (div_id === "banner") {
        paragraph.innerHTML = `${text}`;
        document.querySelector("#terminal-banner").appendChild(paragraph);
        return;
    }

    paragraph.innerHTML = `${text}`;
    document.querySelector(".terminal-output").appendChild(paragraph);
}

banner = () => {
    Paragraph_Maker("<white>███████╗ █████╗  ██████╗██╗  ██╗██╗   ██╗██████╗  ██████╗ ██╗██████╗ </white>", element_id="credit-text", div_id="banner")
    Paragraph_Maker("<white>╚══███╔╝██╔══██╗██╔════╝██║ ██╔╝╚██╗ ██╔╝╚════██╗██╔════╝███║╚════██╗</white>", element_id="credit-text", div_id="banner")
    Paragraph_Maker("<white>  ███╔╝ ███████║██║     █████╔╝  ╚████╔╝  █████╔╝███████╗╚██║ █████╔╝</white>", element_id="credit-text", div_id="banner")
    Paragraph_Maker("<white> ███╔╝  ██╔══██║██║     ██╔═██╗   ╚██╔╝  ██╔═══╝ ██╔═══██╗██║ ╚═══██╗</white>", element_id="credit-text", div_id="banner")
    Paragraph_Maker("<white>███████╗██║  ██║╚██████╗██║  ██╗   ██║   ███████╗╚██████╔╝██║██████╔╝</white>", element_id="credit-text", div_id="banner")
    Paragraph_Maker("<white>╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝╚═════╝ </white><cyan>© 2023<cyan>", element="credit-text", div_id="banner")
    Paragraph_Maker("<grey>Welcome to my little project humans and webscrapers alike</grey>", element_id="p", div_id="banner")
    Paragraph_Maker("<grey>Type <cyan>'help'</cyan> to get a list of commands.</grey>", element_id="p", div_id="banner")
    Paragraph_Maker("")

}

aboutme = () => {
    Paragraph_Maker("<code-green>Hello, I'm <cyan>Zacky2613</cyan>👋</code-green>")
    Paragraph_Maker("<code-green>I'm a 14 year old programmer from Australia and do a wide range of things such as:</code-green>")
    Paragraph_Maker("<code-green>Using pythons to make cli tools, discord bots, using modules in their non-intended way to make abominations, etc..</code-green>")
    Paragraph_Maker("<code-green>But I've got more than python skills as you can see write here! (type '<cyan>terminal</cyan>' to learn how I made this</code-green>")
    Paragraph_Maker("<code-green>If you wanna explore more of me check out my <a href='https://www.github.com/Zacky2613'>github!</a></code-green>")

}

command_list = ( command ) => {
    command.toLowerCase();

    switch( command ) {
        case "cls":
        case "clear": // Clears list
            var paragraphs = document.getElementsByTagName("p"), index;

            for ( index = paragraphs.length - 1; index >= 0; index-- ) {
                paragraphs[index].parentNode.removeChild(paragraphs[index]);
            } 
            
            banner();
            break;

        case "ls":
            Paragraph_Maker("<bold-blue><b> README.md flag.txt <b><bold-blue>")

            break;

        case "history":
            Paragraph_Maker(`<code-green>Command History:</code-green><br>`)
            
            if ( command_history.length === 0 ) {

            } else {
                for (const [index, element] of command_history.entries()) {
                    Paragraph_Maker(`<cyan>${index} ${element}</cyan>`)
                }
            } break;
        
        case "about":
            aboutme()

            break;                                                         
        
        case "help":
            Paragraph_Maker("<cyan>Help Page:</cyan>")
            Paragraph_Maker("<white>CUSTOM COMMANDS:</white>")
            Paragraph_Maker("<white><pre>   about: All about me, just enough info to start stalking me</pre></white>")
            Paragraph_Maker("<white><pre>   banner: Shows the banner that is displayed when the website is loaded</pre></white>")
            Paragraph_Maker("<white><pre>   terminal: Shows how this terminal was made and what inspired it.</pre></white>")
            Paragraph_Maker("<white>REAL LINUX COMMANDS:</white>")
            Paragraph_Maker("<white><pre>   echo [words]: Like the actual bash echo</pre></white>")
            Paragraph_Maker("<white><pre>   history: Shows all command history in that session</pre></white>")
            Paragraph_Maker("<white><pre>   clear: clear all terminal output</pre></white>")

            break;
        
        case "terminal":
            Paragraph_Maker("<white>How I made this online terminal:</white>")
            Paragraph_Maker("<pre> </pre>")
            Paragraph_Maker("<code-green>This is an open-source project which can be found <a href='https://www.github.com/Zacky2613/Untrustworthy'>here.</a></code-green>")
            Paragraph_Maker("<code-green>All this website using is completely <cyan>static and vanilla Javascript, html, and css.</cyan> Nothing more.</code-green>")
            Paragraph_Maker("<code-green>I was orginially inspried by this <a href='https://www.youtube.com/watch?v=KtYby2QN0kQ'>ForrestKnight Video</a> to make this website.</code-green>")
            Paragraph_Maker("<code-green>I started this project half way through 2022 but has been on the backburner until recently when I decided to pick it back up again.</code-green>")
            Paragraph_Maker("<code-green>This was all made from scratch, everything is by me.</code-green>")

            break;


        default:
            Paragraph_Maker(`<red>'${command}': Command not found.</red>`);
    }
}

// Function to handle using uparrow to use previous commands
document.querySelector("#terminal-input").addEventListener("keydown", function(event) {
    if ( event.key === "ArrowUp" ) {
        // Checking that command history has existing history.
        if ( command_history.length !== 0 ) {
            // If uparrow_counter goes over the length of command history it results in "undefined"
            if (uparrow_counter === command_history.length) {return};

            document.querySelector("#terminal-input").value = command_history[command_history.length-(1+uparrow_counter)];
            uparrow_counter += 1;
        }
    }

    if ( event.key === "Enter" ) {
        const terminal_text = document.querySelector("#terminal-input").value;
        if (terminal_text.trim() === "") { return } // If terminal prompt is nothing

        var result = terminal_text.trim().split(/\s+/); 
        
        /* 'result' takes the user's input in 'terminal_text' which then does:
        1. Trims the array so the first element isn't empty.
        2. Makes everything lowercase (to be safe)
        3. Splits with whitespaces into the array.
        
        This is because with functions like "echo" it takes 2 arguments. The actual echo text and the text to print.
        So what the code below does it checks if the first argument is echo. and if that is True.
        Then puts all after echo into a string and prints that. */


        if ( result[0].toLowerCase() === "echo" ) {
            result.shift();
            result = result.join(" ");
            // ^ Delets the word "echo" from array and joins all the other array elements back into a string
            // This code is reused in this if statement block.
            Paragraph_Maker(`<white>${result}</white>`);

        } else if ( result[0].toLowerCase() === "password" ) {
            result.shift();
            result = result.join(" ");

            if ( result === atob(flag_text) ) {
                Paragraph_Maker("<bold-blue>You figured out my password! Congrats there is 0 reward</bold-blue>")
            } else {
                Paragraph_Maker("<red>Wrong password. Maybe try to find a flag?</red>")
            }

        } else if ( result[0].toLowerCase() === "cat" ) {
            result.shift();
            result = result.join(" ");

            if ( result === "flag.txt" ) {
                Paragraph_Maker(`<white>${atob(flag_text)}</white>`)
            }

        } else {
            command_list(terminal_text);
        }

        // make_terminal_input()
        command_history.push(terminal_text) 
        // ^ Puts the most recent command in an array used for command history.

        var Command_history = document.querySelector(".terminal-output");
        Command_history.scrollTop = Command_history.scrollHeight;

        
        document.querySelector("#terminal-input").value = "";
    }
});

console.log("Hello, if you want a hint for the password. Think of capture the flags.")
banner();
