# Mirin

Mirin is currently a WIP editor for competitive programming. It features an editor pane and a toolbox.

It attempts to provide as minimal abstraction as possible. Keeping you, focused on the question at hand.

## Development

The UI for mirin uses the following,
* Vue3 falong with Naive-UI for its UI components.
* Vite as the bundler
* Vue-Preferences for interacting with the local-storage api

The window provider for mirin is Tauri

## Contributing

To contribute to mirin, ensure that you can replicate the dev environment for mirin.
You will require
* Node
* Yarn
* Rust
* Windows SDK (if on windows)
* Webkit2SDK (if on linux)

You can set up all of the above for your platform, by following tauri's getting started guide, available [here](https://tauri.studio/en/docs/getting-started/intro#setting-up-your-environment)

## TODO
Alot of features are missing as of now, a logo is in the works.

* Add language intellisense
* Implement toolbox and its functionality
* Improve Code quality, and add documentation
* Improve UI