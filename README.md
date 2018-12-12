# IoC
This sample TypeScript project demonstrates the IoC container pattern.

* `app.ts` contains the client code which instantiates a `PlayerComponent`, a consumer of video services.
* The `PlayerComponent` renders video chunks received from a generic video stream source (i.e. a device in real world).
* The `PlayerComponent` is initialized with a `IVideoStreamSource` using constructor Dependency Injection (DI).
* Instantiation of the video stream source is hidden to the client code and it is instead provided via an `Inversion of Control (IoC) container`.
* Available video stream sources implementations are specified in `videoSources.ts`.
* The video stream source in use is dynamically selected at run-time via a command line parameters (see `Run the App`), but it could be selected via a compiled value or a configuration file as well.
* Extensibility is achieved by adding new video stream source implementations to `videoSources.ts`, so that client code can keep consuming them transparently.

## Setup
After cloning the repo open a shell and CD into the root folder. Excute:

1. run `npm install`
2. run `npm run compile`

## Running the App

Run `npm run app` to render sample data on the standard output (the console) using the default sample `HD` VideoStreamSource.  
To specify a different video source run `npm run app -- {sourceID}`. I.e. `npm run app -- sd` will use the low resolution black and white stream source.

## Testing
Run `npm run unit-test` to unit test the project.
