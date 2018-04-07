React Multiple Copies Issue
===========================
This is an example demonstrationg the issue with loading multiple copies of React.

Working app with no issues
--------------------------
```bash
$ npm install
$ npm run bootstrap
$ npm run build
$ npm start
```

Everything should work! You should see a progress bar in the browser.

Break the app by introducing multiple copies of React
-----------------------------------------------------
As an example, let's introduce Storybook, which adds a `devDependency` on React.

```bash
$ cd packages/mylib
$ npm install --save-dev @storybook/react
$ cd ../..
$ npm start
```

You will now see the following error in the browser because multiple copies of React have been loaded.

```
Element ref was specified as a string (container) but no owner was set.
This could happen for one of the following reasons:

1. You may be adding a ref to a functional component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded

See https://fb.me/react-refs-must-have-owner for more information.
```

Notes
-----
- I have intentionally chosen the `react-vis` library to demonstrate this issue because it uses a DOM ref. The issue only shows up when some dependency is using a ref.
- Because of this issue, it is not possible to run a Storybook, Jest or any other tool that needs React as a `devDependency`!