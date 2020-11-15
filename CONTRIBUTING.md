# How can I contribute?

- You can style the pages using CSS.
- If you find a bug anywhere, you can fix it.
- You can add a feature once you get approval from the community.

# File Structure

```
├── __tests__                          Sample tests
├── test                               Test file
├── styles                             All the reference to styling goes here
├── redux                              All the cart actions go here
│   ├── reducers
├── public                             All the images go here
│   ├── assets
├── pages                              All the main pages and related api calls go here
│   ├── api
│   ├── shop
├── mock                               Mock data
├── components                         All the components go here
│   ├── Button
│   ├── cart-summary
│   ├── cartlist-card
│   ├── coins-status
│   ├── filter
│   ├── footer
│   ├── header
│   ├── image
│   ├── Modal
│   ├── passbook
│   ├── product-details
│   ├── save-later
│   ├── shoplist-card
│   ├── transaction-chart
│   ├── transaction-details
│   ├── user-info
├── color                              Color Dictionary
├── CONTRIBUTING.md                    Contribution file
├── README.md                          README file for the repository
├── jsconfig.json                      Components config file for the repository
├── jest.config.js                     Export config file for the repository
├── package.json
```

# How can you make your first **Pull Request**

1. **Forking repository**

Fork this repository using the **Fork** option at the top-right corner of this page. This will create your own copy of this repository. You'll be redirected to your forked repository. Copy the link of this repository (which will look like `https://github.com/<your-username>/website-crypto/`) as you'll need it in the step 2.

![how-to-fork](https://i.imgur.com/56p1D0k.png)

2. **Cloning repository**

Clone your forked repository, this will download your copy of repository in your computer. To do this, open your terminal (command prompt/bash/git bash) and enter the following command, paste your link after the word **clone** without the **<>**.

```
git clone <link which you copied in the step 1>
```

3. **Adding remote repository**

Add the original repository as a remote repository, so that you can anytime pull the latest changes from the main repository which is being deployed. This needs to be done only for the first time.

```
git remote add upstream https://github.com/Real-Dev-Squad/website-crypto/
```

To make sure you always have the latest copy of the main repository before starting with your changes, execute the following command:

```
git pull upstream main
```

4. **Creating a branch**

Create a new branch to work on. We require a different branch so that we always have a stable, working version in the default (main) branch.

```
git checkout -b <branch-name>
```

For example, if I want to name my branch as **develop**, I'll enter the following command:

```
git checkout -b develop
```

5. **Just do it!**

Perform the tasks you wanted to, can be anything, ranging from fixing simple typo to re-designing the whole page!

6. **Committing your changes**

Now you have made the changes, though they are saved in your system, Git doesn't know what changes you've done. So you have to **commit** your changes. First step is to add the files which you want to add to the staging area, the dot after **add** in the first command tells Git to check for changes in all the files. The second step is about committing your changes. The message part is short description of your commit, like "merge branch".

```
git add .
git commit -m "Write message about your commit"
```

7. **Merging your branch into main branch**

Now your branch (develop, in my case) has the changes you made, once you're sure that your code is stable, it's time to merge the changes into the main branch of your local machine. The following command takes you to the main branch:

```
git checkout main
```

It's recommended that you have the latest copy of the original repo into your main before you merge your changes into it. So pull the latest changes again:

```
git pull upstream main
```

Now you can merge your branch into the main branch.

```
git merge <branch-name>
```

For example, if the branch name is develop:

```
git merge develop
```

8. **Pushing your code**

Now it is the time to push the changes of your local main branch to your copy of the repository (aka forked repository) which is on Github (which we cloned in step 2).

```
git push origin
```

9. **Pull request**

Now go to your forked repository and you'll see that **This branch is xx commits ahead of Real-Dev-Squad:main.** Right next to it will be an option to **Pull Request**. Click on it, submit your pull request (also known as _PR_) explaining what you've done.

![how-to-open-pull-request](https://i.imgur.com/NMAeWc2.png)

10. **Review stage**

Wait for it to get reviewed, make the changes required (if any) , commit your changes and hit **Pull Request** again, your commits will be added to the same pull request you had opened earlier (if it is NOT closed).

11. **Congratulations on making your first Pull Request! 🎉**
