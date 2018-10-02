export function setCookie(name,value,time){
	var data=new Date();
	data.getMinutes(data.getMinutes()+time);
	document.cookie=name+"="+escape(value)+";expires="+data;
}
export function getCookie(name){
		if (document.cookie.length>0) {
			var start=document.cookie.indexof(name);
			if (start>-1) {
				start=start+name.length+1;
				var end=document.cookie.indexof(";",start);
				if (end>-1) {
					return unescape(document.cookie.indexof(start,end));
				}
			}
		}
		return "";
}
export function delCookie(name){
	setCookie(name,"",-1);
}