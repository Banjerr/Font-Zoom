// get cookie
function loadOffsetFromCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

// save cookie
function saveOffsetToCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

// load offset every page load
var offset = loadOffsetFromCookie('textSize');

jQuery(document).ready(function()
{
    // if there is an offset cookie already set, add it to the font size
    jQuery(".larger").each(function(){
        if (offset !== '') {
            // add the offset to the font size
            jQuery(this).css("font-size", parseInt(offset) + "px");
        }
    });

    // function to resize text
    function resizeText(num)
    {
        jQuery(".larger").each(function(){
            // grab the numerical value of the font-size
            var fontsize = jQuery(this).css("font-size").replace(/[^-\d\.]/g, '');

            // add fontsize to num
            offset = (+fontsize) + (+num);

            // add the offset to the font size
            jQuery(this).css("font-size", parseInt(offset) + "px");
        });
        //save offset here
        saveOffsetToCookie('textSize', offset, 7);
    }

    // make the font bigger
	jQuery(".zoomIn").click(function() {
		resizeText(1);
	});

    // make the font smaller
	jQuery(".zoomOut").click(function() {
		resizeText(-1);
	});
});
