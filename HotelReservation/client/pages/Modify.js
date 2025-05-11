// 📁 src/pages/Modify.js
import React, { useEffect, useState, useContext } from 'react';
import axios from '../api/axiosInstance';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import DaumPostcode from '../components/DaumPostcode';


function Modify() {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    uid: '',
	pwd: '**********',      // 기본 별표 표시
	pwd1: '**********',
    name: '',
    email: '',
    phone: '',
    zip: '',
    juso: '',
    detail: '',
    birthday1: '',
    birthday2: '',
    birthday3: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {

	if (!user) {
      navigate('/'); // ✅ 로그인 안 돼 있으면 로그인 페이지로 이동
      //navigate('/login'); // ✅ 로그인 안 돼 있으면 로그인 페이지로 이동
      return;
    }

    //axios.get(`http://localhost:8080/api/auth/me?uid=${user.uid}`)
    axios.get(`/api/auth/me?uid=${user.uid}`)
      .then(res => {
        const data = res.data;
        const [yy, mm, dd] = data.birthday.split('-');
        const [tel1, tel2, tel3] = data.phone.split('-');
        setForm({
          uid: data.uid,
          name: data.name,
          email: data.email,
          phone: data.phone,
          tel1, tel2, tel3,
          zip: data.zipcode,
          juso: data.address,
          detail: data.detail,
          birthday1: yy,
          birthday2: mm,
          birthday3: dd,
		  pwd: '**********',      // 기본 별표 표시
		  pwd1: '**********'
          //pwd: '',
          //pwd1: ''
        });
      })
      .catch(() => setError('회원정보를 불러오지 못했습니다.'));
  }, [user, navigate]);

  // ✅ 우편번호 찾기 (추후 주소 API 연동 가능)
