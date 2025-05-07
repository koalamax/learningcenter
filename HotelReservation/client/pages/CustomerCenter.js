import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance'; // 토큰 자동 포함 axios
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function CustomerCenter() {
  const { user } = useContext(AuthContext);
  const [form, setForm] = useState({
    title: '',
    content: '',
    password: '',
    isPrivate: false,
  });
  const [list, setList] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosInstance.get('/api/inquiries/my', {
        params: { email: user.email },
      }).then(res => setList(res.data));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async () => {
    if (!form.title || !form.content || !form.password) {
      alert('제목, 내용, 비밀번호를 입력해주세요.');
      return;
    }

    try {
      await axiosInstance.post('/api/inquiries', {
        ...form,
        userEmail: user.email,
      });
      alert('문의가 등록되었습니다.');
      setForm({ title: '', content: '', password: '', isPrivate: false });
      const res = await axiosInstance.get('/api/inquiries/my', {
        params: { email: user.email },
      });
      setList(res.data);
    } catch (err) {
      alert('등록 실패: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="container mt-5">
      <h4 className="mb-3">고객센터 문의 등록</h4>
      <div className="mb-3">
        <input
          type="text"
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <textarea
          name="content"
          placeholder="문의 내용"
          rows={4}
          value={form.content}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="수정/삭제용 비밀번호"
          value={form.password}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <label>
          <input
            type="checkbox"
            name="isPrivate"
            checked={form.isPrivate}
            onChange={handleChange}
          /> 비공개 문의
        </label>
        <button className="btn btn-primary w-100 mt-3" onClick={handleSubmit}>
          문의 등록
        </button>
      </div>

      <hr />

      <h5>내 문의글</h5>
      {list.map(q => (
        <div key={q.id} className="border p-3 my-2">
          <strong>{q.title}</strong> {q.isPrivate && <span className="badge bg-secondary">비공개</span>}
          <p className="mb-1">{q.content}</p>
          {q.adminReply ? (
            <p className="text-success">[관리자 답변] {q.adminReply}</p>
          ) : (
            <p className="text-muted">답변 대기 중</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default CustomerCenter;

