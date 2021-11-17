const title = [];
		title.push("아저씨"); title.push("이끼"); title.push("시라노:연애조작단"); title.push("드래곤길들이기"); title.push("나잇&데이"); title.push("버레스크"); title.push("아이언맨2"); title.push("인셉션");
		title.push("트랜스포머3"); title.push("의뢰인"); title.push("오싹한연애"); title.push("쿵푸팬더2"); title.push("써니"); title.push("머펫 대소동"); title.push("리얼스틸"); title.push("완득이");
		title.push("도둑들"); title.push("다크나이트 라이즈"); title.push("늑대소년"); title.push("아이스에이지4"); title.push("바람과함께 사라지다"); title.push("레미제라블"); title.push("어벤져스"); title.push("광해");
		title.push("아이언맨3"); title.push("컨저링"); title.push("위대한 개츠비"); title.push("터보"); title.push("7번방의 선물"); title.push("선샤인온리스"); title.push("설국열차"); title.push("관상");
		title.push("명량"); title.push("나를찾아줘"); title.push("비긴어게인"); title.push("겨울왕국"); title.push("슬로우비디오"); title.push("숲속으로"); title.push("인터스텔라"); title.push("수상한그녀");
		title.push("베테랑"); title.push("킹스맨:시크릿에이전트"); title.push("뷰티인사이드"); title.push("인사이드아웃"); title.push("인턴"); title.push("위플래쉬"); title.push("어벤져스2"); title.push("암살");
		title.push("캡틴아메리카:시빌워"); title.push("부산행"); title.push("미비포유"); title.push("주토피아"); title.push("검사외전"); title.push("라라랜드"); title.push("엑스맨:아포칼립스"); title.push("터널");
		title.push("공조"); title.push("살인자의 기억법"); title.push("콜미바이유어네임"); title.push("너의 이름은"); title.push("아이캔스피크"); title.push("미녀와야수"); title.push("스파이더맨:홈커밍"); title.push("택시운전사");
		title.push("미션임파서블:폴아웃"); title.push("곤지암"); title.push("너의 결혼식"); title.push("코코"); title.push("완벽한타인"); title.push("맘마미아2"); title.push("어벤져스3"); title.push("보헤미안랩소디");
		title.push("스파이더맨:파프롬홈"); title.push("조커"); title.push("가장 보통의 연애"); title.push("겨울왕국2"); title.push("극한직업"); title.push("캣츠"); title.push("어벤져스4"); title.push("기생충");

const titleNo = [];
		titleNo.push(50); titleNo.push(63); titleNo.push(44); titleNo.push(20); titleNo.push(14); titleNo.push(31); titleNo.push(48); titleNo.push(65);
		titleNo.push(80); titleNo.push(62); titleNo.push(57); titleNo.push(75); titleNo.push(45); titleNo.push(25); titleNo.push(23); titleNo.push(58);
		titleNo.push(19); titleNo.push(18); titleNo.push(17); titleNo.push(47); titleNo.push(30); titleNo.push(22); titleNo.push(52); titleNo.push(10);
		titleNo.push(49); titleNo.push(72); titleNo.push(60); titleNo.push(79); titleNo.push(2); titleNo.push(38); titleNo.push(39); titleNo.push(9);
		titleNo.push(26); titleNo.push(13); titleNo.push(36); titleNo.push(5); titleNo.push(1); titleNo.push(41); titleNo.push(66); titleNo.push(40);
		titleNo.push(32); titleNo.push(76); titleNo.push(35); titleNo.push(64); titleNo.push(67); titleNo.push(61); titleNo.push(53); titleNo.push(51);
		titleNo.push(70); titleNo.push(34); titleNo.push(27); titleNo.push(69); titleNo.push(4); titleNo.push(21); titleNo.push(56); titleNo.push(78);
		titleNo.push(8); titleNo.push(37); titleNo.push(74); titleNo.push(16); titleNo.push(46); titleNo.push(28); titleNo.push(43); titleNo.push(77);
		titleNo.push(29); titleNo.push(7); titleNo.push(15); titleNo.push(73); titleNo.push(59); titleNo.push(24); titleNo.push(55); titleNo.push(33);
		titleNo.push(42); titleNo.push(68); titleNo.push(3); titleNo.push(6); titleNo.push(11); titleNo.push(71); titleNo.push(54); titleNo.push(12);

const boardNo = [];

for(var i=0; i<80; i++) {
    boardNo.push(i);
}

module.exports = () => {
    var User = {
        title: title,
        titleNo: titleNo,
        yearNum: 0,
        boardNo: boardNo,
    };
    return User;
}


