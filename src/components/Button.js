import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
  let classes = ['btn'],
    buttonText = props.children,
    styleArray;

  if(props.style && props.style.indexOf(' ') >= 0) {
    const styles = props.style;
    styleArray = styles.split(' ');

    for(var i = 0; i < styleArray.length; i++) {
      pushStyles(styleArray[i]);
    }
  } else {
    styleArray = props.style;
    pushStyles(styleArray);    
  };

  function pushStyles(array) {
    switch(array) {
      case('full'):
        classes.push('btn-full');
      break;
      case('secondary'):  
        classes.push('btn-secondary');
      break;
    }
  }

  if (props.classes) {
    classes = classes.concat(props.classes.split(' '));
  }

  if (props.disabled) {
    classes.push('btn-disabled');
  }

  return (
    <button
      className={classes.join(' ')}
      disabled={props.disabled || props.workInProgress}
      onClick={props.onClick}
      type={props.type}
      name={props.name}>
      {buttonText}
    </button>
  );
}

Button.displayName = 'Button';

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string,
  type: PropTypes
    .oneOf([
      'button',
      'submit',
      'reset'
    ]),
};

Button.defaultProps = {
  type: 'submit',
  style: 'primary',
  disabled: false,
  name: '',
  classes: '',
  onClick: () => {}
};

export default Button;
