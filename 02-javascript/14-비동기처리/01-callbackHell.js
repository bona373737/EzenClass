/* 
시나리오

1초후 "당신의 추첨 결과는..?" 이라는 메세지 표시
1~9에 대한 랜덤값이 짝수이면 당첨/홀수이면 꽝
그 결과를 3초 후에 표시
*/
console.log("콜백지옥 ver1 ---------------------------------------------------------------------------");

function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
};

setTimeout(() => {
    console.log("당신의 추첨 결과는..?");
    const lucky = random(1, 9);
    setTimeout(() => {
        console.log(lucky % 2 == 0 ? "당첨입니다" : "꽝!");
    }, 3000);
}, 1000);

console.log("추첨중----");



console.log("콜백지옥 ver2 ---------------------------------------------------------------------------");
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id === 'nana' && password === 'papa') || (id === 'gugu' && password === 'lala')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    };

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'nana') {
                onSuccess({
                    name: "nana",
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    };
};

//1.사용자에게 id와 password를 받아오기 
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your passord');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(user,
            userWithRole => {

            }
        );
    }
)