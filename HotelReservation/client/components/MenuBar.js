import React from 'react';

const MenuBar = () => (

    <div className="row bg-light m-0 p-1 fs-6 border">
      <div className="col">
        <div className="d-flex">
          <ul className="nav me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="menu.html?menu=8" role="button" aria-expanded="false"> 서울 </a>
              <ul className="dropdown-menu">
                <li className="nav-item zoom_a"><a className="dropdown-item" href="#">종로</a></li>
                <li className="nav-item zoom_a"><a className="dropdown-item" href="#">여의도</a></li>
                <li className="nav-item zoom_a"><a className="dropdown-item" href="#">강남</a></li>
                <li className="nav-item zoom_a"><a className="dropdown-item" href="#">강북</a></li>
                <li className="nav-item zoom_a"><a className="dropdown-item" href="#">강동</a></li>
                <li className="nav-item zoom_a"><a className="dropdown-item" href="#">강서</a></li>
              </ul>
            </li>
            <li className="nav-item zoom_a"><a className="nav-link" href="menu.html?menu=2"> 인천 </a></li>
            <li className="nav-item zoom_a"><a className="nav-link" href="menu.html?menu=3"> 대전 </a></li>
            <li className="nav-item zoom_a"><a className="nav-link" href="menu.html?menu=4"> 대구 </a></li>
            <li className="nav-item zoom_a"><a className="nav-link" href="menu.html?menu=5"> 부산 </a></li>
            <li className="nav-item zoom_a"><a className="nav-link" href="menu.html?menu=5"> 광주 </a></li>
            <li className="nav-item zoom_a"><a className="nav-link" href="menu.html?menu=6"> 제주 </a></li>
          </ul>
        </div>
      </div>
    </div>
);

export default MenuBar;
