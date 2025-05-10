import React, { useState, useContext } from 'react';
import axios from '../api/axiosInstance'; // 토큰 자동 붙는 axios
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


function Login() {
  const [uid, setUid] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!uid) {
      alert("아이디를 입력하세요.");
      return;
    }
    if (!pwd) {
      alert("암호를 입력하세요.");
      return;
    }

    try {
      const response = await axios.post('/api/auth/login', {
        uid: uid,
        pwd: pwd
      });

		/*
      const response = await axios.post('http://localhost:8080/api/auth/login', {
      const res = await axios.post('/api/auth/login', { uid, pwd });
		*/

      if (response.data.message === 'Login successful') {
        // 백엔드에선 유저 정보 반환 필요하지만 지금은 임시로 이름만 저장
        const dummyUser = { uid: uid };
        login(dummyUser, 'token'); // 전역 로그인 상태 저장
        alert('로그인 성공!');
        navigate('/');

		/*
			if (res.data.message === 'Login successful') {
			login(res.data.user, 'dummy-token'); // 실제 토큰 사용 시 교체
			alert('로그인 성공!');
			navigate('/');
			}
		*/

      } else {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    } catch (err) {

	  if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('로그인 실패: 서버 오류');
      }

      //console.error(err.response.data.message);
      alert('로그인 요청 중 오류가 발생했습니다.');
    }
  };

/*

    try {
      const res = await axios.post('/api/auth/login', { uid, pwd });
      if (res.data.message === 'Login successful') {
        login(res.data.user, 'dummy-token'); // 실제 토큰 사용 시 교체
        navigate('/');
      }
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('로그인 실패: 서버 오류');
      }
    }
  };
*/



/*
 return (
    <div className="container" style={{ maxWidth: 400 }}>
      <h3 className="mt-5 mb-4 text-center">로그인</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>아이디</label>
          <input className="form-control" value={uid} onChange={(e) => setUid(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>비밀번호</label>
          <input type="password" className="form-control" value={pwd} onChange={(e) => setPwd(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-dark w-100">로그인</button>
      </form>
    </div>
  );
*/


  return (
    <>
      <div className="row mb-0">
        <div className="col"></div>
        <div className="col" align="center">
          <h3 className="mt-5">회원 로그인</h3>
		  {error && <div className="alert alert-danger">{error}</div>}
          <hr size="4px" className="m-0 mb-5" />

          <table
            width="340"
            height="200"
            style={{ border: '4px solid #e2e2e2' }}
            className="table-borderless bg-light"
          >
            <tbody>
              <tr>
                <td align="center">
                  <table className="table table-borderless mt-3">
                    <tbody>
                      <tr height="45">
                        <td width="20%">아이디</td>
                        <td width="50%">
                          <div className="d-inline-flex">
                            <input
                              type="text"
                              name="uid"
                              className="form-control form-control-sm"
							  autoComplete="off" // ✅ 추가!
                              value={uid}
                              onChange={(e) => setUid(e.target.value)}
                              tabIndex="1"
                            />
                          </div>
                        </td>
                        <td width="30%" rowSpan="2">
                          <button
                            onClick={handleLogin}
                            tabIndex="3"
                            className="btn btn-sm btn-dark text-white mx-0 pt-4"
                            style={{ height: '75px', width: '75px' }}
                          >
                            로그인
                          </button>
                        </td>
                      </tr>
                      <tr height="45">
                        <td>암 호</td>
                        <td>
                          <div className="d-inline-flex">
                            <input
                              type="password"
                              name="pwd"
                              className="form-control form-control-sm"
							  autoComplete="off" // ✅ 추가!
                              value={pwd}
                              onChange={(e) => setPwd(e.target.value)}
                              tabIndex="2"
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <hr className="m-0" />
                </td>
              </tr>
              <tr height="50">
                <td align="center">
                  <a href="/user_idpw" className="btn btn-sm mybutton me-5">
                    아이디 또는 암호를 잃어버리셨나요?
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Login;
