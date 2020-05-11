// var hello = "Hello world";
// alert(hello);

// alert('Hello ' + 'javascript')

// var orange = 100;
// var apple = 120;

// if(orange < apple){
// 	alert('みかんの値段がりんごより安い');
// }

// else if(orange > apple){
// 	alert('みかんの値段がりんごより高い');
// }

// else{
// 	alert('みかんの値段がりんごより高い');
// }

// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
// 	num = num * 2;
// 	count = count + 1;
// } 

// alert('２をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// var i;
// var num = 0;

// for(i = 1; i < 11; i++){
// 	num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + "です");


// // 関数
// function addString(strA){
// 	var addStr = "Hello" + strA;
// 	return addStr;
// }

// var alertString;
// alertString = addString("webcamp");

// // 作成した関数を呼び出す
// alert(alertString);


// var promptStr = prompt('何か好きな文字を入力してください')

// alert(promptStr);



// 6-3章ここから課題
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
// alert(user_hand);
var js_hand = getJShand();

var judge = winLose(user_hand, js_hand);

if(user_hand == "グー" || user_hand =="チョキ" || user_hand =="パー"){
	var judge = winLose(user_hand, js_hand);
	
	alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は'+ js_hand + 'です。\n結果は' + judge + 'です。');

}else if(user_hand == null){
	alert('またチャレンジしてね');

}else{
	alert('グー・チョキ・パーのいずれかを入力して下さい');
	user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

function getJShand(){
	var js_hand_num = Math.floor( Math.random()*3);

	if(js_hand_num == 0){
		js_hand = "グー";
	}else if(js_hand_num == 1){
		js_hand = "チョキ";
	}else if(js_hand_num == 2){
		js_hand = "パー";
	}
	return js_hand;
}

function winLose(user, js){
	var winLoseStr;

	if(user == "グー"){
		if(js == "グー"){
			winLoseStr = "あいこ";
		}else if(js == "チョキ"){
			winLoseStr = "勝ち";
		}else if(js == 'パー'){
			winLosestr = "負け";
		}
	}else if (user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}