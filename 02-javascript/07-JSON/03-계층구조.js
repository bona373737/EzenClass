// 다른 json객체를 value로 포함

let centerPoint = {
    x : 5,
    y : 10
}


let circle1 ={
    center : centerPoint,
    radius : 5.10
}


let circle2 = {
    center : {
        x : 5,
        y : 10 
    },
    radius : 5.10
}

console.log(circle1.center.x);
console.log(circle2.center.y);
console.log(circle2.radius);
