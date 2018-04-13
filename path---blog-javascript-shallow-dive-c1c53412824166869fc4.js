webpackJsonp([0x7bcae7d8f855],{387:function(e,a){e.exports={data:{markdownRemark:{html:"<p>When it comes to choosing a primary programming language for a project or\nprofessional application, there are plenty of different factors that need to be\nconsidered. Among those, there are also different types or categories of\nprogramming languages to choose from as well; some of which being scripting or\ninterpreted languages and compiled languages. While each flavor of programming\nlanguage has their own weaknesses and strengths, one particular scripting\nlanguage, known as JavaScript, is rapidly growing and becoming more ubiquitous\nacross all kinds of programming stacks. Starting out as a simple language used\nfor the web, JavaScript has quickly become much more than that; now appearing\nin all sorts of different kinds of applications like machine learning programs\nand can even be used for writing servers. JavaScript is easily one of the most\nversatile and powerful scripting languages in modern programming, and can be\nused to build strong and scalable applications.</p>\n<h2>Programming Paradigm &#x26; Continuations</h2>\n<p>One of the many characteristics of JavaScript that make this language so unique\nis its flexible support for a multitude of programming paradigms. At its core,\njust about everything in JavaScript is an object that is implemented as an\nassociative array, with the exception of its six primitive types: string,\nnumber, boolean, null, undefined, and symbol. Even then, most of these\nprimitive types have their respective object wrapper classes that allows\ndevelopers to declare these primitives as objects. Now, since almost everything\nin JavaScript is itself an object, it’s clear to see how object oriented\nprogramming paradigms are natively supported by the language. The one caveat\nhere, however, is that JavaScript doesn’t support classical inheritance, but\nrather prototypical inheritance. This means that each object has its own\nprototype which can be composed to properties and methods, and since objects\nare mutable, to achieve inheritance you just create a new instance of an object\nand augment its properties.</p>\n<p>JavaScript can also be treated as an impure functional language since it\nnatively supports first class lambda functions, lexical closures, immutability,\nand tail recursion. While JavaScript itself doesn’t overtly promote functional\nprogramming or immutability, it’s very possible and becoming quite common to\nuse JavaScript in a functional manner. Functions in JavaScript are treated as\nobjects themselves, and can be used as arguments to other functions as well as\nhaving additional properties and methods. Aside from this feature, each\nfunction is bound with its own lexical scope that includes any of the variables\ndeclared within the outer function that it was declared inside of. With\nthis ability to have higher ordered functions and tail recursion, JavaScript is\nable to support continuation-passing style.</p>\n<p>In JavaScript related software development, continuation-passing style is a\nvery important topic, primarily due to the fact that JavaScript itself is\nsingle threaded. This means that all of the programs being run on an instance\nof a JavaScript runtime engine are done on a single thread, which implies that\nany halt or waiting that must occur within a given JavaScript process will halt\nthe entire program. This problem is clearly noticeable for any IO related tasks\nthat involve some JavaScript program waiting on some input before it can\ncomplete a task. Continuation-passing style solves this single threaded problem\nby deferring the continuation of the program to be executed when its ready,\nrather than having to freeze the entire program waiting for it to be ready.\nThis approach is widely used, and is quite necessary, for asynchronous\nprogramming in not just JavaScript applications, but any program that might use\nthis method of programming. Asynchronous procedures are programs that run\nindependently of the main thread or process in a non-blocking manner. This\nprocess might be reminiscent of multithreading, however asynchronous programs\ncan be implemented by alternative means, therefore making them very different;\nfor example, JavaScript supports asynchronous methods and JavaScript runtime\nengines are single threaded.</p>\n<p>The concept of asynchronous programming inherently lends itself to\ncontinuation-passing style; if a program is running independently of the main\nthread, how will the main program know when it has finished? The most common\nanswer to this problem is to implement continuation-passing style for\nasynchronous functions. The idea is to pass in the continuation of the program\nto the asynchronous function, and once the function has completed its process,\nthe result is then passed as an argument into the continuation, and the program\ncan advance. All of this can occur without the program having to halt, since we\naren’t waiting for the call to finish to continue running the program, but\nrather just giving the asynchronous call a set of instructions to perform with\nits result once it has completed.</p>\n<h2>Type System</h2>\n<p>By default, JavaScript is an untyped language; meaning that it inherently has\nno static type system within the native implementation of the language itself.\nWhile the term <em>untyped</em> has a few different meanings, in the context of\nJavaScript it implies that all expressions, functions, and variables belong to\na single type such that a program is always generated where all of the types\nmatch up. Since there is no native static type system, this language can\nalso be considered as a dynamic language, such that the types of its variables\nare volatile and are allowed to change. This inherently leads to programming\nbugs that are difficult to trace and can also lead to unexpected behavior if a\nvariable changes type somewhere within the program and isn’t accounted for.</p>\n<p>This is the primary reason that makes writing fast JavaScript programs hard;\nsince types are dynamic, the interpreter executing a JavaScript program must\ninclude additional checks during runtime to ensure that variable’s data type.\nWith statically typed languages, the compiler knows the data types of each\nvariable in the program and is able to perform these checks very quickly,\nusually as a simple lookup in a table or as a static function. In dynamically\ntyped languages, the interpreter has to update and perform additional checks\neach time a variable changes due to its volatile nature, which slows down the\ninterpreting process. To be more specific, each variable needs to have its own\ntype checks since it can change data types on the fly, each statement needs to\ncheck to see if it throws an exception due to the possibility of type\nmismatching, and since every field can be added, removed, or altered during\nruntime, there needs to be checks for that as well. One advantage to\nJavaScript being a prototypical object oriented language is that we don’t need\nto worry about class hierarchy checks during runtime since each object has its\nown copy of its proto chain during its instantiation.</p>\n<h2>Garbage Collection</h2>\n<p>Unlike languages such as C that have a very low level and manual way of\nhandling memory allocation and deallocation, JavaScript uses garbage collection\nto reclaim unused memory within a program. In all modern iterations of\nJavaScript, this method of garbage collection is often implemented using a mark\nand sweep memory allocation strategy. It’s important to note that some older\nimplementations of JavaScript, notably versions that were created for Netscape,\nutilized a reference counting strategy for garbage collection, however this\napproach is no longer used today.</p>\n<p>The mark and sweep garbage collector is able to navigate through all of the\nvariables defined within the program periodically, and mark all of the values\nreferred to by these variables. This particular algorithm makes sure it\nrecursively check and mark the values and properties of any objects or arrays\nit finds as well in the hopes of being able to find every variable and value\nwithin the program that is still reachable. Therefore, any values or variables\nthat were not marked is considered garbage that can be reclaimed by the\ncollector. The garbage collector then begins to sweep through the program,\nmaking sure to deallocate and reclaim any memory it finds that is unmarked and\nconsidered to be garbage. It does this by iterating through each value within\nthe program’s environment, deallocating any that it finds to be unmarked.</p>\n<p>Traditional and naive implementations of mark and sweep garbage collection tend\nto go through complete marking and sweeping phases at a time; the downside to\nthis approach is that it can hinder the program’s performance since it needs to\nstart and stop while the garbage collection is happening. In modern iterations\nof JavaScript, this method of garbage collection is handled more efficiently by\ntrying to only run in the background of a program during the runtime. This\nhelps avoid disrupting the performance of the application while at the same\ntime still being able to collect any garbage generated during the lifetime of\nthe program.</p>\n<h2>In Closing</h2>\n<p>Over the last couple of decades, JavaScript has come a long way from being a\nsimple scripting language built in roughly ten days 9]. It is quickly becoming\na more mature and ubiquitous across all different kinds of programming stacks,\nand is capable of much more than it was originally intended when it was first\nconceived. JavaScript is easily one of the most versatile and powerful\nscripting languages in modern programming, and can be used to build strong and\nscalable applications.</p>",frontmatter:{date:"March 09, 2018",path:"/blog/javascript-shallow-dive",title:"Taking a Shallow Dive into JavaScript",tags:["paper","language"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-javascript-shallow-dive-c1c53412824166869fc4.js.map