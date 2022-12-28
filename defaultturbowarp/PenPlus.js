(function(Scratch) {
  'use strict';
  class BetterPen {
    getInfo () {
      return {
        "id": "betterpen",
          "name": "Pen+",
          "color1":'#0e9a6b',
          "color2":'#0e9a6b',
          "color3":'#0e9a6b',
          "docsURI": 'https://www.youtube.com/playlist?list=PLdR2VVCBIN3CceUdgKWOUxFEEbLqWgCC9',
          "blockIconURI": "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNy44NjkyMSIgaGVpZ2h0PSI0OC44NTI3MiIgdmlld0JveD0iMCwwLDM3Ljg2OTIxLDQ4Ljg1MjcyIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgY3g9IjIzNy41NDM0IiBjeT0iMTg0LjAwNTYiIHI9IjkuOTg1NDkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjY2ZkNWU5Ii8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyMy4zMDE4MSwtMTYzLjc2MzA5KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjUuMTYzNTYsMTkzLjIwMDIxYzAuNTYxNTMsLTEuMTA3NDYgMi4yMzQwNCwtMy4yODU4MyAyLjIzNDA0LC0zLjI4NTgzYzAsMCAwLjU5NDQyLDEuODIzOTEgMS4yMjQ0OSwyLjU5NTc1YzAuNjMyMTIsMC43NzQzNSAyLjA4ODc4LDEuNDc0ODQgMi4wODg3OCwxLjQ3NDg0YzAsMCAtMi4xOTQ0NiwxLjI4MTQxIC0zLjMyNDIxLDEuNzI2OTVjLTEuMTEwMzIsMC40Mzc4NyAtMy4zOTcsMC45MjM2NyAtMy4zOTcsMC45MjM2N2MwLDAgMC41OTk3NCwtMi4zMDI5OSAxLjE3MzksLTMuNDM1Mzh6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9IiM1NzVlNzUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjI3LjYxMTMxLDE4OS4yOTIwM2wxNC45NTE1NCwtMTUuMjcxOTNjMCwwIDIuMjA2LDAuODk1MDUgMi45NTc3NiwxLjYzMDQ3YzAuODY4OCwwLjg0OTkxIDEuOTU0ODksMy4xNzUzOCAxLjk1NDg5LDMuMTc1MzhsLTE2LjEyNjMxLDE1LjE2NTE0YzAsMCAtMi4wMDYzOSwtMS4xMjc4NiAtMi42MDkyMSwtMS44ODU2OGMtMC42NDA4MiwtMC44MDU2IC0xLjEyODY4LC0yLjgxMzM3IC0xLjEyODY4LC0yLjgxMzM3eiIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIzNy43NTY5OSwxNzIuOTUyMTNjMCwwIDAuOTg2MTksMS4wNTA2MiAyLjM5NjA4LC0wLjI3MDcyYzEuODAzLC0xLjY4OTc3IDQuMjMxMDUsLTUuOTAxNDcgNS40NDc0MywtNi41ODcwN2MxLjM3NDgsLTAuNzc0ODkgMy45MDQxNCwwLjIzNjM5IDMuOTA0MTQsMC4yMzYzOSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMzYuMDc5ODEsMTcyLjMxMTM1YzAsLTAuNjkwMzYgMC41NTk2NCwtMS4yNSAxLjI1LC0xLjI1YzAuNjkwMzYsMCAxLjI1LDAuNTU5NjQgMS4yNSwxLjI1YzAsMC42OTAzNiAtMC41NTk2NCwxLjI1IC0xLjI1LDEuMjVjLTAuNjkwMzYsMCAtMS4yNSwtMC41NTk2NCAtMS4yNSwtMS4yNXoiIGZpbGw9IiM1NzVlNzUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI1MC45OTk3OSwxNjQuNzI4NzdjMCwwIDEuOTEzOTYsLTEuMDUxOTMgNC4yMDAwOSwxLjMyMzU4YzIuNDI2ODUsMi41MjE3MyAwLjYwNTc2LDQuNDQzNDQgMC42MDU3Niw0LjQ0MzQ0bC04LjMzMDE0LDguMjIzMzVjMCwwIC0wLjc1MDQsLTIuMDcxMTIgLTEuNTYyNDksLTIuNzk0OTRjLTAuODI1MjQsLTAuNzM1NTUgLTMuMzUwMTYsLTEuNTgzNzMgLTMuMzUwMTYsLTEuNTgzNzN6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9IiM1NzVlNzUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzkuODkzMzcsMjAxLjcxMTE4KSBzY2FsZSgwLjg3MjM3LDAuODcyMzcpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZThlYmY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4rPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTYuNjk4MTkxNTI3MDE2NDYyOjE2LjIzNjkxNDk5OTk5OTk4Mi0tPg==",
          "blocks": [
            {
              "opcode": "coordBlock",
              "blockType": "reporter",
              "text": "[c1][c2][c3][c4][c5][c6]",
              "arguments": {
                  "c1": {
                      "type": "number",
                      "defaultValue": "0"
                  },
                  "c2": {
                    "type": "number",
                    "defaultValue": "0"
                },
                "c3": {
                  "type": "number",
                  "defaultValue": "0"
              },
              "c4": {
                "type": "number",
                "defaultValue": "0"
            },
            "c5": {
              "type": "number",
              "defaultValue": "0"
          },
          "c6": {
            "type": "number",
            "defaultValue": "0"
        }
              }                    
          },  
                        {
                          "opcode": "precachetextures",
                          "blockType": "command",
                          "text": "precache texture [uri] clamp the texture? [clamp]",
                          "arguments": {
                              "uri": {
                                  "type": "string",
                                  "defaultValue": "uri here"
                              },
                              "clamp": {
                                "type": "string",
                                "menu": 'TFmenu'
                              }
                          }                    
                      },
                  {
                      "opcode": "settargetsw",
                      "blockType": "command",
                      "text": "Change the target screen size to width[width] and height[height]",
                      "arguments": {
                          "width": {
                              "type": "number",
                              "defaultValue": "480"
                          },
                          "height": {
                              "type": "number",
                              "defaultValue": "360"
                          }
                      }                    
                  },
                  {
                      "opcode": "pendrawspritefromurl",
                      "blockType": "command",
                      "text": "Stamp the image from url:[url] at x:[x] y:[y]",
                      "arguments": {
                          "url": {
                              "type": "string",
                              "defaultValue": "https://en.scratch-wiki.info/w/images/thumb/ScratchCat-Small.png/200px-ScratchCat-Small.png"
                          },
                          "x": {
                              "type": "number",
                              "defaultValue": "240"
                          },
                          "y": {
                              "type": "number",
                              "defaultValue": "180"
                          }
                      }                    
                  },
                  {
                    "opcode": "rotateStamp",
                    "blockType": "command",
                    "text": "Set stamp rotation to [ANGLE]",
                    "arguments": {
                      "ANGLE": {
                        "type": "angle",
                        "defaultValue": "90"
                      }
                    }                    
                  },
                  {
                    "opcode": "getstamprotation",
                    "blockType": "reporter",
                    "text": "Stamp Rotation",
                    "arguments": {
                      "ANGLE": {
                        "type": "angle",
                        "defaultValue": "90"
                      }
                    }                    
                  },
                  {
                      "opcode": "setpenstrechandsquash",
                      "blockType": "command",
                      "text": "Set stamp width to [width] and height to [height]",
                      "arguments": {
                          "width": {
                              "type": "number",
                              "defaultValue": "64"
                          },
                          "height": {
                              "type": "number",
                              "defaultValue": "64"
                          }
                      }                    
                  },
                  {
                      "opcode": "getstampwidth",
                      "blockType": "reporter",
                      "text": "Stamp Width",
                      "arguments": {
                      }                    
                  },
                  {
                      "opcode": "getstampheight",
                      "blockType": "reporter",
                      "text": "Stamp Height",
                      "arguments": {
                      }                    
                  },
                  {
                    "opcode": "setstampcolor",
                    "blockType": "command",
                    "text": "Tint stamp by [color] and transparency[T](0-255)",
                    "arguments": {
                      "color": {
                        "type": "color",
                        "defaultValue": '#ffffff'
                      },
                      "T":{
                        "type": "number",
                        "defaultValue": '0'
                      }
                    }                    
                  },
                  {
                      "opcode": "getcostumedata",
                      "blockType": "reporter",
                      "text": "Get data uri of costume[costu] in sprite[spr] (0 is stage)",
                      "arguments": {
                          "costu": {
                              "type": "number",
                              "defaultValue": "0"
                          },
                          "spr": {
                              "type": "number",
                              "defaultValue": "1"
                          }
                      }                    
                  },
                  /*{
                      "opcode": "getimagefromurl",
                      "blockType": "reporter",
                      "text": "Get data uri from url:[url]",
                      "arguments": {
                          "url": {
                              "type": "string",
                              "defaultValue": "https://en.scratch-wiki.info/w/images/thumb/ScratchCat-Small.png/200px-ScratchCat-Small.png"
                          }
                      }                    
                  },*/
                  {
                    "opcode": "pendrawtexturedtrifromurl",
                    "blockType": "command",
                    "text": "Draw a triangle with points at(seperated by commas)[trianglepoints] and the uvs of [triangleuvs] with the image from url:[url]",
                    "arguments": {
                        "url": {
                            "type": "string",
                            "defaultValue": "https://en.scratch-wiki.info/w/images/thumb/ScratchCat-Small.png/200px-ScratchCat-Small.png"
                        },
                        "trianglepoints": {
                            "type": "string",
                            "defaultValue": "0,0,10,10,0,10"
                        },
                        "triangleuvs": {
                            "type": "string",
                            "defaultValue": "0,0,1,1,0,1"
                        }
                    }                    
                },
                {
                  "opcode": "settripointcolour",
                  "blockType": "command",
                  "text": "Tint point [pointmenu] by [color] and transparency[T](0-255)",
                  "arguments": {
                    "pointmenu": {
                      "type": "string",
                      "menu": 'pointmenu'
                    },
                    "color": {
                      "type": "color",
                      "defaultValue": '#ffffff'
                    },
                    "T":{
                      "type": "number",
                      "defaultValue": '0'
                    }
                  }                    
                },
                {
                  "opcode": "gettargetstagewidth",
                  "blockType": "reporter",
                  "text": "Target Stage Width",
                  "arguments": {
                  }                    
                },
                {
                  "opcode": "gettargetstageheight",
                  "blockType": "reporter",
                  "text": "Target Stage Height",
                  "arguments": {
                  }                    
                },
                {
                  "opcode": "converttocanvascoords",
                  "blockType": "reporter",
                  "text": "Convert [scrcoord] to [coordTypes] units on the axis [coordmenu]",
                  "arguments": {
                    "coordmenu": {
                      "type": "string",
                      "menu": 'coordMenu'
                    },
                    "scrcoord": {
                      "type": "number",
                      "defaultValue": '0'
                    },
                    "coordTypes": {
                      "type": "string",
                      "menu": 'coordTypes'
                    }
                  }                    
                },
                {
                  "opcode": "rgbtoSColor",
                  "blockType": "reporter",
                  "text": "Convert R[R] G[G] B[B] to Hex",
                  "arguments": {
                    "R": {
                      "type": "number",
                      "defaultValue": '255'
                    },
                    "G": {
                      "type": "number",
                      "defaultValue": '255'
                    },
                    "B": {
                      "type": "number",
                      "defaultValue": '255'
                    }
                  }                    
                }
          ],        
          "menus": {
            "coordMenu": {
                "items": ['x', 'y']
            },
            "coordTypes": {
              "items": ['Canvas', 'Scratch']
            },
            "pointmenu": {
              "items": ['1', '2', '3']
            },
            "TFmenu": {
              "items": ['true',"false"]
            },
            //Dynamic Menus
        }   
      };
    }
  }
  Scratch.extensions.register(new BetterPen());
})(Scratch);
