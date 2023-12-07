function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	two.value = two.value.replace(/\s+/g, "");
	three.value = three.value.replace(/\s+/g, "");
	four.value = four.value.replace(/\s+/g, "");
	
	
	if (one.value == "voidsetup()"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：void setup()";
	}

	if (two.value == "voiddraw()"){
		text2.innerHTML = "正解";
	}else{
		text2.innerHTML = "不正解　解答：void draw()";
	}

	if (three.value == "background(255);"){
		text3.innerHTML = "正解";
	}else{
		text3.innerHTML = "不正解　解答：background(255);";
	}

	if (four.value == "rect(mouseX,mouseY,30,30);"){
		text4.innerHTML = "正解";
	}else{
		text4.innerHTML = "不正解　解答：rect(mouseX, mouseY, 30, 30);";
	}

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

//解答欄２
var textBox2 = document.getElementById("two");
const text2 = document.getElementById("text2");

//解答欄3
var textBox3 = document.getElementById("three");
const text3 = document.getElementById("text3");

//解答欄4
var textBox4 = document.getElementById("four");
const text4 = document.getElementById("text4");

let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);