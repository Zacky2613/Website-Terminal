// Untrustworthy | By Zacky2613

var command_history = []

Paragraph_Maker = ( text, element="p" ) => {
    let paragraph = document.createElement("p");

    paragraph.innerHTML = `${text}`;
    document.querySelector(".terminal-output").appendChild(paragraph);
}

portfilo = () => {
    Paragraph_Maker()
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
                    console.log(index, element)
                    var num_to_string = "" + index
                    Paragraph_Maker(" ".repeat(5-num_to_string.length) + `<cyan>${index} ${element}</cyan>`)
                }
            } break;
        
        case "about me":
        case "aboutme":
        case "cv":
        case "portfilo":
            portfilo()
                                                                                
        
        case "help":
            Paragraph_Maker("")

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
