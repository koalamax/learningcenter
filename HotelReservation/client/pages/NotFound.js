import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-3">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="lead mb-4">
        존재하지 않거나 삭제된 페이지입니다.<br />
        주소를 다시 확인해주세요.
      </p>
      <button
        className="btn btn-primary"
        onClick={() => navigate('/')}
      >
        홈으로 이동
      </button>
    </div>
  );
}

export default NotFound;

