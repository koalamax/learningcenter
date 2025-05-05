import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [uid, setUid] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!uid) {
      alert("아이디를 입력하세요.");
      return;
    }
    if (!pwd) {
      alert("암호를 입력하세요.");
      return;
    }

    // 실제 로그인 로직 (axios post 요청 등)
    console.log("로그인 시도:", uid, pwd);

    // 예시로 홈으로 이동
    navigate('/');
  };

  return (
	<>
    <div className="row mb-0">
      <div className="col"></div>
      <div className="col" align="center">
        <h3 className="mt-5">ADMIN 로그인</h3>
        <hr size="4px" className="m-0 mb-5" />

        <table width="340" height="200" style={{ border: '4px solid #e2e2e2' }} className="table-borderless bg-light">
            <tbody><tr>
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
		</tbody>
        </table>
      </div>
      <div className="col"></div>
    </div>
	<br /><br /><br /><br /><br />
	</>
  );
}

export default AdminLogin;
