webpackJsonp([0xa60c5512fddb],{375:function(e,t){e.exports={data:{markdownRemark:{html:"<p>No matter what programming language is being used or how careful the developer\nis while using it, human error is always an unavoidable issue when building out\nprograms of any scale. Among some of the popular approaches to mitigate the\nproblem of human error, integrating type systems into a programming language\ncan be a powerful way to go. Type systems introduce the concept of assigning\ntypes to different constructs within a program such as variables, functions,\nand expressions, and enforce consistency among the rules associated with each\ntype. A type can be understood as just a classification of data which has an\ninterface associated with it that describes how it is intended to be used. With\na type system, the program is able to avoid type related errors, such as\nperforming an operation on a type that does not support that operation. While\nthere are many tradeoffs and design decisions that go into implementing a type\nsystem in a programming language, considering a type system and weighing the\ndifferent tradeoffs relative to the program being built is an important\ndecision to consider, and the benefits can be very worthwhile.</p>\n<h2>Benefits of Type Systems</h2>\n<p>There are plenty of benefits to reap from having a type system in a programming\nlanguage, both qualitatively and quantitatively. In general, having the ability\nto explicitly define types of variables and functions can greatly increase\nreadability and make the author’s intent more clear; at the end of the day,\nhumans are the ones reading and writing the code, so this benefit cannot be\neasily overlooked. By reducing any ambiguity, a byproduct of manifest typing\ncan also be the improve of the development process by making it more clear as\nto what the program is doing and how it’s doing it.</p>\n<p>One of the primary advantages to having a type system is the elimination of\ntype errors before any program runs. A type system will analyze the code during\nthe compilation process and flag any type related errors that it finds.\nThis makes it so any code that makes it through the type checking process and\ngets run is type safe. The entire process of type checking a program before it\nruns is to mitigate human errors that are written into the code during the\ndevelopment process. Without a type system to find and catch these errors, the\nonly way they would be found in the future is if they were encountered during\nthe program’s life cycle, which isn’t practical for production code that is\nindented to be released to users who expect bug free programs. This is clearly\nnot ideal, and this benefit alone can be a strong argument for utilizing a type\nsystem.</p>\n<p>Alongside the benefit of finding bugs before code is run, ensuring type safe\ncode can also have a small boost on performance in certain situations. This is\nbecause if the developer knows what the type of a variable or expression is,\nthere’s no need for manual type checking within the program itself; this manual\ntype checking pattern slows down the performance of the program to some degree,\ntherefore when eliminating the need for this entirely, the program can run\nfaster. With this in mind, if a type system is implemented efficiently enough,\nthen it can absolutely be worthwhile to use.</p>\n<h2>Drawbacks and Tradeoffs</h2>\n<p>While there are many advantages to having guarenteed type safety in programs,\nthere are drawbacks and other tradeoffs that need to be considered. One of the\nmore prominent downsides to a type system is that it can reject some correct\nprograms. It’s not uncommon to encounter a program that works as intended and\nis objectively correct in the sense of how it should run and perform, but still\nhave a type system reject and find errors within it. This has to do with\nhow type systems are traditionally implemented; there are many different types\nof shortcuts a type system has to implement in order to perform efficiently\nenough to be worthwhile to use. For example, when analyzing <em>if</em> statement, if\nthe type checker was to consider both branches separately and check them\nindividually, it’s clear to see how the work that the type checker has to do\nwould double every time it encounters this situation, effectively creating\npotentially exponential growth. One way to avoid this problem is to require\nboth branches to be of the same type; this solves the issue but as a result,\nmakes it so correct programs that happen to break this rule will be rejected by\nthe type system.</p>\n<p>With that in mind, its clear to see one of the major issues with type systems.\nIt’s hard to make a system that accepts as many correct programs as possible\nwhile still being fast enough for it to be worthwhile to use. If a type system\nis too slow, then most of the benefits it provides can become moot; when the\ntype checking process takes longer than just running the program, it can become\nless efficient to bother running the type checker than just running the\nprogram.</p>\n<h2>Type Inference and Polymorphism</h2>\n<p>Without manifest types being explicitly defined on a variable or expression, it\nis still possible to assign those constructs types. The concept of trying to\nassign every variable or expression some type such that the type checking\nprocess is successful, and reject the program if no solution can be found, is\nknown as type interference. While there are many different variations of\nimplementations for type inference, a good example for how it works would be\nhow its traditionally implemented in ML. Firstly, types of bindings are\ngenerally determined in the order in which they appear, which is why it’s\nimportant to write any functions or methods before the functions that use them;\nwithout doing so, the inferred types will not be in the environment by the time\nthey are needed and the system will simply throw a type error. When a\nbinding is being inferred, all of the relevant definitions and facts are\nanalyzed and used to determine what the type can possibly be; for example, if\nsome variable <em>x</em> is used with the addition operator on some number, it can be\ninferred that <em>x</em> must be of the type integer. If any of these facts that were\ngathered happen to conflict with one another, this implies that there exists a\ntype error in the program.</p>\n<p>Even after this inference analysis process, it is still possible for an\nexpression or variable to still not have enough constraints associated to it\nfor the type checker to determine its type. In this situation, it’s common to\nassign this expression or variable a polymorphic type by giving it a fresh and\narbitrary type. This new type generally implies that it can hold any type\nvalue; this is commonly seen when a function parameter is never used within the\nfunction, therefore it’s clear that this can be anything and has no constraints\nassociated with it. Type inference is a useful tool when implemented well; it\nadds the benefit of having less verbose code while maintaining the type safety\nof the program. However, type inference isn’t perfect; problems don’t arise\noften, but when they do, they tend to be particularly hard to debug. When an\nexpression or variable is inferred with the wrong type, errors can occur well\npast the actual spot that is causing the error, which can lead to strange and\nunhelpful bugs.</p>\n<h2>In Closing</h2>\n<p>Type systems can be a very powerful and useful asset to any programming\nlanguage under the right circumstances. It’s always important to weigh the\ndifferent kinds of tradeoffs when considering whether or not a type system\nwould be worthwhile to include in a given project or program, as there are\nclearly advantages to having a type system as well as not having one. With the\nuse of other strategies, such as type inference, having a type system can be\nbeneficial without any added work of manually adding type annotations, so there\nis little extra work that needs to be done to achieve type safety. With all of\nthis in mind, it’s always important to at least consider the possibility of\nincorporating a type system in any project.</p>",frontmatter:{date:"March 09, 2018",path:"/blog/type-systems",title:"The Significance of Type Systems in Programming Languages",tags:["paper","language"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-type-systems-3c298c1e1b0731fe0b4a.js.map