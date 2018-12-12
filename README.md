# Figma Portfolio
Is your design work in Figma? Do you need a portfolio? You may find this experiment useful.

You can consider this a portfolio boilerplate that automatically pulls work from a single file in Figma.

Demo: https://figma-portfolio-ebfqz7ax7.now.sh/

Each page in that file is a project.

Each top level frame in that page is a screen.

Each comment on that screen is part of the description of that screen.

This is a monorepo built on the following technologies and is easily deployable via Now 2.0
- NextJS for its simple setup, SSR and easy routing
- Styled components because https://medium.com/@_alanbsmith/why-we-use-styled-components-at-decisiv-a8ac6e1507ac
- Styled system so you can easily setup a theme and stick to it
- Rebass to give you a starting point but easily removable
- API built on node lambdas 

## How to use
0. Clone or download the repo
1. Sign up to Zeit and install Now https://zeit.co/now
2. Generate a Figma personal access token https://www.figma.com/developers/docs#authentication
3. Create a file in Figma that will be your portfolio and start adding work
4. Add your token and file id (https://www.figma.com/file/:id) to the now.json file
5. Open terminal, `cd` into the repo, type `now` and hit enter
6. Your portfolio will now be live on the interwebs. You can use Zeit to setup a custom domain etc

