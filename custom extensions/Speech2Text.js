var text = "poo"
var vcstarted = false
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
    if (vcstarted = true){
        text = Array.from(e.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join(""); 
    }
})

recognition.addEventListener("end", () => {
    recognition.start();
});

if (typeof window === "undefined" || !window.vm) {
    isSandboxed = true;
  } else {
    isSandboxed = false;
  }

  recognition.start();

class voiceRecognition {
    constructor(runtime) {
        this.runtime = runtime
    }
    
    getInfo() {
        return {
            "id": "voiceRec",
            "name": "Voice Recognition",
            "color1":'#9addc9',
            "color2":'#9addc9',
            "color3":'#9addc9',
            "blocks": [
                    /*{
                        "opcode": "startVoiceRec",
                        "blockType": "command",
                        "text": "Start Recording",
                        "arguments": {
                        },                    
                    },*/
                    {
                        "opcode": "getSaid",
                        "blockType": "reporter",
                        "text": "Words said",
                        "arguments": {
                        },                    
                    }/*,
                    {
                        "opcode": "endVoiceRec",
                        "blockType": "command",
                        "text": "Stop Recording",
                        "arguments": {
                        },                    
                    },
                    {
                        "opcode": "isRec",
                        "blockType": "Boolean",
                        "text": "Recording voice?",
                        "arguments": {
                        },                    
                    }*/
            ],           
        };
    }
    isRec({})
    {
        return vcstarted;
    }

    getSaid({b,pr,i}) {
        return text;
    }

    startVoiceRec({})
    {
        vcstarted = true
        return "started"
    }

    endVoiceRec({})
    {
        vcstarted = false
        return "stopped"
    }
}

(function() {
    var extensionInstance = new voiceRecognition(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
