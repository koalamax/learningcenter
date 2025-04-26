import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div>
      <hr className="m-0" />
      <div className="row bg-light py-3 m-0 mb-5">
        <div className="col-2" align="center">
          <a href="/"><img src="images/hotel_logo3.png" width="120" className="img-fluid" alt="logo" /></a>
        </div>
        <div className="col-7" align="left" style={{ lineHeight: '15px' }}>
          <a href="/"><h6><b>HOTEL Reservation System</b></h6></a>
          <span style={{ fontSize: '12px' }}>
            상호: Hotel Reservation System | 대표 : <b>이민욱,장정호,김준섭,최영재</b> | 사업자 등록번호 : 123-12-123456<br />
            주소 : 13174 성남시 중원구 광명로 377(금광2동 2685)  | 전화 : 010-1234-1234 | Fax : 02-1234-1234<br />
            개인정보관리책임자 : 최영재 | 이메일 : youngjae.choi@g.shingu.ac.kr<br />
            <br />
            Copyright © 2025 www.hotelreservation.co.kr &nbsp; All Rights Reserved.
          </span>
        </div>
        <div className="col-3" align="center" style={{ fontSize: '12px' }}>
          <a href="/company">회사소개</a>&nbsp; |&nbsp;
          <a href="/useinfo">이용안내</a>&nbsp; |&nbsp;
          <a href="/policy">개인정보정책</a>&nbsp; |&nbsp;
          <Link to="/adminlogin"><b>Admin</b></Link><br /><br />
          <a href="http://www.ftc.go.kr/"><img src="images/footer_pic1.gif" className="img-fluid mb-2" alt="footer1" /></a>
          <a href="https://www.kca.go.kr/"><img src="images/footer_pic2.gif" className="img-fluid mb-2" alt="footer2" /></a>
        </div>
      </div>
    </div>
)

export default Footer;
