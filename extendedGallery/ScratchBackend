const Scratch = {
    Cast: {
        toNumber:Number,
        toString:String,
        toBoolean:Boolean,
        compare:(A,B) => {
            A = Number(A);
            B = Number(B);
            if (A>B){
                return 1;
            }
            else if(A<B){
                return -1;
            }
            return 0;
        }
    },
    TargetType: {
        SPRITE: 'sprite',
        STAGE: 'stage'
    },
    ArgumentType: {
        ANGLE: 'angle',
        BOOLEAN: 'Boolean',
        COLOR: 'color',
        NUMBER: 'number',
        STRING: 'string',
        MATRIX: 'matrix',
        NOTE: 'note',
        IMAGE: 'image',
        COSTUME: 'costume',
        SOUND: 'sound'
    },
    BlockType: {
        BOOLEAN: 'Boolean',
        BUTTON: 'button',
        LABEL: 'label',
        COMMAND: 'command',
        CONDITIONAL: 'conditional',
        EVENT: 'event',
        HAT: 'hat',
        LOOP: 'loop',
        REPORTER: 'reporter'
    },  
    vm:window.vm,
    ScratchBlocks:window.ScratchBlocks,
    paper:window.paper,
    ReduxStore:window.ReduxStore,
    extensions: {
        unsandboxed: true,
        register: (object) => {
            const serviceName = window.vm.extensionManager._registerInternalExtension(object);
            window.vm.extensionManager._loadedExtensions.set(object.getInfo().id, serviceName);
        }
    }
};
window.Scratch = Scratch;
