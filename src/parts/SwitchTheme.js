import React from "react";

class SwitchTheme extends React.Component {
  render() {
    return (
      <div class="toggle toggle--daynight py-1 px-lg-4">
        <input type="checkbox" id="toggle--daynight" class="toggle--checkbox" />
        <label class="toggle--btn" for="toggle--daynight"></label>
      </div>
    );
  }
}

export default SwitchTheme;
