const calculator = {
    plus : function (a,b) {
        console.log("hello");
        console.log(a+b);
        return "byebye";  
        console.log("byebye");          //return이후의 명령어는 싫어하지 않는다. (return은 따라서 그 함수의 종결을 말해줌 )
      },
    minus : function (a,b){
        return a-b;
    }
    times : function(a,b) {
        return a*b;

    }
    power : function(a,b) {
        return a ** b;
    }
    divide : function (a,b){
        return a/b
    }
}
const calculator {            //const 변수 { 속성 : 값(함수)}로 표현하는 것이 일반적인 프로그래밍의 기본이 된다. 
    plus : function(a,b){
        return a+b;
    }
}
const plusResult = calculator.plus(2,3);
