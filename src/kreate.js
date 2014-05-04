(function ($, undefined) { "use strict";

    // Return false if jQuery is not defined or valid
    if(!$ || typeof jQuery !== "function") {
        return false;
    }

    var kreate;

    // Defining kreate
    kreate = function(options) {

        /**
         * settings
         * These are the default settings/options for the plugin
         *
         * @type { object }
         */
        var settings = $.extend({

        }, options);

    };

    // Adding kreate to jQuery
    jQuery.kreate = kreate;

})(jQuery);