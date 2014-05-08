/**
 * Kreate - Emmett Style Parsing Test
 */
(function() {

    var test = function(t) {
        var templates = t.split(">");

        var _el = [];
        // var templates = [];
        var elements = [];
    /**
     * Template Parser
     *     tag
     *     #id / .class
     *     * multiplier
     *     [ attributes ]
     *     $ numerator
     */
     var elReg = /^[\w-]+|(#|\.)([\w-]+)|(\*)([\w-]+)|(\>)|(\$)|\[(.*?)\]|\{(.*?)\}/g;

    // Test Selector
    // $.kreate(selector)

    // Settings
    // Default settings for element creation

    var Template = function(options) {
        var settings =  {
            tag: 'div',
            class: '',
            id: '',
            numeration: false,
            attr: [],
            uniqueId: true,
            startId: 1,
            length: 1
        };
        return settings;
    };

    /**
     * _parseAttr
     * This is used to parse and setup attributes, if defined
     */
     var _parseAttr = function(attr) {
        // Remove the = in the attr
        attr = attr.replace("=", "").split("\"");
        this.attr.push(attr[1]);
    };



    var _parseTemplate = function(template, index) {
        var selector = new Template();
        selector.eid = index;
        // Parsing Stage 1
        var matches = template.match(elReg);
        // Looping through all the parsed matches
        for(var i = 0, len = matches.length; i < len; i++) {
            // Defining single match
            var match = matches[i];

            // Parsing the first character of the match
            switch(match[0]) {

                // Check for ID
                case "#" :
                selector.id = match.substring(1);
                break;

                // Check for class
                case "." :
                selector.class += match.substring(1) + " ";
                break;

                // Check for multiplier
                case "*" :
                selector.length = parseInt(match.substring(1), 10);
                break;

                // Check for Nesting
                case ">" :
                break;

                // Check for numeration
                case "$" :
                selector.numeration = true;
                break;

                // Check for custom attributes
                case "[" :
                    // Removing the brackets and splitting based on space
                    var attrs = match.substring(1, (match.length-1)).split(" ");
                    // Defining the attribute length for loop
                    var attrsLen = attrs.length;
                    // Looping throught attributes
                    while(attrsLen--) {
                        // Parsing the attribute
                        _parseAttr.call(selector, attrs[attrsLen]);
                    }
                    break;

                    case "{" :
                    selector.content = (match.substring(1, (match.length-1)));
                    break;

                    case "^" :

                    break;

                // Default to tag (e.g. <div>)
                default :
                selector.tag = match;
            }
        }
        elements.push(selector);
    };



    var _create = function(settings) {
        for(var i = 0, len = settings.length; i < len; i++) {
            var el = document.createElement(settings.tag);

            // Set the class of the element
            if(settings.class) {
                el.className = settings.class;
            }
            // Set the ID of the element
            if(settings.id) {

                /**
                 * ID Numeration
                 * If the user chooses to create multiple elements and an ID
                 * is defined, Kreate will automatically add numeration
                 * to the ID to prevent duplicates
                 */
                 if(len > 1 && settings.uniqueId === true) {
                    // Setting the numerated ID
                    el.id = settings.id + "-" + (settings.startId + i);
                } else {
                    // Setting the ID without numeration
                    el.id = settings.id;
                }
            }

            if(settings.content) {
                el.innerHTML = el.innerHTML + settings.content;
            }

            if(settings.eid >= 1) {
                _el.forEach(function(e) {
                    e.appendChild(el.cloneNode(true));
                });
            } else {
                _el.push(el);
            }
        }
    };

    var createEls = function() {
        for(var i = 0, len = elements.length; i < len; i++) {
            var el = elements[i];
            _create(el);
        }
    };


    for(var i = 0, len = templates.length; i < len; i++ ) {
        _parseTemplate(templates[i], i);
    }

    createEls();

    return _el;
};

(function($) {
    $.pk = function(selector) {
        this.parseHTML(selector);
        return this;
    };
})(jQuery);

window.kreatest = test;
})();

