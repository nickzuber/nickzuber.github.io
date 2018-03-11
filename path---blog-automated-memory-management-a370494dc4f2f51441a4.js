webpackJsonp([0x6268e9008e1e],{370:function(e,t){e.exports={data:{markdownRemark:{html:"<p>When creating any type of program or application, the developer almost always\nneeds to consider memory usage. Whether it is a simple and small program, or a\nlarge and complex program, developers are going to have to worry about managing\ntheir memory consumption in one way or another. Problems can arise when\nmistakes are made; remembering to allocate and deallocate can become\nnontrivial, especially as the complexity of a program expands. With this\nproblem in mind, garbage collectors were created; these tools act as a way to\nautomate the process of reclaiming memory in a program by realizing when\ncertain memory is no longer being used by the program and frees it to be used\nelsewhere. While there are many different techniques and strategies for\nsolving this problem of automatically collecting memory which is no longer\nbeing used, garbage collection in general benefits the developer in many\nsituations so long as they are willing to give up, in many cases, some\nperformance and resources.</p>\n<h2>Reference Counting</h2>\n<p>One well known technique for tracking memory and trying to figure out when to\ndeallocate it, is called reference counting. This refers to the process of\nliterally counting and keeping track of the number of references, or pointers,\nthere are to a particular block of data or object. The idea behind this is that\nwhen the reference count to an object reaches zero at any point, we can assume\nthat there are no more references of this object anywhere else in the program,\ntherefore there is no possible way for the developer to access it. Since it is\nnow impossible for the developer to call for this data, we can assume this data\nis now inaccessible and therefore can be freed. It is important to note that if\nan object has been deallocated for any reason, all other objects in the program\nwhich were being referenced by that now removed data, if any, must now all have\ntheir reference counters decremented. This implication leads to a slippery\nslope where removing a single object can potentially lead to an arbitrarily\nlarge number of other objects being removed as well, or at least having all of\ntheir reference counters decrement.</p>\n<p>Reference counting is helpful when we want to find unused memory as soon as it\nbecomes available. This could be important in programs that have a relatively\ntight restriction on memory, which therefore would need to deallocate memory\nwhenever it becomes available in order for program to run correctly. Besides\nthis feature, reference counting also shifts the responsibility of freeing\nmemory from the developer and does it automatically. This is generally a good\nfeature since it can sometimes be unreliable to have to manually free memory in\na program since often times a developer can easily make a mistake and either\nforget to delete unused memory or create other types of memory leaks.</p>\n<p>The costs to reference counting can hurt performance and increase memory usage\nwhen programs become rather large. Since we need to keep track of each\nreference, we need to keep in mind that for each object in a given program, we\nneed to use additional memory to store its respective reference count. When\ntalking about programs with thousands of objects, this overhead can impact the\navailable memory drastically and may lead to problems down the road. It is also\nimportant to realize that references to objects are generally adjusted quite\nfrequently, especially when considering one of the downsides previously\nmentioned (where removing one object may result in having to decrementing many\nother objects’ reference counters). This frequent updating can hinder the\nperformance of a program and ultimately lead to other speed related issues.\nDespite having effectively removed the responsibility for developers to free\nmemory, we replace that task with having the developers manually track the\nnumber of references by updating each time they add or remove a reference. This\nalmost contradicts the benefit of not having to manually free memory, since\ndevelopers can still make mistakes here by incorrectly adjusting reference\ncounts the wrong way, or forgetting to do so entirely. It is also important to\nnote that reference counting is not perfect either; reference counting fails\nwhen it encounters cyclic objects, such that two objects reference each other.\nFor example, if we simply consider a circular singly linked list such that\nthe tail of the list points to the second element, every element of this list\nwill have a reference count of one, with the exception of the second element\nhaving a reference count of two (the head and the tail both pointing to it).\nNow, if we happen to destroy the head of the linked list, every other element\nof the list will all have a reference count of one, despite there being no\npossible way to access this list. Hence, we clearly have a list of objects that\nare considered garbage and should have their memory freed, yet they still have\nreference counts of one.</p>\n<h2>Mark &#x26; Sweep</h2>\n<p>With this problem of collecting cyclic data in mind, other garbage collection\ntechniques have been developed aimed to solve this. One popular technique to\ngarbage collection, and the first algorithm that was able to solve the cyclic\ndata problem, is known as mark and sweep. In this approach, the garbage\ncollection process itself is divided into two different parts: the marking\nphase and the sweeping phase. Before any marking or sweeping is done, it is\nimportant to note that for every object that is created, it is decorated with a\nsingle bit that will only be used for this garbage collection process. This bit\nis initially set to zero before the actual mark and sweep process begins.</p>\n<p>Firstly we have the marking phase: in this phase of the process, we create a\ncollection of <em>roots</em>, which consist of all the initial pointers that are being\nheld in registers. When we have this collection, we perform a depth first\nsearch on the roots, marking every object that we are able to find. These\nmarked objects represent all of the reachable objects within the given program.\nThe next phase is the sweep phase: this is where each object that is being\nstored in memory is check to see if it had been marked or not. Every object\nthat isn’t marked is put into a queue that keeps track of locations in memory\nwe can free later down the road if we ever need more memory. Mark and sweep is\nonly invoked when the program runs out of memory, therefore the process does\nnot hinder the performance of the program unnecessarily. This also implies that\nthe unmarked blocks of memory which need to be freed aren’t <em>actually</em> freed\nuntil the program needs more memory.</p>\n<p>There are a few problems with this approach that should immediately stick out;\none of which being how the garbage collection process doesn’t start until the\nprogram needs more memory, but we would need some memory to store the list of\nreference roots. Since this list is arbitrarily large, there is no way to\nreserve a spot in memory for this list in advance. Similarly to this problem,\nthe list of unmarked memory which can be freed would also need to be stored\nsomewhere. However, there are some clever ways these issues can be resolved:\ninstead of storing the reference roots in a list, this data can be stored\nwithin the objects’ memory themselves with a technique known as pointer\nreversal. This approach can be used in the place of storing a list of root\nreferences; the idea here is to have each reference we visit (during the depth\nfirst traversal of the marking phase) point back to its parent, so that when we\nget to the end of a particular reference chain, we can find our way back to the\ninitial root reference and continue the process.</p>\n<p>Solving the issue with tracking the memory blocks that can be freed is somewhat\nsimilar in nature, but relatively simpler; since this data is no longer\nimportant, we can write over some of it without consequence, so this allows us\nto mark part of memory as perhaps the size of the block followed by the\nlocation in memory of the next memory block to free. This way, we don’t need to\nuse any auxiliary memory for tracking the list of memory that can be freed.</p>\n<h2>Stop &#x26; Copy</h2>\n<p>Another popular method of garbage collection is what’s known as stop and copy.\nWith this approach, the memory for a given program is divided into two\nsections: an old space and a new space. The idea behind this approach is to\nuse the memory in the old space until it’s full, copy over the reachable object\nreferences into the new space, then free all the remaining memory in the old\nspace (since we can assume the memory left over is garbage since its\nunreachable), and then switch the roles of the two spaces and repeat. One of\nthe great features of this approach is its fast and simple allocation strategy;\nthere’s a single heap pointer in the old space which points to the next\navailable location in memory. As that block of memory gets used, this heap\npointer simple increments to the next location in the space.</p>\n<p>However, one of the downsides to this approach is the difficult challenge that\ncomes with deep reference copying. When some object gets copied into the new\nspace, all of the objects that it points to are also marked as reachable and\ntherefore copied into the new space as well. The challenging part here is to\nfix the pointers to make sure that the object copies point to the correct\nobject copies. There are ways to solve this problem, one of which being a\ntechnique using forwarding pointers and partitioning the new space further into\nadditional sections. Here, the goal is to copy an object into the new space,\nmarking the old reference as a copied element and adding a forwarding pointer\nfrom the old reference to the newly copied reference. We then process all of\nthe pointers in the new block we had just copied, and as we copy its references\nwe fix its pointers to point to the new copies instead of the old reference.\nDespite this algorithm being relatively complicated, the reason why this\napproach isn’t ideal isn’t because of the complexity, but rather because of the\nexpensive nature of all these operations. It’s also important to note that a\nlarge portion of the memory in a program which implements a stop and copy\ngarbage collection is dedicated to the garbage collection process itself, which\ninherently limits the finite amount of memory within the program.</p>\n<h2>In Closing</h2>\n<p>The ability to automate the process of deallocating and freeing unused memory\nin a program can be beneficial to developers and help mitigate the human error\nthat comes into play when having to deal with memory management manually. Like\nmost great things, there are always important tradeoffs to consider; in the\ncase of garbage collection, we know that these processes can take additional\nresources to work properly, slow down programs and hinder performance, and\nultimately are not perfect solutions.</p>",frontmatter:{date:"March 09, 2018",path:"/blog/automated-memory-management",title:"Automated Memory Management Systems With Garbage Collection",tags:["paper","os"]}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-automated-memory-management-a370494dc4f2f51441a4.js.map