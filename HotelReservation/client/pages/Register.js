import React, { useState } from 'react';
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

import DaumPostcode from '../components/DaumPostcode';

function Register() {
  const [form, setForm] = useState({
    uid: '',
    pwd: '',
    pwd1: '',
    name: '',
    tel1: '010',
    tel2: '',
    tel3: '',
    zip: '',
    juso: '',
    detail: '',
    email: '',
    birthday1: '',
    birthday2: '',
    birthday3: '',
    check_id: false,
  });

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ 중복 ID 확인 (API 연동 예정)
  //const checkId = () => {
  const checkId = async () => {
    if (!form.uid) {
      alert('ID를 입력하세요.');
		setError("ID를 입력하세요.");
		setMessage("");

      return;
    }
    //alert(`"${form.uid}" 중복 확인 완료!`); // 테스트용
    //setForm({ ...form, check_id: true });
	  try {
		const res = await axios.get(`/api/auth/check-id?uid=${form.uid}`);
		if (res.data.available) {
		  alert(`"${form.uid}"는 사용 가능한 아이디입니다.`);
		  setMessage(`"${form.uid}"는 사용 가능한 아이디입니다.`);
		  setError("");

		  setForm({ ...form, check_id: true });
		} else {
		  setError(`"${form.uid}"는 이미 사용 중인 아이디입니다.`);
		  setMessage("");

		  alert(`"${form.uid}"는 이미 사용 중인 아이디입니다.`);
		  setForm({ ...form, check_id: false });
		}
	  } catch (err) {
		setError("중복 확인 중 오류가 발생했습니다.");
		setMessage("");

		alert('중복 확인 중 오류가 발생했습니다.');
		console.error(err);
	  }
  };

  // ✅ 우편번호 찾기 (추후 주소 API 연동 가능)
/*
  const findZip = () => {
    alert('우편번호 찾기 팝업은 연동 예정입니다.');
  };
*/

	
  //const handleSubmit = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!form.check_id) return alert('중복ID 조사를 먼저 하세요.');
    if (!form.uid) return alert('아이디가 잘못되었습니다.');
    if (!form.pwd || !form.pwd1) return alert('비밀번호를 입력하세요.');
    if (form.pwd !== form.pwd1) return alert('비밀번호가 일치하지 않습니다.');
    if (!form.name) return alert('이름을 입력하세요.');
    if (!form.tel1 || !form.tel2 || !form.tel3) return alert('핸드폰 번호를 입력하세요.');
    if (!form.zip) return alert('우편번호를 입력하세요.');
    if (!form.juso) return alert('주소를 입력하세요.');
    if (!form.email) return alert('이메일을 입력하세요.');
    if (!form.birthday1 || !form.birthday2 || !form.birthday3) return alert('생일을 입력하세요.');


	// 🔧 생일 조합
	const birthday = `${form.birthday1}-${form.birthday2}-${form.birthday3}`;
	// 🔧 전화 조합
	const phone = `${form.tel1}-${form.tel2}-${form.tel3}`;

	// 📦 전송할 최종 데이터 구성 (pwd1 제거)
	const payload = {
		uid: form.uid,
		pwd: form.pwd,
		name: form.name,
		email: form.email,
		phone: phone,
		address: form.juso,
		detail: form.detail,
		zipcode: form.zip,
		birthday: birthday
	};


	try {
	  //const res = await axios.post('http://localhost:8080/api/auth/register', form);

      //const res = await axios.post('http://localhost:8080/api/auth/register', payload);
      const res = await axios.post('/api/auth/register', payload);
      setMessage(res.data.message);
	  alert('회원가입이 성공하였습니다.');
	  navigate('/login');

    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('회원가입 실패: 서버 오류');
        alert('회원가입 실패: 서버 오류');
      }
    }

    // ✅ 회원가입 요청 (axios.post 등 연동 가능)
    //alert('회원가입 정보 전송됨 (백엔드 연동 필요)');
  };


  return (
    <div className="row m-1 mb-0">
      <div className="col" align="center">
        <h2 className="m-0 mt-5"><b>회원 가입</b></h2>
		{error && <div className="alert alert-danger">{error}</div>}
		{message && <div className="alert alert-success">{message}</div>}

        <hr size="4px" className="my-3" />
        <table style={{ fontSize: '12px', width: '360px' }}>
          <tbody>
            <tr height="40">
              <td align="left" width="90">아이디 <font color="red">*</font></td>
              <td align="left">
                <div className="d-inline-flex">
                  <input type="text" name="uid" value={form.uid}
                    className="form-control form-control-sm me-1" size="20"
                    onChange={handleChange} />
                  <button type="button" className="btn btn-sm btn-secondary w-100" style={{ fontSize: '12px'}} onClick={checkId}>
                    중복 아이디
                  </button>
                </div>
              </td>
            </tr>
            <tr height="40">
              <td align="left">비밀번호 <font color="red">*</font></td>
              <td align="left">
                <input type="password" name="pwd" value={form.pwd}
                  className="form-control form-control-sm"
                  onChange={handleChange}
                  placeholder="영문자, 숫자, 밑줄만 이용" />
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
				  placeholder="상세주소를 입력하세요(예: 104동302호)"
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
                  회원가입
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Register;
