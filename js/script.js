// Untrustworthy | By Zacky2613

var command_history = []
echo_arrow_output = false // Defualt

Paragraph_Maker = ( text ) => {
    let paragraph = document.createElement("p");

    paragraph.innerHTML = `${text}`;
    document.querySelector(".terminal-output").appendChild(paragraph);
}

command_list = ( command ) => {
    command.toLowerCase();

    switch( command ) {
        case "cls":
        case "clear": // Clears list
            var paragraphs = document.getElementsByTagName("p"), index;

            for ( index = paragraphs.length - 1; index >= 0; index-- ) {
                paragraphs[index].parentNode.removeChild(paragraphs[index]);
            } Paragraph_Maker("<grey>Zacky2613 (c) 2022</grey>")
            
            break;
        
        case "ls":
            Paragraph_Maker("(looking 1 folder back)")
            Paragraph_Maker("")
            Paragraph_Maker("")
            Paragraph_Maker("")
            Paragraph_Maker("")
            Paragraph_Maker("")
            Paragraph_Maker("")

        case "history":
            Paragraph_Maker(`<code-green>Command History:</code-green><br>`)
            
            if ( command_history.length === 0 ) {

            } else {
                for ( index = 0 ; index < command_history.length ; index++ ) {
                    Paragraph_Maker(`<cyan>${index + 1}. ${command_history[index]}</cyan>`)
                } 
            } break;
        
        case "about me":
        case "aboutme":
            Paragraph_Maker(`<br><cyan>Hi👋, I'm </cyan><code-green>Zacky2613.</code-green><cyan> I.</cyan>`)
            Paragraph_Maker(`<cyan>I first started programming back in 2020, I first started with batch and a lot has changed since then!</cyan>`)
            Paragraph_Maker(`<cyan>I'm now a self-taught Python Developer and know many different programming languages.</cyan>`)
            Paragraph_Maker(`<br><code-green>Social Media:</code-green>`)
            Paragraph_Maker(`<white>Github: </white><grey>https://github.com/Zacky2613</grey>`)
            Paragraph_Maker(`<br><br>`)

            break;

        default:
            Paragraph_Maker(`<red>Command '${command}' unknown.</red>`);
    }
}

document.querySelector("#terminal-input").addEventListener("keypress", function(event) {
    if ( event.key === "Enter" ) {
        const terminal_text = document.querySelector("#terminal-input").value;
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
            if ( echo_arrow_output === false ) {
                Paragraph_Maker(`<white>${result}</white>`);
            } else {
                Paragraph_Maker(`<white>>> ${result}</white>`);
            }
        } else if ( result[0].toLowerCase() == "output_arrow" ) {
            echo_arrow_output = result[1]
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

Paragraph_Maker(`<grey>Zacky2613 (c) 2022</grey><br><br>`)