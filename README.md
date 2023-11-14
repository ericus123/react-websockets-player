# React WebSockets Video Player

React WebSockets Video Player is a versatile React component that allows you to play WebSocket videos and render them to a canvas in a React application. The package provides two versions of the player, one using web workers for enhanced performance and another without web workers.

**Demo Page:** [View Demo](https://amanieric.com/projects/react-websockets-video-player)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Usage](#basic-usage)
  - [Advanced Usage](#advanced-usage)
- [Props](#props)
  - [LoaderProps](#loaderprops)
- [Examples](#examples)
  - [Basic Example](#basic-example)
  - [Example with Web Workers](#example-with-web-workers)
- [Development](#development)
- [License](#license)

## Installation

To install the package, use npm or yarn:

```bash
npm install react-websockets-video-player
# or
yarn add react-websockets-video-player
```

## Usage

### Basic Usage

```jsx
import React from "react";
import Player from "react-websockets-video-player";

const YourComponent = () => {
  const wsUrl = "wss://your-websocket-url";

  return <Player wsUrl={wsUrl} />;
};
```

### Advanced Usage

```jsx
import React from "react";
import Player from "react-websockets-video-player";

const YourComponent = () => {
  const wsUrl = "wss://your-websocket-url";
  const playerProps = {
    width: 800,
    height: 600,
    withWorker: true,
    debug: true,
    loaderProps: {
      show: true,
      customLoader: <YourCustomLoader />,
    },
  };

  return <Player wsUrl={wsUrl} {...playerProps} />;
};
```

## Props

The `Player` component accepts the following props:

| Prop Name     | Type      | Description                                    | Default Value |
| ------------- | --------- | ---------------------------------------------- | ------------- |
| `wsUrl`       | `string`  | The WebSocket URL for streaming video content. | -             |
| `width`       | `number`  | The width of the canvas.                       | `600`         |
| `height`      | `number`  | The height of the canvas.                      | `600`         |
| `withWorker`  | `boolean` | Use web workers for enhanced performance.      | `false`       |
| `debug`       | `boolean` | Enable debugging messages.                     | `false`       |
| `style`       | `object`  | Additional styles for the container div.       | -             |
| `loaderProps` | `object`  | Loader configuration.                          | -             |

### LoaderProps

| Prop Name      | Type      | Description                         | Default Value |
| -------------- | --------- | ----------------------------------- | ------------- |
| `show`         | `boolean` | Whether to display the loader.      | `false`       |
| `style`        | `object`  | Styles for the loader container.    | -             |
| `className`    | `string`  | CSS class for the loader container. | -             |
| `customLoader` | `node`    | Custom loader component.            | -             |

## Examples

### Basic Example

```jsx
import React from "react";
import Player from "react-websockets-video-player";

const BasicExample = () => {
  const wsUrl = "wss://your-websocket-url";

  return <Player wsUrl={wsUrl} />;
};
```

### Example with Web Workers

```jsx
import React from "react";
import Player from "react-websockets-video-player";

const WorkerExample = () => {
  const wsUrl = "wss://your-websocket-url";
  const playerProps = {
    withWorker: true,
    debug: true,
  };

  return <Player wsUrl={wsUrl} {...playerProps} />;
};
```

## Development

If you want to contribute to the development of this package or run it locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ericus123/react-websockets-video-player.git
   ```

2. Install dependencies:

   ```bash
   cd react-websockets-video-player
   yarn install
   ```

3. Run the development server:

   ```bash
   yarn start
   ```

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/ericus123/react-websockets-video-player/blob/dev/LICENSE) file for details.
