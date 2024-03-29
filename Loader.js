// ==UserScript==
// @name         Plugin loader UI
// @namespace    https://lstv.ml/
// @version      0.4
// @description  Adds an UI option to quickly load plugins. Supports packager too.
// @author       LSTV
// @match        https://turbowarp.org/editor*
// @match        *://packager.turbowarp.org/*
// @icon         https://www.google.com/s2/favicons?domain=turbowarp.org
// @grant        none
// @license MIT
// @downloadURL none
// ==/UserScript==

/* Preets;
Setup your presets here.
When there is [R] at the begining, the "url" parametter is gonna be treated like url, if there is not, it's gonna be treated like pure code.*/
const presets=[
    {"name":"UtilsV2","url":"[R]https://raw.githubusercontent.com/lukas-studio-tv/another-lstv-proxy/main/docs/ws-clone/ml/cdn/dock-snapshot-12422/uploaded-raw-content/hctUsfD2qeUtilsV2.js","color":"lime"},
    {"name":"GameJoltAPI [Beta]","url":"[R]https://lukas-studio-tv.github.io/another-lstv-proxy/ws-clone/ml/cdn/dock-snapshot-12422/uploaded-raw-content/Xzy5wV6Q9WGJ%20API.js","color":"#2f7f6f"},
    {"name":"Scratch Noise","url":"[R]https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/custom%20extensions/Noise.js","color":"purple"},
    {"name":"Audio Manager","url":"[R]https://raw.githubusercontent.com/lukas-studio-tv/another-lstv-proxy/main/docs/ws-clone/ml/cdn/dock-snapshot-12422/uploaded-raw-content/ekCNWxYHTAAudioManager.js","color":"#21c7ff"},
    {"name":"Gamepad","url":"[R]https://romadillo.github.io/Useful-Scratch-Extensions/Gamepad.js","color":"#e4b100"},
    {"name":"Cookies","url":"[R]https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/custom%20extensions/Cookie.js","color":"#755848"},
    {"name":"Xtra Math","url":"[R]https://raw.githubusercontent.com/David-Orangemoon/Modified-Extension-Loader-Turbowarp/main/custom%20extensions/Extramath.js","color":"#5cb712"}
];


var isPackager=location.host.includes("packager");
/*
You can also load plugins from the console instead of using an UI (For example if you need to load a plugin from url) like this:

window.loadPlugin("[R]https://example.com")

The [R] indicates url. If you don't include it, it will get loaded as the code.
*/




