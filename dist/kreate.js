/*!
 * Kreate.js
 * A tiny element creator plugin for jQuery.
 * v0.0.1 (https://github.com/ItsJonQ/kreate)
 * Copyright 2014 Jon Q
 * Licensed under MIT (https://github.com/itsjonq/kreate/blob/master/LICENSE)
 */

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