function init() {
	document.getElementById('key').focus();

	document.getElementById('key').addEventListener('keyup', function() {
		convertToDecimal();
	});
}

function convertToDecimal() {
	var key = document.getElementById('key');
	var keypressed = document.getElementById('keypressed');
	
	keypressed.value = key.value;
	var url = 'response?key=' + escape(key.value);
	var req = createAjaxRequest();
	req.open('get', url, true);
	req.onreadystatechange = function() {
		if (req.readyState == 4 && req.status == 200) {
			document.getElementById('decimal').value = req.responseText;
		}
		document.getElementById('key').value = '';
	}; 
	req.send(null);
}

function createAjaxRequest() {
	var req;
	if (window.XMLHttpRequest) {
		req = new XMLHttpRequest();
	} else {
		req = new ActiveXObject('Microsoft.XMLHTTP');
	}
	return req;
}

window.addEventListener('load', init);
