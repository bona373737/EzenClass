class Protoss {
    //모든 객체가 갖는 명사적 특성들을 멤버변수로 정의
    constructor(name, hp, dps) {
        this._name = name;
        this._hp = hp;
        this._dps = dps;
        console.log("[%s] 체력 : %d, 공격력 : %d", name, hp, dps);
    };

    move(position) {
        console.log(this._name + "(이)가" + position + "까지 이동합니다.")
    };
    attack(target) {
        console.log(this._name + "(이)가" + target + "을 공격합니다. 데미지:" + this._dps);
    };
};

class Zealot extends Protoss {
    sword(target) {
        this.attack(target);
        console.log(">>>> 검으로 찌르기");
    };
};

class Dragon extends Protoss {
    fire(target) {
        this.attack(target);
        console.log(">>> 원거리 공격");
    };
};

let z1 = new Zealot("질럿1", 300, 20);
z1.move("본진");
z1.sword("본진");

let d1 = new Dragon("드라군1", 250, 40);
d1.move("본진");
d1.fire("본진");