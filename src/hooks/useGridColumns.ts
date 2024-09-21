import {useWindowDimensions} from 'react-native';

const useGridColumns = () => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;

  // Dynamically adjust number of columns based on device size and orientation
  let numColumns;

  if (isPortrait) {
    if (width < 360) {
      numColumns = 2; // Small phone in portrait
    } else if (width >= 360 && width <= 600) {
      numColumns = 3; // Big phone in portrait
    } else {
      numColumns = 4; // Tablet in portrait
    }
  } else {
    if (height < 360) {
      numColumns = 2; // Small phone in landscape
    } else if (height >= 360 && height <= 600) {
      numColumns = 4; // Big phone in landscape
    } else {
      numColumns = 5; // Tablet in landscape
    }
  }

  return {numColumns};
};
export default useGridColumns;
