# Camera Shuffle 📷 🔀

## Description

This project is a fun experiment with the [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) and the [getUserMedia() method](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). It aims to explore the capabilities of these APIs to create smooth transitions and access media devices. This project is built using Vite and React.

**Note:** The View Transitions API does not have widespread support yet. You can check the current support status [here](https://caniuse.com/view-transitions).

## Features

- Smooth view transitions using the View Transitions API.
- Access and display media from user devices using `getUserMedia()`.

## Prerequisites

- [pnpm installation](https://pnpm.io/installation)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/R4YLx/camera-shuffle
   ```
2. Navigate to the project directory:
   ```sh
   cd camera-shuffle
   ```
3. Install the project dependencies using `pnpm`:
   ```sh
   pnpm install
   ```
4. Start the development server using `vite`:
   ```sh
   pnpm dev
   ```

## Usage

1. Open `http://localhost:5173` in a web browser.
2. Allow the browser to access your media devices when prompted.
3. Enjoy experimenting with view transitions and media streams.

## Deployed Version

You can access the live version of the project [here](https://camera-shuffle.netlify.app/).

## Known Issues

There is a known bug where the capture does not take the full height on mobile devices. Solutions and suggestions for fixing this issue are welcomed.
