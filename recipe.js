module.exports = {

    staticBase: [
        ["merge"],
        {
            //baseRemote"
            merge: ["lenny-unlicense"]
        }
    ],

    ressource: [
        ["directory"],
        ["merge"],
        {
            //baseRemote"
            merge: ["lenny-unlicense"]
        }
    ],

    source: [
        ["submodule"],
        ["merge"],
        {
            //baseRemote"
            merge: ["lenny-unlicense"]
        }
    ],
    
    async individualize(thingyPath) {
        console.log("individualized the sources!");
        return;
    }
}
