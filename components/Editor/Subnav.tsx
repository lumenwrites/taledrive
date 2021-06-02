import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Subnav extends Component {
  render() {
    return (
      <div className="subnav">
        <div className="wrapper">
          <div className="dropdown">
            <div className="menu-handle btn btn-subnav">
              <FontAwesomeIcon icon={["fas", "file"]} />
              File
            </div>
            <div className="menu">
              <div className="item btn" onClick={() => {}}>
                New
              </div>
            </div>
          </div>

          <div className="btn" onClick={() => { }}>
            <FontAwesomeIcon icon={["fas", "plus-circle"]} />
            Create
          </div>

          <div className="dropdown">
            <div className="menu-handle btn" onClick={() => {}}>
              <FontAwesomeIcon icon={["fas", "download"]} />
              Save
            </div>
            <div className="menu">
              <div className="item btn" onClick={() => {}}>
                Save Sheet
              </div>
              <div className="item btn" onClick={() => {}}>
                Backup All Sheets
              </div>
            </div>
          </div>

          <div className="dropdown">
            <div className="menu-handle btn">
              <FontAwesomeIcon icon={["fas", "upload"]} />
              Open
            </div>
            <div className="menu">
              {/* Hidden html5 file input */}
              <input type="file" id="file-input" accept=".json" />
              {/* Just triggers click on file input */}
              <div className="item btn" onClick={() => {}}>
                Sheet
              </div>
              <div className="item btn" onClick={() => {}}>
                Backup
              </div>
            </div>
          </div>

          <div className="btn right" onClick={() => {}}>
            <FontAwesomeIcon icon={["fas", "trash-alt"]} />
            Delete
          </div>
          <div className="clearfix" />
        </div>
      </div>
    )
  }
}

export default Subnav
