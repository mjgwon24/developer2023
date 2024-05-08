/**
 * 멤버 목록 출력
 * @author 권민지
 */
const seasons = ['all', 'season2', 'season1'];   // 최신순으로 추가
const team = { 'season1': ['game', 'shopping mall', 'notepad', 'community', 'free'],
                                      'season2': []};
const members = [
    {'season': 1, 'team': 'game', 'name': '박근태', 'role': 'PM'},
    {'season': 1, 'team': 'game', 'name': '김문석', 'role': 'QC'},
    {'season': 1, 'team': 'game', 'name': '김석현', 'role': '서배개발 ・ DB ・ 배포'},
    {'season': 1, 'team': 'game', 'name': '김동위', 'role': '개발'},
    {'season': 1, 'team': 'game', 'name': '진현명', 'role': '개발'},
    {'season': 1, 'team': 'game', 'name': '채종인', 'role': '개발'},
    {'season': 1, 'team': 'game', 'name': '주홍진', 'role': '개발'},
    {'season': 1, 'team': 'game', 'name': '홍승민', 'role': '개발'},
    {'season': 1, 'team': 'game', 'name': '홍승민', 'role': '개발'},
    {'season': 1, 'team': 'shopping mall', 'name': '박찬엽', 'role': 'PM'},
    {'season': 1, 'team': 'shopping mall', 'name': '박창윤', 'role': '백엔드'},
    {'season': 1, 'team': 'shopping mall', 'name': '이예은', 'role': '백엔드'},
    {'season': 1, 'team': 'shopping mall', 'name': '문종찬', 'role': '프론트엔드'},
    {'season': 1, 'team': 'shopping mall', 'name': '표준수', 'role': '프론트엔드'},
    {'season': 1, 'team': 'shopping mall', 'name': '김진수', 'role': 'DB'},
    {'season': 1, 'team': 'shopping mall', 'name': '한보미', 'role': '디자인'},
    {'season': 1, 'team': 'notepad', 'name': '김원', 'role': 'PM'},
    {'season': 1, 'team': 'notepad', 'name': '권민지', 'role': '백엔드 ・ DB'},
    {'season': 1, 'team': 'notepad', 'name': '이세빈', 'role': '프론트'},
    {'season': 1, 'team': 'notepad', 'name': '윤창희', 'role': 'DB'},
    {'season': 1, 'team': 'notepad', 'name': '손병혁', 'role': '디자인'},
    {'season': 1, 'team': 'community', 'name': '전상은', 'role': 'PM'},
    {'season': 1, 'team': 'community', 'name': '김민성', 'role': 'study'},
    {'season': 1, 'team': 'community', 'name': '서종우', 'role': 'study'},
    {'season': 1, 'team': 'community', 'name': '양윤기', 'role': 'study'},
    {'season': 1, 'team': 'community', 'name': '조준형', 'role': 'study'},
    {'season': 1, 'team': 'free', 'name': '이규원', 'role': 'teaching'}
];
let currentSeasonElement = document.querySelector('.selected');

function initializeMemberList(season) {
    const parentElement = document.getElementById("teamList");
    parentElement.innerHTML = "";
    function memberListView(team, members){
        team.forEach(function (item){
            const newTeamDiv = document.createElement("div");

            newTeamDiv.classList.add("teamName");
            newTeamDiv.textContent = `${item} team`;
            parentElement.appendChild(newTeamDiv);

            console.log(item);
            console.log(newTeamDiv);

            members.forEach(function (member){
                if(member.team === item){
                    const newMemberDiv = document.createElement("div");
                    const newMemberP1 = document.createElement("p");
                    const newMemberP2 = document.createElement("p");

                    newMemberDiv.classList.add("member");
                    newMemberP1.classList.add("name");
                    newMemberP2.classList.add("memDetail");

                    newMemberP1.textContent = `${member.name}`;
                    newMemberP2.textContent = `${member.role}`;
                    parentElement.appendChild(newMemberDiv);
                    newMemberDiv.appendChild(newMemberP1);
                    newMemberDiv.appendChild(newMemberP2);
                }
            });
        });
    }

    if (season === 'all') {
        seasons.forEach(function (i) {
            if (i !== 'all') {
                memberListView(team[i], members);
            }
        });
    } else {
        memberListView(team[season], members);
    }
}

/**
 * 기수별 멤버 리스트 호출
 */
function handleClick(element){
    if(currentSeasonElement !== null) {
        currentSeasonElement.classList.remove('selected');
    }

    element.classList.add('selected');

    const seasonName = element.textContent;
    initializeMemberList(seasonName);

    currentSeasonElement = element;
}

initializeMemberList('all');





