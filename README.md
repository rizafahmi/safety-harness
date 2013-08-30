### Disclaimer

**NOTE:  Safety-Harness is 80% complete, and I've hit a wall.  
What you see on http://safety-harness.meteor.com/ is what you get.**


### Basic Installation

**Get Your App Running**  
1. Run the app you're building locally with ``sudo mrt``  
2. Or maybe deploy it using ``sudo mrt deploy my-todo-example.meteor.com``.   
3. Or maybe to Modulus with a ``sudo demeteorizer; cd .demoeteorized; sudo modulus deploy``.  

**Update Your App So It Can Work With Safety Harness**  
4. Set up A records and CNAME records in your DNS, as necessary.  
5.  Add XmlHttpRequest access control headers to your router in the app you're testing?
````js
Router.map(function () {
  this.route('testRoute', {
  }, function () {
    this.response.setHeader('access-control-allow-origin', '*');
    this.response.write('hello world');
    this.response.end(); // not necessary because the wrapper does this
  });
});  
````

**Get Safety-Harness Running**  
6.  Clone the safety-harness repository.  
7.  Run safety-harness locally with ``sudo mrt``  
8.  Or run it on a separate port using ``sudo mrt -p 3200``  
9.  Deploy your updated app again (now with access control headers!) using ``sudo mrt deploy my-todo-example.meteor.com``  
10.  Or maybe to Modulus again with another ``sudo demeteorizer; cd .demoeteorized; sudo modulus deploy``. Note:  you will need to deploy Safety-Harness to a separate project and domain name.

**Configure Safety-Harness**  
11.  Maybe update the ``browser_window_location`` in the file ``main.js``?  


**Review Existing Tests**  
12.  Once all that's set up, check out the following files
````js
// server side proxy functions
server/proxy.methods.http.js
server/proxy.methods.phantomjs.js

// client side tests
tests/server.phantomjs.js
tests/server.http.js
````

**Write Some Tests**  
13.  Start writing tests by editing a file like ``tests\tests.examples.todos.js``.  
14.  Or create your own file such as ``tests\tests.myapp.js``.  
15.  Add new files to the ``tests`` direction by editing ``packages\mocha-runner\package.js``.  (Yes, it's hacky.  Need to fix this.)  
16.  Extend the ``proxy.methods.phantomjs.js`` file.  
17.  Or copy the ``proxy.methods.phantomjs.js`` file into a ``proxy.methods.myapp.js`` file.  

### Help Fix Bugs

Accepting pull requests for the following items:

1. anything that documents and improves the XmlHttpRequest same-origin workaround proxy
2. need to add async futures to the ``proxy.methods.phantomjs.js`` file
3. need to create a Deps.autorun singleton wrapper around the PhantomJS object
4. need to be able to share a PhantomJS object between tests (i.e. proxy Meteor.method() calls)
5. actually want to un-package the ``packages/mocha-runner`` files, and bring them into the core app, if possible
6. particularly with regard to having to specify test files by adding entries into ``packages/mocha-runner/package.js`` 