/*
  const findZip = () => {
    alert('우편번호 찾기 팝업은 연동 예정입니다.');
  };    
*/

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    //if (!form.check_id) return alert('중복ID 조사를 먼저 하세요.');
    //if (!form.uid) return alert('아이디가 잘못되었습니다.');
    //if (!form.pwd || !form.pwd1) return alert('비밀번호를 입력하세요.');
    //if (form.pwd !== form.pwd1) return alert('비밀번호가 일치하지 않습니다.');
    if (!form.name) return alert('이름을 입력하세요.');
    if (!form.tel1 || !form.tel2 || !form.tel3) return alert('핸드폰 번호를 입력하세요.');
    if (!form.zip) return alert('우편번호를 입력하세요.');
    if (!form.juso) return alert('주소를 입력하세요.');
    if (!form.email) return alert('이메일을 입력하세요.');
    if (!form.birthday1 || !form.birthday2 || !form.birthday3) return alert('생일을 입력하세요.');

    const birthday = `${form.birthday1}-${form.birthday2}-${form.birthday3}`;
    const phone = `${form.tel1}-${form.tel2}-${form.tel3}`;

	const payload = {
		uid: form.uid,
		name: form.name,
		email: form.email,
		phone,
		address: form.juso,
		detail: form.detail,
		zipcode: form.zip,
		birthday
	};

    // 🔐 사용자가 비밀번호를 바꾼 경우만 포함
	// ✅ 사용자가 비밀번호를 변경한 경우
	if (form.pwd !== '**********') {
		// ✅ 유효성 검사
		if (form.pwd !== form.pwd1) {
		  return alert('비밀번호가 일치하지 않습니다.');// ⛔ 서버 전송 중단
		}
		payload.pwd = form.pwd;
	}


    try {
      const res = await axios.put('/api/auth/update',payload);
/*
      const res = await axios.put('http://localhost:8080/api/auth/update',payload);
      const res = await axios.put('http://localhost:8080/api/auth/update', {
        uid: form.uid,
        name: form.name,
        email: form.email,
        phone,
        address: form.juso,
        zipcode: form.zip,
        birthday
      });
*/

      setMessage(res.data.message);
      setError('');
      //alert('회원수정이 성공하였습니다.');
      alert(res.data.message);
	  //navigate('/');

    } catch (err) {
      setError(err.response?.data?.message || '수정 중 오류 발생');
      setMessage('');
    }
  };

  return (
    <div className="row m-1 mb-0">
      <div className="col" align="center">
        <h2 className="m-0 mt-5"><b>회원정보수정</b></h2>
		{error && <div className="alert alert-danger">{error}</div>}
		{message && <div className="alert alert-success">{message}</div>}

        <hr size="4px" className="my-3" />
        <table style={{ fontSize: '12px', width: '380px' }}>
          <tbody>
            <tr height="40">
              <td align="left" width="90">아이디 <font color="red">*</font></td>
              <td align="left">
                <div className="d-inline-flex">
                  <input type="text" name="uid" value={form.uid} readOnly
                    className="form-control form-control-sm me-1" size="20" style={{ backgroundColor: 'darkgray', color: 'white' }}/>
                </div>
				<span style={{ color: 'red', fontWeight: 'bold', fontSize: '12px' }}>
					( * 아이디는 수정 불가)
				</span>
              </td>
            </tr>
            <tr height="40">
              <td align="left">비밀번호 <font color="red">*</font></td>
              <td align="left">
                <input type="password" name="pwd" value={form.pwd}
                  className="form-control form-control-sm"
                  onChange={handleChange}
                  placeholder="영문자, 숫자, 밑줄만 이용" />
				<div className="mt-1" style={{ color: 'red', fontWeight: 'bold', fontSize: '12px' }}>
				(* 암호를 변경할 경우에만 *********를 지우고 새암호를 입력할것!)
				</div>
              </td>
            </tr>
            <tr height="40">
              <td align="left">비밀번호 확인 <font color="red">*</font></td>
              <td align="left">
                <input type="password" name="pwd1" value={form.pwd1}
                  className="form-control form-control-sm"
                  onChange={handleChange}
                  placeholder="영문자, 숫자, 밑줄만 이용" />
              </td>
            </tr>
            <tr height="40">
              <td align="left">이름 <font color="red">*</font></td>
              <td align="left">
                <input type="text" name="name" value={form.name}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
              </td>
            </tr>
            <tr height="40">
              <td align="left">휴대폰 <font color="red">*</font></td>
              <td className="d-flex gap-1">
                <input type="text" name="tel1" maxLength="3" value={form.tel1}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
                <input type="text" name="tel2" maxLength="4" value={form.tel2}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
                <input type="text" name="tel3" maxLength="4" value={form.tel3}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
              </td>
            </tr>
            <tr height="90">
              <td align="left">주소 <font color="red">*</font></td>
              <td align="left">
                <div className="d-flex mb-1">
                  <input type="text" name="zip" maxLength="5" value={form.zip}
                    className="form-control form-control-sm me-1"
                    onChange={handleChange} />
{/*
                  <button type="button" className="btn btn-sm btn-secondary w-100" onClick={findZip}>
                    우편번호 찾기
                  </button>
*/}
                  <DaumPostcode onComplete={(zip, juso) => {
                      setForm({ ...form, zip: zip, juso: juso });
                    }}
                    />

                </div>
                <input name="juso" value={form.juso}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
                <input name="detail" value={form.detail}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
              </td>
            </tr>
            <tr height="40">
              <td align="left">E-Mail <font color="red">*</font></td>
              <td align="left">
                <input type="text" name="email" value={form.email}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
              </td>
            </tr>
            <tr height="40">
              <td align="left">생일</td>
              <td align="left" className="d-flex gap-1">
                <input type="text" name="birthday1" maxLength="4" value={form.birthday1}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
                <input type="text" name="birthday2" maxLength="2" value={form.birthday2}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
                <input type="text" name="birthday3" maxLength="2" value={form.birthday3}
                  className="form-control form-control-sm"
                  onChange={handleChange} />
              </td>
				<div align="left" className="mt-1" style={{ color: 'red', fontWeight: 'bold', fontSize: '12px' }}>
				(* 생일날 호텔객실 할인쿠폰을 제공합니다)
				</div>
            </tr>
            <tr height="60">
              <td colSpan="2" align="center">
                <button className="btn btn-sm btn-dark text-white my-4" onClick={handleSubmit}>
                  회원정보수정
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Modify;


/*
    <div className="row m-1 mb-0">
      <div className="col" align="center">
        <h2 className="m-0 mt-5"><b>회원정보 수정</b></h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}
        <hr size="4px" className="my-3" />

      </div>
    </div>
  );
*/
        /* 🔁 여기에 Register.js 폼 그대로 복붙해서 수정용으로 사용 */
        /* 위에서 보여주신 HTML 폼을 이 위치에 복사해서 쓰면 됩니다 */
        /* 단, 비밀번호 항목은 수정 시 불필요하므로 생략해도 됩니다 */
