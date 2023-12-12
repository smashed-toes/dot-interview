# E-Commerce Website Project

## Instructions

For running the file locally, run `npm run dev` from the shopping-app directory.

## Infrastructure Choices

- Using Next JS

  I made the decision to use Next.js for this project for a couple of reasons. I wanted to take advantage of it's server-rendered pages to more quickly serve up pages to the user, and to simplify the routing process between pages across the app. Additionally, it's built in frameworks for using Typescript and Tailwind made it easy to get set up quickly.

  Additionally, I'd like to note that I've never used Next.js before. Given that I had a little extra time over the weekend, I thought I would take this as an opportunity to:

  1. Begin to familiarize myself with Next.js given that it's a technology that more and more companies are using and it's important as a developer to continously update one's knowledge on prevalent tools.
  2. Demonstrate my ability to learn new frameworks and quickly implement functional code that incorporates new learnings.

- Redux

  Given the app wide usage of the cart info, I chose to use Redux to easily update and access the cart state.

- Express for the API

  Express allowed for me to swiftly build a very simple api to serve the hardcoded product data and allowed me to incorporate data fetching logic using a separate server.

- Tailwind:

  I used Tailwind in my previous job and prefer it for easily and clearly styling components with uniform themes and colors.

## Concurrent Environment Changes

In order to allow for my app to work in a concurrent environment, here are some considerations and changes that would need to be made.

- Cart Data Storage and Session Management: My app currently makes use of the redux-persist library to maintain cart data through a session, but this will have issues with concurrency. To solve these issues in a way that's effective across browsers and user preferences (i.e. denying cookie usage), I'd implement a database to maintain user cart info.
- Scalability and Caching: With a large number of users, managing caching and data re-fetching becomes particularly important. Next.js already has support for managing this. Additionally, I would explore using RTK Query with Redux for a database API. I'd also more deeply investigate trade-offs around where to pass entire Product objects through the component hierarchy versus passing only the necessary information and making more use of more specific API requests carrying less data.
