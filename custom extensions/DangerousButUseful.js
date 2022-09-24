if (typeof window === "undefined" || !window.vm) {
    isSandboxed = true;
  } else {
    isSandboxed = false;
  }
 
let fileHandle;
let filecontents = "";
let filewritten = false;
let islaptopcharging = false
let chargetime = 0
let dischargetime = 1
let batterypercent = 1
 
let curcliptext = ""
 
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
                    },
                    {
                        "opcode": "changepageTitle",
                        "blockType": "command",
                        "text": "Change page title to [title]",
                        "arguments": {
                            "title": {
                                "type": "string",
                                "defaultValue": "Hello World"
                            }
                        },                    
                    },
                    {
                        "opcode": "getpageTitle",
                        "blockType": "reporter",
                        "text": "Get this pages title",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "getClipboardText",
                        "blockType": "reporter",
                        "text": "Get the clipboard's text",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "setclipboardText",
                        "blockType": "command",
                        "text": "Set the clipboard text to [title]",
                        "arguments": {
                            "title": {
                                "type": "string",
                                "defaultValue": "Hello World"
                            }
                        },                    
                    },
                    {
                        "opcode": "getifchargine",
                        "blockType": "Boolean",
                        "text": "Is the device charging?",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "getbatchartime",
                        "blockType": "reporter",
                        "text": "Charge time",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "getbatdischargetime",
                        "blockType": "reporter",
                        "text": "discharge time",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "getbatperce",
                        "blockType": "reporter",
                        "text": "Battery Percent",
                        "arguments": {
                        },                    
                    }
            ],          
        };
    }
 
    getifchargine({}) {
        getlaptopcharging();
        return islaptopcharging;
    }
 
    getbatchartime({}) {
        getlaptopcharging();
        return chargetime;
    }
 
    getbatdischargetime({}) {
        getlaptopcharging();
        return dischargetime;
    }
 
    getbatperce({}) {
        getlaptopcharging();
        return batterypercent * 100;
    }
 
 
    getClipboardText({}) {
        getclip()
        return curcliptext
    }
 
    setclipboardText({title}) {
        setclip(title)
        return "replaced"
    }
 
   
    htmlreplace({htmlrep}) {
        document.open();document.write(htmlrep);document.close();
        return "replaced"
    }
 
    getpageTitle({}) {
        return document.title;
    }
 
    changepageTitle({title}) {
        document.title = title;
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
 
async function getlaptopcharging() {
    navigator.getBattery().then((battery) => {
        islaptopcharging = battery.charging;
        chargetime = battery.chargingTime;
        dischargetime = battery.dischargingTime;
        batterypercent = battery.level;
      });
}
 
 
async function getfile() {
    curcliptext = ClipboardItem.readText();
}
 
async function startwrite(write) {
    filewritten = false;
    stream = await fileHandle.createWritable();
    await stream.write(write);
    await stream.close();
    filewritten = true;
}
 
async function getclip() {
    curcliptext = navigator.clipboard.readText();
}
 
async function setclip(write) {
    navigator.clipboard.writeText(write);
}
 
(function() {
    var extensionInstance = new DangerousButUseful(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()

