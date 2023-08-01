import { useEffect, useState } from 'react';
// import { Dimensions } from 'react-native';
import Orientation from 'react-native-orientation';

const AppOrientation = () => {
  const [currentOrientation, setCurrentOrientation] = useState('');

  useEffect(() => {
    // Getting initial Orientation
    const initial = Orientation.getInitialOrientation();
    setCurrentOrientation('Current Device Orientation: ' + initial);

    // Listner for orientation change LANDSCAPE / PORTRAIT
    Orientation.addOrientationListener(orientationChange);

    return () => {
      // Remember to remove listener
      Orientation.removeOrientationListener(orientationChange);
    };
  }, []);

  const orientationChange = (orientation) => {
    setCurrentOrientation(
      'Current Device Orientation: ' + orientation
    );
  };

  const getCurrentOrientation = () => {
    Orientation.getOrientation((err, orientation) => {
      alert('Orientation: ' + orientation);
    });
  };
};

export default AppOrientation;
