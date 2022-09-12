# Second Challenge - Avalith Skill Factory React

<p align="center">
  <img src="https://github.com/fmiguezo/SkillFactory-PrimerProyecto/blob/master/img/gifreadme.gif">
</p>

### Main goal: Migrate the site built in checkpoint #1 in HTML, CSS and JS to ReactJS.

Migrated site: https://github.com/fmiguezo/SkillFactory-PrimerProyecto

:white_check_mark: Description: All UI elements must be componetizable. This implies that we will only have one HTML and all the pages of our site must be in functional React components.\
:white_check_mark:The styles of the site can vary from one release to another, you can implement some CSS library/framework in case they haven't used and they don't necessarily have to look the same from the UI, but they have to meet the same requirements.\
:white_check_mark: The product must be routed with React Router Dom v6. In addition, it must not generate reloading of the site at any time, so it must have the behavior of a SPA (Single Page Application).\
:white_check_mark: The same requests must be made to the APIs and it must be controlled through the hooks that we have worked on.
In the Rick & Morty section, a detailed view of each character must be generated (the option to NOT paginate and use only the first 20 results is still valid).

<hr>

### We started the project by creating a react app using `npx create-react-app my-app`.

#### Dependencies:

• We installed axios using `npm install axios`.\
• We installed React Router Dom 6 using `npm install react-router-dom@6`.\
• We installed Font Awesome to use the same icons as on the original site using `npm i --save @fortawesome/fontawesome-svg-core`, then we installed the free "Brand" icons `npm i --save @fortawesome/free-brands-svg-icons`, and finally we installed the React component using `npm i --save @fortawesome/react-fontawesome@latest`.

#### Improvements:

• We made changes to CSS media queries to improve the responsive operation of the site.\
• We've added more detail to character cards and differentiated their status and gender with different colors to make it easier to read.

<hr>

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<hr>

## 1. Cloning the React App

#### Creating a New Folder

First create a new folder. You can name it whatever you want.

#### Getting the Code URL

In the React app's GitHub repo, click on the button, Code. A drop down will appear where you can copy the code URL.

#### Cloning the React app's GitHub Repo

Now, open the git bash window for the new folder you just created by right clicking on the folder and clicking Git bash here.
On your git bash window, type `git clone`, paste the code URL of the GitHub repo, then run the command by pressing enter.
`git clone https://github.com/fmiguezo/SkillFactory-SegundoProyecto.git`
At the end of the process, if you did everything correct, you won't encounter any errors meaning the cloning process was completed successfully.

## 2. Configuring the Cloned App

Once you’ve completed the previous step, you need to create your own `package-lock.json` file and `node_modules` folder. You don’t need to manually create these, as the following commands we run will create them.
Press `ctrl + j` on windows or `command + j` on Mac to open your terminal on VSCode.
On your terminal, change your directory to the name of the cloned folder.
Let’s say the cloned folder name is ‘my-cloned-app’
`cd my-cloned-app`
Once that is done successfully, you need to run `npm install` . This will some time to finish running.
If you did everything correct, at the end of the process, you will see words along these lines on your terminal.

```
run `npm fund` for details.
found ..... severity vunerablity
run `npm audit fix` to fix them or `npm audit` for details
```

You will also see your `package-lock.json` file and `node_modules` folder at the left side of the window.

## 3. Starting the React app

So, run `npm start` on your terminal.
Make sure you are in the right directory before running this command to avoid errors.
If you are not or if you are not sure you are, cd to the right directory.
Once the command is done running, your React app will open on your local host on your default browser.
`https://localhost:3000`
_Congratulations, you've successfully cloned and started your React app._
