    function includeHTML(){var z,i,elmnt,file,xhttp;z=document.getElementsByTagName("*");for(i=0;i<z.length;i++){elmnt=z[i];file=elmnt.getAttribute("include");if(file){xhttp=new XMLHttpRequest();xhttp.onreadystatechange=function(){if(this.readyState==4){if(this.status==200){elmnt.innerHTML=this.responseText}
    if(this.status==404){elmnt.innerHTML="Page not found."}
    elmnt.removeAttribute("include");includeHTML()}}
    xhttp.open("GET",file,!0);xhttp.send();return}}}
    includeHTML()