// polyfills
//import 'core-js/es/map';
//import 'core-js/es/set';
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './css/default.less';

// the module
import Form from './component/form.jsx';
import FormField from './component/form-field.jsx';
import ImageUpload from './component/image-upload.jsx';
import InputWithCounter from './component/input-with-counter.jsx';
import Postcode from './component/postcode.jsx';
import Select from './component/select.jsx';
import Text from './component/textinput.jsx';
import Textarea from './component/textarea.jsx';
import Slider from './component/slider.jsx';
export default {
  Form,
  FormField,
  ImageUpload,
  InputWithCounter,
  Postcode,
  Select,
  Text,
  Textarea,
  Slider,
}

// render the base element
// function renderElement( elem, config ) {
//   let attributes = elem.attributes;
//   ReactDOM.render( <OpenStadComponentReactions attributes={attributes} config={config}/>, elem)
// }
// export {renderElement}

