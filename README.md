React Multiple Copies Issue
===========================
This is an example demonstrating the issue with loading multiple copies of React.

Here's how to reproduce the issue
---------------------------------
```bash
$ npm install
$ npm run bootstrap
$ npm run build
$ npm start
```

You will now see the following error in the browser because multiple copies of React have been loaded - one from mylib and one from myapp. I don't understand why this is happening because the copy in mylib has been specified as a `devDependencies` - just so that I can run Storybook!

```
Element ref was specified as a string (container) but no owner was set.
This could happen for one of the following reasons:

1. You may be adding a ref to a functional component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded

See https://fb.me/react-refs-must-have-owner for more information.
```

Fix the issue by removing React from mylib
------------------------------------------
```bash
$ cd packages/mylib
$ npm uninstall react react-dom
```

Now run the entire build again. The app should work this time! You should see a progress bar in the browser. However, Storybook can't run any more since it needs React in `mylib` :-(.

Notes
-----
- I have intentionally chosen the `react-vis` library to demonstrate this issue because it uses a DOM ref. The issue only shows up when some dependency is using a ref.
- This issue prevents any tool that depends on React to run under `mylib`. This includes Storybook, Jest etc.!
