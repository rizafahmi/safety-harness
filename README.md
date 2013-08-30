## Basic Installation

**Get Your App Running**  
1. Run the app you're building locally with ``sudo mrt``  
2. Or maybe deploy it using ``sudo mrt deploy my-todo-example.meteor.com``.   
3. Or maybe to Modulus with a ``sudo demeteorizer; cd .demoeteorized; sudo modulus deploy``.  

**Update Your App So It Can Work With Safety Harness**  
4.  Add XmlHttpRequest access control headers to your router in the app you're testing?
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
5.  Set up A records and CNAME records in your DNS, as necessary.

**Get Safety-Harness Running**  
5.  Clone the safety-harness repository.  
6.  Run safety-harness locally with ``sudo mrt``  
7.  Or run it on a separate port using ``sudo mrt -p 3200``  
8.  Deploy your updated app again (now with access control headers!) using ``sudo mrt deploy my-todo-example.meteor.com``  
9.  Or maybe to Modulus again with another ``sudo demeteorizer; cd .demoeteorized; sudo modulus deploy``. Note:  you will need to deploy Safety-Harness to a separate project and domain name.

**Configure Safety-Harness**  
10.  Maybe update the ``browser_window_location`` in the file ``main.js``?  


**Write Some Tests**  
11.  Once all that's set up, start writing tests by editing a file like ``tests\tests.examples.todos.js``.  
12.  Add new files to the ``tests`` direction by editing ``packages\mocha-runner\package.js``.  (Yes, it's hacky.  It's the best I get working right now.)  
13.  Add proxy Meteor.method functions to the ``server`` directory by copying and extending the ``methods.server.js`` file.  

## Help Fix Bugs

Accepting pull requests for the following items:

1. anything that documents and improves the XmlHttpRequest same-origin workaround proxy
2. need to add async futures to the ``proxy.methods.phantomjs.js`` file
3. need to create a Deps.autorun singleton wrapper around the PhantomJS object
4. need to be able to share a PhantomJS object between tests (i.e. proxy Meteor.method() calls)
5. actually want to un-package the ``packages/mocha-runner`` files, and bring them into the core app, if possible
6. particularly with regard to having to specify test files by adding entries into ``packages/mocha-runner/package.js`` 

