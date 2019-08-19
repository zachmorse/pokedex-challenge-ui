# The Challenge

This repository is the source code for a pretend "Pokédex" web app. Your challenge will be to fix one bug and implement one feature in the `ui` section of this repo. You will, however, have to run both the API and the UI locally to do any development.

# Getting Started

## Forking the Repo

Before you read on, it might be a good idea to go ahead and fork this repo. If you need help, follow these instructions: https://help.github.com/en/articles/fork-a-repo.

## Cloning the Forked Repo

Once that's complete, you'll then want to clone your forked repo. Instructions on cloning repos can be found here: https://help.github.com/en/articles/cloning-a-repository.

## Running the UI/API

To run the UI or the API locally, view the `README.md` files present in each directory.

_Note: In order to avoid any discrepancies running the dev servers, please make sure you're using Node v10.16.0._

## Next Steps

Now that you've gotten everything up and running, take a look at the Bug report and the Feature request below. You'll probably want to fix the bug first before implementing the new feature. Once those two things are complete, you've completed the challenge! Good luck!

# The Bug

## Description

The Pokédex web app is simply a home screen with a list of pokémon and various "details" screens for each individual pokémon. When you click on a pokémon in the list, you go to their detail screen. On the detail screen, there are "forward" and "backward" buttons, in the shape of chevrons (`<` and `>`). Clicking these navigate you through the numbered pokémon (as you can tell from the changing URL.) However, when navigating through the pokémon, the numbers often jump dramatically, skipping pokémon or going back to the beginning of the list, inexplicably. Something is definitely wrong with the pokémon navigation.

## Steps to Reproduce

- Click on the first pokémon, Bulbasaur
- Look at the URL (should be "http://localhost:3000/001")
- Navigate forward to Pokémon #11
- Look at the URL (will have reverted back to "http://localhost:3000/002")

## Acceptance Criteria

- Navigating with arrows in the pokémon details screen should increment and decrement by a factor of one.

# The Feature

## Description

The Pokédex has search, which is great. And it works pretty well. But our users really want to be able to filter down the pokémon list based on the pokémons' "type" and "weaknesses." We need new UI components to accomplish this. The requirements on how you accomplish this are loose. Maybe a "multi-select" dropdown would be handy. Or even just some simple Checkboxes would be fine. (You won't be graded on the UX of this. Just on how well you code your particular implementation.)

## Acceptance Criteria

- The "home" page of the Pokédex has filtering UI that allows users to choose all available "types" and "weaknesses" to filter down by
- The list of pokémon shrinks or grows depending on the applied filters
- Searches from the SearchBox occur _within_ the filtered list (not the full, unfiltered list)

# Tips

Here's some tips you might find handy:

- If you use an IDE like VS Code or Atom, install the ESLint and Prettier extensions. They help development a _lot!_
- Don't focus to much on UX. Focus more on meeting the Acceptance Criteria and writing clean code.
- We're fans of the Functional Programming paradigm. As you code, thinking about how you can make your functions pure and avoid mutating objects.