/*code*/
window.cPluginURL="";
window.plRefreshPluginPresets = function() {
    var container;
    //if(isPackager){
    //    container = document.querySelector(".pk_preset_c");
    //    container.innerHTML = "";
    //    for (let i=0;i<presets.length;i++) {
    //        var icon="plus-square";
    //        if(twp_ta.value.includes(presets[i].url.substring(3,presets[i].url.length))){icon="trash-fill"}
    //        container.innerHTML = container.innerHTML + `<div class="pl_preset" onclick='addTWPPlugin("`+presets[i].url+`",this)'></span><i class="bi bi-`+icon+`" style="color:`+presets[i].color+`;margin-right:7px;"></i>`+presets[i].name + `</div>`;
    //    }
    //}//else{
        container = document.querySelector(".pl_preset_c");
        container.innerHTML = "";
        for (let i = 0;i< presets.length;i++) {
            container.innerHTML = container.innerHTML + `<div class="pl_preset" onclick='loadPlugin("` + presets[i].url + "?update=" + Math.floor(Math.random() * 1001) + `")'><span class="plcspan" style="background:` + presets[i].color + `;"> ` + presets[i].name + `</div>`;
        }
    //}
}
const RequestNetwork={sendRequest:function(a,b){RequestNetwork.sucess=!0,fetch(a).then(a=>a.text()).then(a=>{RequestNetwork.onRequestResponseRecived(a,b)}).catch(a=>{RequestNetwork.sucess=!1,RequestNetwork.onError(a,b)})},onRequestResponseRecived:function(a,b){console.log(b+", "+a)},onError:function(a,b){console.error("Fetch error, tag:"+b+", error: "+a)},sucess:!1};
if(!isPackager){
    var plbtn = document.createElement('div'),
        elm = document.createElement('div');
    plbtn.className = "menu-bar_menu-bar-item_oLDa- menu-bar_hoverable_c6WFB";
    plbtn.innerHTML = '<div><span>Plugins</span></div>';
    window.loadPlugin = function(pl) {
        if (pl.substring(0, 10).includes("[R]")) {
            window.cPluginURL=pl.substring(3, pl.length);
            RequestNetwork.sendRequest(pl.substring(3, pl.length), 'load');
        } else {
            try {
                eval(pl);
                document.querySelector(".plmenu").style.display = "none";
                document.querySelector(".plinput").value = "";
                document.querySelector(".pltextarea").value = "";
                alert("Plugin loaded. You should now see it in your blocks pallete");
            } catch (e) {
                alert("Error loading plugin:\n" + e)
            }
        }
    }
    setTimeout(function() {
        document.querySelector("#app > div > div > div > div.gui_menu-bar-position_3U1T0.menu-bar_menu-bar_JcuHF.box_box_2jjDp > div.menu-bar_main-menu_3wjWH > div.menu-bar_file-group_1_CHX").appendChild(plbtn);
        plbtn.addEventListener('click', function(e) {
            document.querySelector(".plmenu").style.display = "block";
            document.querySelector(".plinput").value = "";
            document.querySelector(".pltextarea").value = "";
            window.plRefreshPluginPresets();
        })
        elm.className = "plmenu";
        elm.innerHTML = `
<h1 class="pltitle">Load a custom plugin</h1>
<div class="plmenuix"><br>
<h3>Option 1: Select one of your presets to load:</h3><div class="pl_preset_c"></div><br><br>
<h3>Option 2: Paste the extension code here:</h3><br><textarea class='pltextarea'></textarea><br><button onclick='window.loadPlugin(document.querySelector(".pltextarea").value)' class='plbutton' style="width:92%;">Load</button><br><br>
<h3>Option 3: Or load from an URL</h3><br><br><input type='text' class='plinput' placeholder='Enter an plugin URL'><button onclick='window.loadPlugin("[R]"+document.querySelector(".plinput").value)' class='plbutton'>Load</button><br><br><button onclick='document.querySelector(".plmenu").style.display="none";' class='plbutton' style="color:black;background:white;">Cancel</button></div></div>`;
        document.body.append(elm);
        elm = document.createElement('style');
        elm.innerHTML = `/* Style */
.pltitle{background:#2d2d2d;position:absolute;top:0px;left:0px;right:0px;height:40px;}
.plmenu{display:none;text-align:center;position:fixed;z-index:99;top:90px;right:380px;left:380px;border-radius:5px;border:5px solid rgba(93, 93, 93,.6);padding:0px;padding-top:40px;min-width:450px;user-select:none;}
.plmenuix{padding:15px;background:#111111;}
.plbutton{background:#fd4c4c;border-radius:5px;padding:10px;border:none;}
.pltextarea{resize:none;height:100px;width:90%;}
.plinput,.pltextarea{color:white;border:1px solid #2d2d2d;border-radius:5px;outline:none;background:#1e1e1e;padding:9px;}
`;
        document.body.append(elm);
    }, 800);
}else{
    setTimeout(function(){
    var plcat=`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"><div class="card svelte-1qy2cex" style="border-top: 6px solid #F00"><div><h2>Plugins [BETA]</h2><i>Added by the plugin loader UI</i><br>You can add more presets in the script's preset configuration.<br>With this addon you can simply add or remove plugins!<br>+ It (should) save your plugins for this project - even after refresh and with offline access.<br><br><div class="pk_preset_c"><i>Your presets should be displayed here.</i></div></div></div>`;
    //window.plAppendToPackager=function(){
    //    if(document.querySelectorAll(".card")[4]==null){setTimeout(function(){plAppendToPackager()},250)}else{document.querySelectorAll(".card")[4].outerHTML+=plcat;window.twp_ta=document.querySelectorAll("textarea")[2]; if(!twp_ta.value.includes("/* The plugin UI")){twp_ta.value+="/* The plugin UI will add plugins here! Feel free to add your own code, but make sure you do not interrupt the comment blocks indicating plugin start and plugin end.*/\n\n\n"};window.plRefreshPluginPresets();}
    //}
    document.querySelector("button").addEventListener("click",plAppendToPackager)},100);
    window.addTWPPlugin=function(url,src){
        window.cPluginSRC=src.querySelector("i");
        if(twp_ta.value.includes(url.substring(3,url.length))){
        removeTWPPlugin(url.substring(3,url.length));
        }else{
        window.cPluginURL=url.substring(3,url.length);
        RequestNetwork.sendRequest(url.substring(3,url.length)+"?update="+Math.floor(Math.random()*1001),'loadtwp');}
    }
    window.removeTWPPlugin=function(url){
        var safeUrl=url.replaceAll("/","\\\/").replaceAll(".","\\\.").replaceAll(":","\\\:");
        var rgx=new RegExp('\\/\\*\\!\\[loader\]\\[start\\:'+safeUrl+'\\]\\!\\*\\/(.*?)\\/\\*\\!\\[loader\]\\[end\\:'+safeUrl+'\\]\\!\\*\\/', 'is');
        document.querySelectorAll("textarea")[2].value=document.querySelectorAll("textarea")[2].value.replace(rgx,"");
        cPluginSRC.classList.add("bi-plus-square");
        cPluginSRC.classList.remove("bi-trash-fill");
    }
}
var globalStyles=`<style>.pl_preset{background:#333333;color:white;padding:0px;border-radius:0px;display:inline-block;cursor:pointer;margin-bottom:10px;margin-right:40%;margin-left:40%}.plcspan{border-radius:300px;padding:2px;width:25px;height:25px;}</style>`;
setTimeout(function(){document.body.insertAdjacentHTML("afterend",globalStyles);},2000);
    RequestNetwork.onError=function(error, tag) {
        alert("Failed to load plugin from an url. \nPlease make sure that:\n- You are connected to the internet\n- Plugin is loaded over HTTPS\n- That the url has Access-Control-Allow-Origin set to '*'\n\n(Look to the console for details)");
    }

    RequestNetwork.onRequestResponseRecived=function(response, tag) {
        if(RequestNetwork.sucess){
            console.log('Trying to load plugin');
            if(tag=="load"){
                window.loadPlugin(response);
            }else if(tag=="loadtwp"){
                var plug="/*![loader][start:"+cPluginURL+"]!*/"+response+"/*![loader][end:"+cPluginURL+"]!*/";
                twp_ta.value+=plug;
                var evt=new Event('input');twp_ta.dispatchEvent(evt);/*Simulates manual input to force saving the plugin into cache for the current project*/
                cPluginSRC.classList.remove("bi-plus-square");
                cPluginSRC.classList.add("bi-trash-fill");
            }
        }
    }
