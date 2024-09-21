# Photo Gallery App

A mobile photo gallery app built with **React Native** that fetches images from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/photos). The app allows users to browse images, mark favorites, and persist those favorites using **Redux Persist**. Offline image caching is handled with **FastImage**, and **React Navigation** is used for navigating through the app's screens.

## Features

- **Image Fetching**: Fetches images from `https://jsonplaceholder.typicode.com/photos` using **RTK Query** for efficient API requests and caching.
- **Favorites Management**: Allows users to favorite images, with state management powered by **Redux** and favorites persistence using **Redux Persist**.
- **Offline Image Caching**: Leverages **FastImage** for optimized offline image caching, providing a smooth experience even without an internet connection.
- **Navigation**: The app features a bottom tab navigation using **React Navigation** with a custom header for enhanced user experience.
- **Dark Mode**: Supports a Dark Mode UI, improving accessibility and enhancing the user experience, especially in low-light environments.

## Screenshots

### Light Mode

#### Home Screen
![Light Mode Home Screen](https://drive.google.com/file/d/1NOzQurOozl1NAf06a6YtJpJ8K6CnJZIC/view?usp=drive_link)

#### Details Screen
![Light Mode Details Screen](https://drive.google.com/file/d/17-emwspKGsQkezKlBSWrJPW-zFBzsjzu/view?usp=drive_link)

### Dark Mode

#### Home Screen
![Dark Mode Home Screen](https://drive.google.com/file/d/1kRPoIXSlzXvbkeMTuWn-3THSdZGqDT4_/view?usp=drive_link)

#### Details Screen
![Dark Mode Details Screen](https://drive.google.com/file/d/1wzBR2cPyc_HgnJfN9tYmClhY4A4FNrjv/view?usp=drive_link)



## Tech Stack

- **React Native**: Mobile framework for building the app.
- **RTK Query**: For fetching and caching images from the API.
- **Redux & Redux Persist**: For state management and persistence of the favorite image list.
- **FastImage**: For offline image caching and performance improvements.
- **React Navigation**: For navigating between screens with a bottom tab bar.
- **Custom Header**: A custom navigation header is implemented for improved navigation experience.
- **Dark Mode**: Dark mode support based on system settings or a toggle inside the app.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/photo-gallery-app.git
   cd photo-gallery-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app:
   ```bash
   npm run start
   ```

## API Used

- The app fetches images from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/photos).
  - Endpoint: `https://jsonplaceholder.typicode.com/photos`

## State Management

- **Redux** is used for managing the app's state, including the favorite image list.
- **Redux Persist** is used to persist the state of favorite images, so they remain available even after the app is closed and reopened.

## Image Fetching and Caching

- **RTK Query** is used to fetch images from the API and handle caching efficiently.
- **FastImage** is used to handle offline caching of images, improving performance and user experience when the app is used without an internet connection.

## Navigation

- **React Navigation** is implemented with a **bottom tab bar**, providing an intuitive way for users to navigate between screens. A custom header is used to enhance navigation aesthetics.

## Screens

- **Home Screen**: Displays a list of images fetched from the API.
- **Details Screen**: Displays a details of an image fetched from the API.
- **Favorites Screen**: Shows a list of favorited images that are persisted across sessions.

 
## Libraries Used

- **[React Native](https://reactnative.dev/)**: For building the mobile application.
- **[Redux](https://redux.js.org/)**: For state management.
- **[Redux Persist](https://github.com/rt2zz/redux-persist)**: For persisting the Redux state.
- **[RTK Query](https://redux-toolkit.js.org/rtk-query/overview)**: For efficient API requests and caching.
- **[FastImage](https://github.com/DylanVann/react-native-fast-image)**: For efficient image caching and offline support.
- **[React Navigation](https://reactnavigation.org/)**: For app navigation with a bottom tab bar and custom header.


