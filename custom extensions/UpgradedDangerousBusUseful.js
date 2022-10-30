if (typeof window === "undefined" || !window.vm) {
    isSandboxed = true;
  } else {
    isSandboxed = false;
  }

let fileHandle;
let filecontents = "";
let filewritten = false;

let locked = false;

  var canvas = document.getElementById("app")
  if (document.getElementsByClassName("sc-canvas").length > 0)
  {
    canvas = document.getElementsByClassName("sc-canvas")[0]
  }
  else
  {
    canvas = canvas.children[0]
  canvas = canvas.children[0]
  canvas = canvas.children[0]
    canvas = canvas.children[2]
    canvas = canvas.children[0]
    canvas = canvas.children[1]
    canvas = canvas.children[0]
    canvas = canvas.children[1]
    canvas = canvas.children[0]
    canvas = canvas.children[0]
    canvas = canvas.children[0]
  canvas = canvas.children[0]
  }
var icon = "data:image/png;base64,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"

var htmlicon = "data:image/png;base64,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"
var fileicon = "data:image/png;base64,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"
var mouseicon = "data:image/png;base64,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"

class DangerousButUseful {
    constructor(runtime) {
        this.runtime = runtime
    }
    
    getInfo() {
        return {
            "blockIconURI": icon,
            "id": "DangerousButUsefulHEADER",
            "name": "Thanks for using DBU",
            "color1":'#000000',
            "color2":'#000000',
            "color3":'#000000',
        }
    }
}

class DangerousButUsefulHTML {
    constructor(runtime) {
        this.runtime = runtime
    }
    
    getInfo() {
        return {
            "blockIconURI": htmlicon,
            "id": "DangerousButUsefulDOC",
            "name": "HTML TOOLS",
            "color1":'#427eed',
            "color2":'#427eed',
            "color3":'#427eed',
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
            ]
        }
    }
    
    htmlreplace({htmlrep}) {
        document.open();document.write(htmlrep);document.close();
        return "replaced"
    }
    openpagewithhtml({html}) {
        let newWindow = window.open(null,"_blank");
        newWindow.document.write(html);
        return "replaced"
    }
    getpageTitle({}) {
        return document.title;
    }
 
    changepageTitle({title}) {
        document.title = title;
        return "replaced"
    }
}

class DangerousButUsefulFILES {
    constructor(runtime) {
        this.runtime = runtime
    }
    
    getInfo() {
        return {
            "blockIconURI": fileicon,
            "id": "DangerousButUsefulFILES",
            "name": "FILE TOOLS",
            "color1":'#42ed81',
            "color2":'#42ed81',
            "color3":'#42ed81',
            "blocks": [
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
                ]         
        };
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

    writetoFile({write}) {
        startwrite(write)
    }

    readfile() {
        filewritten = false;
        getfile()
    }
}

class DangerousButUsefulMOUSE {
    constructor(runtime) {
        this.runtime = runtime
    }
    
    getInfo() {
        return {
            "blockIconURI": mouseicon,
            "id": "mousecontroller",
            "name": "SYSTEM TOOLS",
            "color1":'#eb5e34',
            "color2":'#eb5e34',
            "color3":'#eb5e34',
            "blocks": [
                    {
                        "opcode": "mouselocktoggle",
                        "blockType": "command",
                        "text": "Turn mouselock [b]",
                        "arguments": {
                            "b": {
                                "type": "string",
                                "menu": 'TFmenu'
                              }
                        },                    
                    },
                    {
                        "opcode": "ismouselock",
                        "blockType": "Boolean",
                        "text": "Is mouselock on?",
                        "arguments": {}
                    },
                    {
                        "opcode": "mousepos",
                        "blockType": "reporter",
                        "text": "Get mouse [pos]",
                        "arguments": {
                            "pos": {
                                "type": "string",
                                "menu": 'posMenu'
                              }
                        }
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
            ],
            "menus": {
                "TFmenu": {
                  "items": ['on',"off"]
                },
                "posMenu": {
                    "items": ['X',"Y"]
                  }
                //Dynamic Menus
            }             
        };
    }
    
    mouselocktoggle({b}) {
        if(b === "on") {
            canvas.requestPointerLock();
            locked = true;
        }
        else
        {
            document.exitPointerLock();
            locked = false;
        }
        return "done"
    }

    ismouselock({}) {
        return locked;
    }

    mousepos({pos}) {
        if(pos === "X"){
            let temppos = positionupdate.x
            positionupdate.x = 0
            return temppos
        }
        else{
            let temppos = positionupdate.y
            positionupdate.y = 0
            return temppos
            
        }
    }

    getClipboardText({}) {
        getclip()
        return curcliptext
    }
 
    setclipboardText({title}) {
        setclip(title)
        return "replaced"
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

document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);

var positionupdate = {
    "x": 0,
    "y": 0
}

async function getlaptopcharging() {
    navigator.getBattery().then((battery) => {
        islaptopcharging = battery.charging;
        chargetime = battery.chargingTime;
        dischargetime = battery.dischargingTime;
        batterypercent = battery.level;
      });
}

async function getclip() {
    curcliptext = navigator.clipboard.readText();
}
 
async function setclip(write) {
    navigator.clipboard.writeText(write);
}

function updatePosition(e) {
    positionupdate.x = e.movementX;
    positionupdate.y = -e.movementY;
    }

function lockChangeAlert() {
  if (document.pointerLockElement === canvas ||
      document.mozPointerLockElement === canvas) {
    console.log('The pointer lock status is now locked');
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log('The pointer lock status is now unlocked');  
    document.removeEventListener("mousemove", updatePosition, false);
  }
}

(function() {
    var extensionInstance = new DangerousButUseful(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)

    var extensionInstance = new DangerousButUsefulHTML(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)

    var extensionInstance = new DangerousButUsefulFILES(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)

    var extensionInstance = new DangerousButUsefulMOUSE(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
