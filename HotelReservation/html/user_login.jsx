<div>
  {/*  현재 페이지 자바스크립  ------------------------------------------*/}
  {/* form2 시작 */}
  <form name="form2" method="post" action="member_check.html">
    <div className="row mb-0">
      <div className="col" />
      <div className="col" align="center">
        <h3 className="mt-5">회원 로그인</h3>
        <hr size="4px" className="m-0 mb-5" />
        <table width={340} height={200} style={{border: '4px solid #e2e2e2'}} bgcolor="#fcfcfc" className="table-borderless">
          <tbody><tr>
              <td align="center">
                <table className="table table-borderless mt-3">
                  <tbody><tr height={45}>
                      <td width="20%">아이디</td>
                      <td width="50%">
                        <div className="d-inline-flex">
                          <input type="text" name="uid" size={20} defaultValue tabIndex={1} className="form-control form-control-sm" />
                        </div>
                      </td>
                      <td width="30%" rowSpan={2}>
                        <a href="javascript:Check_Value();" tabIndex={3} className="btn btn-sm btn-dark text-white mx-0 pt-4" style={{height: 75, width: 75}}>&nbsp;로그인&nbsp;</a>
                      </td>
                    </tr>
                    <tr height={45}>
                      <td>암 호</td>
                      <td>
                        <div className="d-inline-flex">
                          <input type="password" name="pwd" size={20} defaultValue tabIndex={2} className="form-control form-control-sm" />
                        </div>
                      </td>
                    </tr>
                  </tbody></table>                    
              </td>
            </tr>
            <tr><td><hr className="m-0" /></td></tr>
            <tr height={50}>
              <td align="center">
                <a href="user_idpw.html" className="btn btn-sm mybutton me-5"> 아이디 또는 암호를 잃어버리셨나요?</a> 
              </td>
            </tr>
          </tbody></table>
      </div>
      <div className="col" />
    </div>
  </form>
  <br /><br /><br /><br /><br />
</div>
