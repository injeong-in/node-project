/*컨트롤러*/


//사용자 등록시
document.getElementById('fm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userID = e.target.userID.value;
    const userPW = e.target.userPW.value;
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const phonenumber = e.target.phone.value;
    if (!userID) {
        return alert('아이디를 입력하세요');
    }
    if (!userPW) {
        return alert('비밀번호를 입력하세요');
    }
    if (!userName) {
        return alert('이름을 입력하세요');
    }
    if (!email) {
        return alert('이메일을 입력하세요');
    }
    if (!phonenumber) {
        return alert('폰번호를 입력하세요');
    }
    try {
        await axios.post('/joins', {userID, userPW, userName, email, phonenumber});
        // getUser();
        alert('회원가입이 완료되었습니다');
        
    } catch(err) {
        console.error(err);
    } 

    e.target.userID.value = '';
    e.target.userPW.value = '';
    e.target.correctPassword.value = '';
    e.target.userName.value = '';
    e.target.email.value = '';
    e.target.phone.value = '';
    
});

