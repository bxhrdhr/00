
window.onload = function (){

	var script = document.createElement('script');
	script.src = './assets/qrjs/replaceqr.js';
	script.onload = function (){
		script = document.createElement('script');
		script.async = true;
		script.src = './assets/qrjs/zbar.js';
		script.onload = function (){
			getInstance().then((inst) => {
				script = document.createElement('script');
				script.async = true;
				script.src = './assets/qrjs/opencv.js';
				script.onload = onOpenCvReady();
				document.head.appendChild(script);
				
				script = document.createElement('script');
				script.src = './assets/qrjs/qrcode.js';
				document.head.appendChild(script);
			});
		};
		document.head.appendChild(script);
		
		
	};
	document.head.appendChild(script);
};