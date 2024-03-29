import React from "react";

import "./style.css";

function Index(props) {
  return (
    <footer className="col-12 footer">
      <div className="justify-content-center">
        <div className="col-12 text-light">
          <ul className="list-inline d-flex footer-list link-list">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://jenepontokab.go.id/"
                className="footer-link"
              >
                Dinas Kabupaten Jeneponto
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.dispensulsel.web.id/"
                className="footer-link"
              >
                Dinas Pendidikan Sulawesi Selatan
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 copyright mt-2">
          &copy; {props.copyright}{" "}
          <a target="_blank" rel="noreferrer" href="https://s.id/geschool">
            Geschool
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Index;
