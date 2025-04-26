import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {

	const { isLoggedIn, user, logout } = useContext(AuthContext);

	return (
    <div className="row">
      <div className="col fs-3" align="left">
        <img src="images/hotel_logo4.png" alt=""/>
        <Link to="/"><b><font color="black"> HOTEL Reservation System</font></b></Link>
      </div>
      <div className="col mt-3" align="right" style={{fontSize: 16}}>
        {isLoggedIn ? (
          <>
            <span><b><font color="red">{user.uid}님 환영합니다!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</font></b></span>
			<a href="/" onClick={logout}>로그아웃</a>&nbsp;|&nbsp;
			<Link to="/modify">회원정보수정</Link>&nbsp;|&nbsp;
			<Link to="/cart">장바구니</Link>&nbsp;|&nbsp; 
			<Link to="/reservation">예약조회</Link>&nbsp;|&nbsp;
			<Link to="/customer">고객센터</Link>
          </>
        ) : (
          <>
			<Link to="/login">로그인</Link>&nbsp;|&nbsp;
			<Link to="/register">회원가입</Link>&nbsp;|&nbsp;
			<Link to="/cart">장바구니</Link>&nbsp;|&nbsp; 
			<Link to="/reservation">예약조회</Link>&nbsp;|&nbsp;
			<Link to="/customer">고객센터</Link>
        </>
      )}
      </div>
    </div>
	);
};

export default Header;

			/*
			<button onClick={logout} className="btn btn-link p-0 me-2" style={{ textDecoration: 'none', fontSize: 16 }}>
			로그아웃
			</button>
			<a href="#" onClick={logout}>로그아웃</a>&nbsp;|&nbsp;
			*/



/* chatgpt권고
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn, user, logout } = useContext(AuthContext);

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
      <Link to="/" className="text-decoration-none text-dark">
        <h5 className="m-0">호텔예약</h5>
      </Link>

      {isLoggedIn ? (
        <div className="d-flex align-items-center">
          <span className="me-3"><strong>{user?.uid}</strong>님 환영합니다!</span>
          <button className="btn btn-sm btn-outline-secondary" onClick={logout}>로그아웃</button>
        </div>
      ) : (
        <Link to="/login" className="btn btn-sm btn-dark">로그인</Link>
      )}
    </header>
  );
};

export default Header;
*/

