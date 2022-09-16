if (typeof window === "undefined" || !window.vm) {
    isSandboxed = true;
  } else {
    isSandboxed = false;
  }

let fileHandle;
let filecontents = "";
let filewritten = false;

class DangerousButUseful {
    constructor(runtime) {
        this.runtime = runtime
    }
    
    getInfo() {
        return {
            "id": "DangerousButUseful",
            "name": "Dangerous But Useful",
            "color1":'#8a45b5',
            "color2":'#ca91ed',
            "color3":'#5a0c8a',
            "blocks": [
                    {
                        "opcode": "htmlreplace",
                        "blockType": "command",
                        "text": "Replace page HTML with [htmlrep]",
                        "arguments": {
                            "htmlrep": {
                                "type": "string",
                                "defaultValue": "Put HTML here"
                            }
                        },                    
                    },
                    {
                        "opcode": "openpagewithhtml",
                        "blockType": "command",
                        "text": "Page add HTML [html]",
                        "arguments": {
                            "html": {
                                "type": "string",
                                "defaultValue": "Put HTML here"
                            }
                        },                    
                    },
                    {
                        "opcode": "writetoFile",
                        "blockType": "command",
                        "text": "write to currently read file [write]",
                        "arguments": {
                            "write": {
                                "type": "string",
                                "defaultValue": "Put text here"
                            }
                        },                    
                    },
                    {
                        "opcode": "readfile",
                        "blockType": "command",
                        "text": "read a file",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "resetfile",
                        "blockType": "command",
                        "text": "clear the file read",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "file",
                        "blockType": "reporter",
                        "text": "file contents",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "filewrittennow",
                        "blockType": "Boolean",
                        "text": "file written?",
                        "arguments": {
                        },                    
                    }
            ],           
        };
    }
    
    htmlreplace({htmlrep}) {
        document.open();document.write(htmlrep);document.close();
        return "replaced"
    }

    resetfile() {
        return filecontents = "";
    }

    filewrittennow() {
        return filewritten;
    }

    file() {
        return filecontents;
    }

    openpagewithhtml({html}) {
        let newWindow = window.open(null,"_blank");
        newWindow.document.write(html);
        return "replaced"
    }

    writetoFile({write}) {
        startwrite(write)
    }

    readfile() {
        filewritten = false;
        getfile()
    }
}

async function getfile() {
    [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    let text =  await fileData.text();
    filecontents = text;
}

async function startwrite(write) {
    filewritten = false;
    stream = await fileHandle.createWritable();
    await stream.write(write);
    await stream.close();
    filewritten = true;
}

(function() {
    var extensionInstance = new DangerousButUseful(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()