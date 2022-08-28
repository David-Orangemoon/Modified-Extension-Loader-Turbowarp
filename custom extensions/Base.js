class BaseExtension {
    constructor(runtime) {
        this.runtime = runtime
    }
    
    getInfo() {
        return {
            "id": "Base",
            "name": "Base",
            "color1":'#8a45b5',
            "color2":'#ca91ed',
            "color3":'#5a0c8a',
            "blocks": [
                    {
                        "opcode": "exampleopcode",
                        "blockType": "reporter",
                        "text": "Example Block [b]",
                        "arguments": {
                            "b": {
                                "type": "number",
                                "defaultValue": "1"
                            }
                        },                    
                    }
            ],           
        };
    }
    
    exampleopcode({b,pr,i}) {
        return "Hello World"
    }
}

(function() {
    var extensionInstance = new BaseExtension(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
