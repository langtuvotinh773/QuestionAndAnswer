// A $( document ).ready() block.
jQuery(document).ready(function () {
    jQuery(".login-panel-link").click(function () {
        if (jQuery(this).hasClass("header-top-active")) { jQuery(".login-panel").slideUp(500); jQuery(this).removeClass("header-top-active"); jQuery(this).find("i").addClass("icon-user"); jQuery(this).find("i").removeClass("icon-remove"); } else { jQuery(".login-panel").slideDown(500); jQuery(this).addClass("header-top-active"); jQuery(this).find("i").removeClass("icon-user"); jQuery(this).find("i").addClass("icon-remove"); }
        return false;
    });
});