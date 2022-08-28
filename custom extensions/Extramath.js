if (typeof window === "undefined" || !window.vm) {
    isSandboxed = true;
  } else {
    isSandboxed = false;
  }

class ExtraMath {
    constructor(runtime) {
        this.runtime = runtime
    }
    
    getInfo() {
        return {
            "id": "extramath",
            "name": "Extra Math",
            "color1":'#5cb712',
            "color2":'#5cb712',
            "color3":'#5cb712',
            "blocks": [
                    {
                        "opcode": "exponent",
                        "blockType": "reporter",
                        "text": "[b] ^ [i]",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": ""
                            },
                            "i": {
                                "type": "number",
                                "defaultValue": ""
                            }
                        },                    
                    },
                    {
                        "opcode": "clamp",
                        "blockType": "reporter",
                        "text": "clamp [a] to a number between [b] and [c]",
                        "arguments": {
                            "a": {
                                "type": "number",
                                "defaultValue": ""
                            },
                            "b": {
                                "type": "number",
                                "defaultValue": ""
                            },
                            "c": {
                                "type": "number",
                                "defaultValue": ""
                            }
                        },                    
                    }
            ],           
        };
    }
    
    exponent({b,i}) {
        return Math.pow(b,i);
    }

    clamp({a,b,c}) {
        if(a > c)
        {
            return c;
        }
        else if (a < b)
        {
            return b;
        }
        return a;
    }
}

(function() {
    var extensionInstance = new ExtraMath(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
