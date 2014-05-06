#Kreate.js#
A tiny element creator plugin for jQuery.

<img src="https://raw.githubusercontent.com/ItsJonQ/kreate/master/images/kreate-logo.png">

Kreate is a tiny helper method for jQuery that can quickly generate DOM elements as a standard jQuery object. You can use Kreate to create a single DOM element (such as a div) or up to however many elements your browser can handle before crashing*.

\* I was able to generate 10 million elements. I tried 1 billion once, but Chrome crashed :(

## Why Use Kreate?
In most cases, Kreate can create a single or multiple elements faster than jQuery - sometimes, significantly faster. Check out these [performance tests](http://jsperf.com/kreate-js-vs-jquery) setup on JSPerf.

Kreate can also be quicker and cleaner to write if you're planning on generating a series of elements.

#####Kreate Example#####
```
$.kreate({
    tag: 'li',
    class: 'list-item',
    length: 5
});
```

#####jQuery Example#####
```
$('<li class="list-item"></li><li class="list-item"></li><li class="list-item"></li><li class="list-item"></li><li class="list-item"></li>');
```

## Requirements
- [jQuery](http://jquery.com/)
- A can-do attitude!

## How To Use
#### Downloading from Github ####
You can download (as zip) or clone Kreate from Github.

#### Installing from Bower #####
To install it using [Bower](http://bower.io/) with this command, ideally from within your project's directory:
```
bower install kreate
```

Once you've got the files either from Github or Bower, load up Kreate **after** you add jQuery to your project

#####Example#####
```
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="kreate.js"></script>
```

## Learning How to "Kreate"
You can kreate elements using two kreation methods: "express" and "advanced".

##### Express
```
$.kreate('div.classname');
```

##### Advance
```
$.kreate({
    tag: 'div',
    class: 'classname'
});
```

Learn more about these methods by checking out [http://itsjonq.github.io/kreate/#kreating-101](Kreating 101).


## Options
Kreate was intentionally kept relatively minimal to ensure that executes quickly. Nevertheless, there are a handful of options that can customize and fancify your elements.

- [tag](#tag)
- [class](#class)
- [id](#id)
- [attr](#attr)
- [content](#content)
- [length](#length)
- [uniqueId](#uniqueId)
- [startId](#startId)
- [output](#output)

```
$.kreate({
    tag: 'div',
    class: 'classname',
    length: 15,
    id: 'post',
    attr: {
        'data-lazy': true
    }
});
```
The above example should generate a jQuery object with 15 div elements. Each of theme with the class of "classname" and an attribute of "data-lazy"="true". They should also have id's of post-1, post-2.. post-15. Neat right? More on that below!

#### tag
Option: `tag`  Default: `div`  Type: `string`
```
$.kreate({ tag: 'div' });
```
This defines what type of element you wish to Kreate. By default, Kreate will render div elements if nothing is defined.

This will render the follow HTML element
```
<div></div>
```


#### class
Option: `class`  Type: `string`
```
$.kreate({ class: 'classname' });
```
This defines the class/classes you wish to tack onto your element(s). You can add as many classes as you wish - just separate them with a space.
```
$.kreate({ class: 'class-one class-two class-three class-four' });
```

This will render the follow HTML element
```
<div class="class-one class-two class-three class-four"></div>
```


#### id
Option: `id`  Type: `string`
```
$.kreate({ id: 'post' });
```
This defines the id of the element(s) you're generating.

##### Incrementing IDs
If you're generating multiple elements with IDs, Kreate will add a hyphenated number at the end to (try to) ensure that the IDs are unique.

For example, the snippet below will render 3 spans with defined IDs
```
$.kreate({ tag: 'span', id: 'label' });
```

This will render the follow HTML elements
```
<span id="label-1"></span><span id="label-2"></span><span id="label-3"></span>
```


#### attr
Option: `attr`  Type: `object`
```
$.kreate({
    attr: {
        'data-lazy': 'lazy-load'
    }
});
```
This defines attributes for your element/elements (that aren't classes or id). This particular option is defined by an object, which allows you to set multiple attributes at once (if you wish).

For example, the snippet below will render an image with a defined src as well as a data lazy-load attribute.
```
$.kreate({
    tag: 'img',
    attr: {
        src: 'my-awesome-image.jpg',
        'data-lazy': 'lazy-load',
        'data-load-type': 'fade-in'
        'data-lazy-load-speed': 'fast'
    }
});
```
This will render the follow HTML element
```
<img src="my-awesome-image.jpg" data-lazy="lazy-load" data-load-type="fade-in" data-lazy-load-speed="fast">
```


#### content
Option: `content`  Type: `string`
```
$.kreate({ content: 'Stuff!' });
```
This injects content into your element. The content can be plain text or HTML.

For example, the snippet below will inject a span with some text inside of a Kreated div:
```
$.kreate({ tag: 'div', content: '<span>Stuff!</span>' });
```

This will render the follow HTML elements
```
<div><span>Stuff!</span></div>
```


#### length
Option: `length`  Default: `1`  Type: `number`
```
$.kreate({ length: 2 });
```
This determines how many elements Kreate will generate. By default, Kreate will only make 1 element. You can make as many as your browser can handle. Although, I don't recommend going over 15 million (which does work!).

For example, the snippet below will render 3 list items
```
$.kreate({ tag: 'li', length: 3 });
```

This will render the follow HTML elements
```
<li></li><li></li><li></li>
```


#### uniqueId
Option: `uniqueId`  Default: `true`  Type: `boolean`
```
$.kreate({ uniqueId: true });
```
This determines whether or not Kreate will add numerated IDs to your elements if you generate multiple elements. **It is super highly recommended you leave this as true**. But, for whatever reason, if you're okay with having multiple IDs, you can flip it off by setting it as `false`.


#### startId
Option: `startId`  Default: `1`  Type: `number`
```
$.kreate({ startId: 1 });
```
This is used when you're Kreating multiple elements **and** you've decided to add IDs to them using the `id` option. By default, the numeration should start at `-1`. However, you can start it at any number you wish by adjusting the `startId`.

For example, the snippet below will render 3 list items, starting from the ID of 5.
```
$.kreate({ tag: 'li', length: 3, id: 'task', startId: 5 });
```

This will render the follow HTML elements
```
<li id="task-5"></li><li id="task-6"></li><li id="task-7"></li>
```

#### output
Option: `output`  Settings: `jquery` || `html` || `array`  Default: `jquery`  Type: `string`
```
$.kreate({ output: 'jquery' });
```
This determines the output of Kreate. By default, it should Kreate a jQuery object with your generated elements. However, you can instead output Kreate as an HTML string by using `output: "html"`.

For example, the snippet below will render 3 list items as HTML
```
var a = $.kreate({ tag: 'li', length: 3, output: 'html' });
```

The variable "a" should equal
```
<li></li><li></li><li></li>
```

You can also output Kreate as an array by using `output: "array"`.


## Have Fun!
That's it! There isn't really much to it. Any and all feedback is welcome! Good luck and have fun **Kreating** :).

## "Kreator" ( Get it? No? Fine.. ;) )
#### Jon Q
- [http://www.jonquach.com](http://www.jonquach.com)
- [http://www.twitter.com/itsjonq](http://www.twitter.com/itsjonq)
- [https://github.com/ItsJonQ/kreate/](https://github.com/ItsJonQ/kreate/)