import PropTypes from "prop-types";
import {useState} from "react";

export default function Hex2RGB() {

  const [hex, setHex] = useState('#ff0000')
  const [rgb, setRGB] = useState('')

  const divStyle = {
    background: hex
  }

  const hexToRgb = input => {
    const rule = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    return rule.exec(input) ? {
      r: parseInt(rule[1], 16),
      g: parseInt(rule[2], 16),
      b: parseInt(rule[3], 16)
    } : null;
  }

  const handleHexChange = e => {
    if(hexToRgb(e.target.value)) {
        setHex(e.target.value)
        setRGB(hexToRgb(e.target.value).r)
      console.log(hexToRgb(e.target.value).r)
    } else {
      setHex('#ff0000')
    }

  }

  return (
    <div style={divStyle}>
      <input type="text" id="input" onChange={handleHexChange} />
      <div className="rbgValue">rgb({rgb})</div>
    </div>
  );
}
