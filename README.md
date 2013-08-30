
## Basic Installation


1.  Run the app you're building locally with ``sudo mrt`` 
2.  Or maybe deploy it using ``sudo mrt deploy my-todo-example.meteor.com``
3.  Or maybe to Modulus with a ``sudo demeteorizer; cd .demoeteorized; sudo modulus deploy`` and choosing Project A.

4.  Clone the safety-harness repository.
5.  Run safety-harness locally with ``sudo mrt`` 
6.  Or run it on a separate port using ``sudo mrt -p 3200`` 

7.  Maybe update the ``browser_window_location`` in the file ``main.js``?

8.  Add XmlHttpRequest access control headers to your router in the app you're testing?
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
9.  Deploy your updated app again (now with access control headers!) using ``sudo mrt deploy my-todo-example.meteor.com``
10.  Or maybe to Modulus again with another ``sudo demeteorizer; cd .demoeteorized; sudo modulus deploy`` to Project A.

9.  Now deploy your safety-harness using ``sudo mrt deploy my-todo-safety-harness.meteor.com``
10.  Or to a Project B on Modulus with ``sudo demeteorizer; cd .demoeteorized; sudo modulus deploy``

11.  Once all that's set up, start writing tests by editing a file like ``tests\tests.examples.todos.js``.
12.  Add new files to the ``tests`` direction by editing ``packages\mocha-runner\package.js``.  (Yes, it's hacky.  It's the best I get working right now.)
