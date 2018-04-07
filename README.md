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

Everything should work!

Break the app by introducing multiple copies of React
-----------------------------------------------------
As an example, let's introduce Storybook, which adds a `devDependency` on React.

```bash
$ cd packages/mylib
$ npm install --save-dev @storybook/react
$ cd ../..
$ npm start
```

You will now see the following error from React indication that multiple copies of React have been loaded.

```
```
