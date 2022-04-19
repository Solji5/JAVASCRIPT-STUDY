//Recap

const toBuy =["potato", "tomato", "pizza"];
console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);

toBuy.push("meet");
console.log(toBuy);


const plyer = {
    name : "Nice", age="98"
}    //player라는 변수의 속성- 값 설정 

console.log(player, console);  //console 역시 object라는 것을 알 수 있다.(f가 뜨기 때문)
player.name = "nicolas";
console.log(player)


function plus {
    console.log(2+2);
}

plus();

function plus(potate, salad) {
    console.log(potate+salad);
}

//argument 부분은 fucntion()괄호 안에 들어 있는 것들
plus(5,10);     //5=poato 10=salad
plus(1.23424, 2.3442);     //1.23424(data) = potato 2.3442(data) = salad
plus(9998, 1.33453);

//argument에는 많은 data들이 와도 가능하다.

fuction minusFive(potato) {
    console.log(potato-5);

}

minusFive(10,10,12,34,4,5,6,7);
