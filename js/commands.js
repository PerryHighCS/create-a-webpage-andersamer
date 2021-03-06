let commands = [];

function parseCommand(inp) {
    let str = inp.split(" ");
    let token = str.shift();
    token = token.toLowerCase();
    let args = str;

    let cmd;
    for(var i = 0; i < commands.length; i++) {
        let temp = commands[i];
        if(temp.name == token) {
            cmd = temp;
        }
    }

    if(cmd) {
        if(cmd.func) {
            cmd.func(args);
            println("");
        } else {
            cmd.help();
        }
    } else {
        invalidCommandError();
    }

}

class Command {
    constructor(name, desc, params, func) {
        this.name = name;
        this.desc = desc;
        this.params = params || "No parameters";
        this.func = func;
        commands.push(this);
    }

    help() {
        println(this.desc);
        print("**" + this.name.toUpperCase() + "** ~ ");

        if(typeof this.params == "string") {
            println(this.params);
        } else {
            for(var i = 0; i < this.params.length; i++) {
                print("[*" + this.params[i] + "*] ");
            }
            println("");
        }
    }
}
