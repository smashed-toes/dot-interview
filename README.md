# dot-interview

## Instructions

For running the file locally, run `npm run dev` from the shopping-app directory. To spin up the mock server for the api containing all product data, separately run `npm run start-server` (also from the shopping-app directory).

## Infrastructure Choices

- Using Next JS

  I made the decision to use Next.js for this project for a couple of reasons. I wanted to take advantage of it's server-rendered pages to more quickly serve up pages to the user, and to simplify the routing process between pages across the app. Additionally, it's built in frameworks for using Typescript and Tailwind made it easy to get set up quickly.

  Additionally, I'd like to note that I've never used Next.js before, but understand it's part of your stack at dot. Given that I had a little extra time over the weekend, I thought I would take this as an opportunity to:

  1. Begin to familiarize myself with Next.js given that it's a technology that more and more companies are using and it's important as a developer to continously update one's knowledge on prevalent tools.
  2. Demonstrate my ability to learn new frameworks and quickly implement functional code that incorporates new learnings.

- Redux

  Given the app wide usage of the cart info, I chose to use Redux to easily update and access the cart state.

- Express for the API

  Express allowed for me to swiftly build a very simple api to serve the hardcoded product data and incorporate data fetching from a separate api.

- Tailwind:

  I used Tailwind in my previous job and prefer it for easily and clearly styling components with uniform themes and colors.

## Concurrent Environment Changes

In order to allow for my app to work in a concurrent environment, here are some considerations and changes that would need to be made.

- Cart Data Storage and Session Management: My app currently makes use of the redux-persist library to maintain cart data through a session, but this will have issues with concurrency. To solve these issues in a way that's effective across browsers and user preferences (i.e. denying cookie usage), I'd implement a database to maintain user cart info.
- Scalability and Caching: With a large number of users, managing caching and data re-fetching becomes particularly important. Next.js already has support for managing this. Additionally, I would explore using RTK Query with Redux for a database API. I'd also more deeply investigate trade-offs around where to pass entire Product objects through the component hierarchy versus passing only the necessary information and making more use of more specific API requests carrying less data.
- Rate Limiting: To prevent abuse or excessive requests from users, I'd implement rate limiting on the API endpoints.

## Bugs and Issues

Although the business requirements were all met, there are a few functional elements of this project I would change or continue to work on to clean it up.

- Image Carousel: You'll notice in my video demonstration that the carousel I'm using has some strange behavior in terms of loading. In an effort to minimize time spent on the project and adhere more to the ~3 hour expectation, I imported a react-carousel that effectively acheived some of the design specs set in the figma, but it has issues with displaying the images properly and lacks the nav buttons on either side. Given more time, I would've liked to implement my own carousel that met the expected design.

- Redux and Next.js: As it was my first time using Next, I wasn't fully aware of some of the issues that can arise when using Next with Redux given that Next's process of rendering and hydrating, and It's expectation that elements won't change in that process. Although I was able to debug this issue, the solution limits the benefits that Next's server components provide. I would have loved to be able to spend more time on this issue, and find a more effective solution.

- Styling for smaller screens: Although aligned with the figma in some regards, my use of Tailwind to accomadate displays on smaller screens are not as clean as I'd like them to be. This is something I would definitley be able to clean up, but again I wanted to adhere to the ~3hr development time directive.
