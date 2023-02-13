// Untrustworthy | By Zacky2613

// TODO: Make input more like a terminal
// TODO: Redo aboutme.
// TODO: Maybe think of a better name
// TODO: Make and use more colours in ./css/colours.css
// TODO: Make it so hitting up-arrow gets most recent command.
// TODO: Make a "terminal" command that shows how I made it (just pure html, js, and css 💪)

var command_history = []

Paragraph_Maker = ( text, element="p", div_id="") => {
    let paragraph = document.createElement("p");

    if ( element !== "p" ) {
        paragraph.setAttribute("id", element);
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
    Paragraph_Maker("<white>███████╗ █████╗  ██████╗██╗  ██╗██╗   ██╗██████╗  ██████╗ ██╗██████╗ </white>", element="credit-text", div_id="banner")
    Paragraph_Maker("<white>╚══███╔╝██╔══██╗██╔════╝██║ ██╔╝╚██╗ ██╔╝╚════██╗██╔════╝███║╚════██╗</white>", element="credit-text", div_id="banner")
    Paragraph_Maker("<white>  ███╔╝ ███████║██║     █████╔╝  ╚████╔╝  █████╔╝███████╗╚██║ █████╔╝</white>", element="credit-text", div_id="banner")
    Paragraph_Maker("<white> ███╔╝  ██╔══██║██║     ██╔═██╗   ╚██╔╝  ██╔═══╝ ██╔═══██╗██║ ╚═══██╗</white>", element="credit-text", div_id="banner")
    Paragraph_Maker("<white>███████╗██║  ██║╚██████╗██║  ██╗   ██║   ███████╗╚██████╔╝██║██████╔╝</white>", element="credit-text", div_id="banner")
    Paragraph_Maker("<white>╚══════╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝╚═════╝ </white><cyan>© 2023<cyan>", element="credit-text", div_id="banner")
    Paragraph_Maker("<grey>Welcome to my little project humans and webscrapers alike</grey>", element="p", div_id="banner")
    Paragraph_Maker("<grey>Type <cyan>'help'</cyan> to get a list of commands.</grey>", element="p", div_id="banner")
    Paragraph_Maker("")

}

aboutme = () => {
    // Will finish tomorrow, hopefully...

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
        
        case "banner":
            banner();
            break;
                                                                                
        
        case "help":
            Paragraph_Maker("<cyan>Help Page:</cyan>")
            Paragraph_Maker("<white>REAL LINUX COMMANDS:</white>")
            Paragraph_Maker("<white><pre>   echo [words]: Like the actual bash echo</pre></white>")
            Paragraph_Maker("<white><pre>   history: Shows all command history in that session</pre></white>")
            Paragraph_Maker("<white><pre>   clear: clear all terminal output</pre></white>")
            Paragraph_Maker("<white>CUSTOM COMMANDS:</white>")
            Paragraph_Maker("<white><pre>   about: All about me, just enough info to start stalking me</pre></white>")
            Paragraph_Maker("<white><pre>   banner: Shows the banner that is displayed when the website is loaded</pre></white>")

            break;

        default:
            Paragraph_Maker(`<red>'${command}': Command not found.</red>`);
    }
}

document.querySelector("#terminal-input").addEventListener("keypress", function(event) {
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
            Paragraph_Maker(`<white>${result}</white>`);

        } else {
            command_list(terminal_text);
        }

        command_history.push(terminal_text) 
        // ^ Puts the most recent command in an array used for command history.

        var Command_history = document.querySelector(".terminal-output");
        Command_history.scrollTop = Command_history.scrollHeight;

        document.querySelector("#terminal-input").value = "";
    }
});

banner();
