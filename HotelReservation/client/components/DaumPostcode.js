// 📁 src/components/DaumPostcode.js
import React from 'react';

const DaumPostcode = ({ onComplete }) => {
  const openPostcode = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
/*
        const fullAddress = data.address;
        const zoneCode = data.zonecode;
        onComplete(zoneCode, fullAddress);
*/
        const fullAddress = data.address;
        let extraAddress = '';

        // ✅ 건물명이 있다면 무조건 괄호로 포함
        if (data.buildingName !== '') {
          extraAddress = ` (${data.buildingName})`;
        }

        const zoneCode = data.zonecode;
        const finalAddress = fullAddress + extraAddress;

        onComplete(zoneCode, finalAddress);
      }
    }).open();
  };

  return (
    <button type="button" className="btn btn-sm btn-secondary w-100" onClick={openPostcode}>
      우편번호 찾기
    </button>
  );
};

export default DaumPostcode;
