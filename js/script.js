/*jshint multistr: true */
	function log(message,txt){
	//usage = log("my context","my message");
		var context = "'"+message +"'"+'¬ \n';
		if (message){
			console.log(context  + txt); 
		}else {
			console.log(txt); 
		}
	}
	
// These options could be on the page and deliver unique option into the script via a passed parameter
var jsonDrivenBanner = {
	jsonURL: "",
	mode: "desktop",
	mobile: 480,
	tablet: 787,
	desktop: 1080,
	init: function(pathtojson){
		jsonDrivenBanner.triggerReq(pathtojson);
		
	},
	cta: function (){
//log("banner .jsonfeed", $( "#banner .jsonfeed" ).length);
		$( "#banner .jsonfeed").hover( function() {
				$( this ).find("a").addClass("grow");
  			}, function() {
    			$( this ).find("a").removeClass("grow");
  			}
		);
	}, 

	resizer: function (){
    var ScrW =  jQuery(window).width(),
        resizeTimer;
    if (resizeTimer) clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(function() {
	      // on resize do responsive funcs
//log("resize change ", ScrW);
	       jsonDrivenBanner.responsive(ScrW);
	    }, 300);
	},

	responsive : function (ScrW){	
		if (ScrW <= jsonDrivenBanner.desktop){
			mode = 'tablet';
		}
		if (ScrW <= jsonDrivenBanner.mobile){
			mode = 'mobile';
		}
		if (ScrW >= jsonDrivenBanner.desktop){
			mode = 'desktop';
		}

//log("mode is", mode);
		if (mode ==="desktop"){
			$("#banner span:eq(0) img").each(function(i){
				var imgpath = $(this).data('imgfull');
				$(this).attr('src', imgpath);
			});
			$("#banner span:gt(0) img").each(function(i){
				var imgpath = $(this).data('imgsmall');
				$(this).attr('src', imgpath);
			});
		}
		if (mode ==="tablet"){		
			$("#banner span:eq(0) img").each(function(i){
				var imgpath = $(this).data('imgfull');
				$(this).attr('src', imgpath);
			});
			$("#banner span:gt(0) img").each(function(i){
				var imgpath = $(this).data('imgsmall');
				$(this).attr('src', imgpath);
			});
		}
		if (mode ==="mobile"){
			$("#banner span img").each(function(i){
				var imgpath = $(this).data('imgsmall');
				$(this).attr('src', imgpath);
			});
		}
	},
	triggerReq : function (jsonURL) {
		jsonURL= jsonURL;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				var json_raw, data;
				json_raw = xhttp.responseText;
				data = JSON.parse(json_raw);
				jsonDrivenBanner.processJson(data);
			}
		};
		xhttp.open("GET", jsonURL, true);
		xhttp.send();
	},
	processJson : function (data){
	var l = data.heroList.heroItems.length,
	base = data.baseSite,
	output = "",
	ScrW =  jQuery(window).width();
	// get 
	jsonDrivenBanner.responsive(ScrW);
//log('browser mode',mode);
		for (var i = 0; i < l; i++) {
		    var article = data.heroList.heroItems[i],
		        img = "",
		        initimg = "",
		        imgsmall = "",
		        headline = "",
		        textpos = "BL",
		        cta = "";

		        if(article.imageUrl){
		        	imgfull = base+article.imageUrl;
		        	imgsmall = base+article.smallImg;
		        	if (mode === 'mobile'){
		        		initimg = imgsmall;
		        	}
		        	else{
		        		initimg = imgfull;
		        	}
		        	
		        }
		        if(article.headlineText){
		        	headline = "<h3>" + article.headlineText + "</h3>";
		        }
		        if (article.cta.link){    	
		    		cta = "<a href='" + article.cta.link + "''>"+ article.cta.text +"</a>";
				}
				if(article.cta.textpos){
		        	textpos = article.cta.textpos;
		        }

		        output = "<img data-imgfull='"+imgfull+"' data-imgsmall='"+imgsmall+"' src='"+ initimg + "'/>"+
		        "<span class='textwrapper " + textpos + "'>" + headline + cta + "</span>"; 

	//log('output',output);
			$("#banner .jsonfeed:eq("+i+")").html(output);
		}
		jsonDrivenBanner.cta();
	}
};

// Reset when resizing window 
$(window).resize(jsonDrivenBanner.resizer);



