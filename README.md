# Fit - health for everyone (WIP)

Author: Henrry Grilo Esposito

## Context:

Increasingly remote work becomes a constant in people's lives, this leads these professionals to a more sedentary and accommodated lifestyle, health campaigns seek to warn about the effects of sedentary lifestyle by promoting applications with free workout routines, layout full of visual details demonstrating how the exercise should be done so that the user doesn't get hurt during his training.

## Problem:

Driven by the fact that most of these applications are made by small development business, there is a big problem of accessibility to the content provided by these platforms. Often the content on the platform relies entirely on the visual resource of the demonstration videos to show the user how the exercises should be done, this ends up harming or completely preventing the use of such content by users with visual disabilities that depends on the device's screen reader to consume the content.

## Solution:

Fit is an application that brings simple workouts that can be practiced by most users, the exercises are proposed based on the user's estimated weight and vary between full body exercises, exercises only for the arms or only for the legs. All this content is presented on the user's screen with a focus on text description, thus ensuring that screen readers are able to convey to the user the specifics of the chosen exercise. The navigation is done through directional gestures (swipes) or taps on the screen, the layout does not present buttons or other elements that make it difficult for the user to interact.

## Current project status:

Currently this project is in the prototyping phase, it is already possible to test the navigation by swipes and taps as well as evaluate how is the experience of using an application without buttons or isolated elements on the screen.

## How to run the project:

- Clone this repository on your machine (`git clone https://github.com/HenrryEsposito/fit-wip.git`).
- Run the NPM command to download the dependencies (`npm i`).
- Run the NPM command to run the project locally (`npm start`).
- Open (http://localhost:3000/).

**Warning:**

The prototype was made to run on mobile screens in portrait mode, for a reliable experience remember to activate your browser's developer tools and activate the device toolbar by selecting one of the mobile screen presets in portrait mode (this procedure is even necessary for the browser to detect the navigation gestures).

As it is a prototype, no concerns were taken with the architecture or pattern used, the codes presented here may not be within the best development standards in the eyes of most people.

## Technologies:

- React
- Typescript
- Create React App
- Styled Components
- React Router
- React Swipeable

## Miscellaneous:

- Link to the layout prototype: (https://www.figma.com/file/fR6ACzwUA27yCkk5fm3BXj/Fit?node-id=0%3A1)
