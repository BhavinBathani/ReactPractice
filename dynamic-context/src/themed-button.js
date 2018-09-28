import {ThemeContext} from './theme-context';
import React from 'react';

function ThemedButton(props) {
  return (
    <ThemeContext.Consumer>
      { bhavin => (
        <button
          {...props}
          style={{backgroundColor: bhavin.background}}
        />

      )}
    </ThemeContext.Consumer>
  );
}

export default ThemedButton;