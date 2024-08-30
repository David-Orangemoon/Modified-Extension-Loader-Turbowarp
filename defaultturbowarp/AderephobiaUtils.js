//Made specifically for Arderephobia
(function(Scratch) {
    const spriteVars = {};

    class ArderephobiaExt {
        constructor() {
            vm.runtime.on("targetWasRemoved", (clone) => {
                const cloneID = clone.id;
                //Yeah this is me. You are probably wondering how I got here?
                if (spriteVars[cloneID]) {
                    delete spriteVars[cloneID];
                }
            });
        }

        getInfo() {
            return {
                menuIconURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURWGlP8TxKUdyOND/6ik/IRskRxcYGRgcGQ4MDCgsPDczNAAAAKK4I9AAAAAMdFJOU///////////////ABLfzs4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAADtSURBVHhe7dbBDoIwEADRilVQ/v9/vYx7gJgCB5tNZy6mDWWfl4aydk6AAAECBAgQkBdQiOXlBAgQkBdwIxzX/wi/p2O+AAEC/g9gXmF+xPb59/F7OOYIECCgH2Ai5kbMFyBAwAAA5u1ivgABAgYAMMdPMgECBgbwPTIxr9yJpQABAgYAMCcuIuYLECBgAAD3T1xAzA8Ay9MfJgIECMgHqPTYxHbEsWYCBAjIA+C99UksI7Zjn2PNBAgQkAcw00KvTWwvPDZzrJkAAQLyAN7EPVNZRmzHPseaCRAgIA/gG+//GY8dToAAAZ0B6/oBHjtOXxx7mHEAAAAASUVORK5CYII=",
                blockIconURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURWGlP8TxKUdyOND/6ik/IRskRxcYGRgcGQ4MDCgsPDczNAAAAKK4I9AAAAAMdFJOU///////////////ABLfzs4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAADtSURBVHhe7dbBDoIwEADRilVQ/v9/vYx7gJgCB5tNZy6mDWWfl4aydk6AAAECBAgQkBdQiOXlBAgQkBdwIxzX/wi/p2O+AAEC/g9gXmF+xPb59/F7OOYIECCgH2Ai5kbMFyBAwAAA5u1ivgABAgYAMMdPMgECBgbwPTIxr9yJpQABAgYAMCcuIuYLECBgAAD3T1xAzA8Ay9MfJgIECMgHqPTYxHbEsWYCBAjIA+C99UksI7Zjn2PNBAgQkAcw00KvTWwvPDZzrJkAAQLyAN7EPVNZRmzHPseaCRAgIA/gG+//GY8dToAAAZ0B6/oBHjtOXxx7mHEAAAAASUVORK5CYII=",
                id: 'ArderephobiaUtils',
                name: 'Arderephobia Utils',
                blocks: [
                  {
                    opcode: "setLocalVar",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "set local variable [vari] to [val]",
                    arguments: {
                        vari: {
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"Variable",
                        },
                        val: {
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"Value",
                        }
                    },
                    extensions: ["colours_more"],
                  },
                  {
                    opcode: "changeLocalVar",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "change local variable [vari] to [val]",
                    arguments: {
                        vari: {
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"Variable",
                        },
                        val: {
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"Value",
                        }
                    },
                    extensions: ["colours_more"],
                  },
                  "---",
                  {
                    opcode: "getLocalVar",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "get local variable [vari]",
                    arguments: {
                        vari: {
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"Variable",
                        },
                    },
                    extensions: ["colours_more"],
                  },
                  {
                    opcode: "getLocalVarBool",
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: "get local variable [vari]",
                    arguments: {
                        vari: {
                            type:Scratch.ArgumentType.STRING,
                            defaultValue:"Variable",
                        },
                    },
                    extensions: ["colours_more"],
                  },
                ]
            };
        }

        setLocalVar({ vari, val }, util) {
            if (!spriteVars[util.target.id]) spriteVars[util.target.id] = {};

            spriteVars[util.target.id][vari] = val;
        }

        changeLocalVar({ vari, val }, util) {
            if (!spriteVars[util.target.id]) spriteVars[util.target.id] = {};

            spriteVars[util.target.id][vari] = Scratch.Cast.toNumber(spriteVars[util.target.id][vari]) + Scratch.Cast.toNumber(val);
        }

        getLocalVar({ vari }, util) {
            if (!spriteVars[util.target.id]) spriteVars[util.target.id] = {};

            return Scratch.Cast.toString(spriteVars[util.target.id][vari]);
        }

        getLocalVarBool({ vari }, util) {
            if (!spriteVars[util.target.id]) spriteVars[util.target.id] = {};

            return Scratch.Cast.toBoolean(spriteVars[util.target.id][vari]);
        }
    }
    
    Scratch.extensions.register(new ArderephobiaExt());
})(Scratch);
