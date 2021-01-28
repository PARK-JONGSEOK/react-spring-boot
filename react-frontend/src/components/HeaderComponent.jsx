import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <div>
                <a
                  href="https://github.com/PARK-JONGSEOK"
                  className="navbar-brand"
                >
                  Employee Management App
                </a>
              </div>
            </nav>
          </header>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
