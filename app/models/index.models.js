var question = ["ดูดวง"];

var job = {
	title : "การงาน",
	desc : [
		"อุปสรรคทางด้านการงานยังพึงมี แต่เจ้าชะตาไม่เคยย่อท้อ มีการแก้ไขปัญหาเฉพาะหน้าต่าง ๆ ให้ผ่านพ้นไปได้อย่างเป็นโชค"
	]
}

var money = {
	title : "การเงิน",
	desc : [
		"ระมัดระวังการใช้เงิน และการใช้จ่ายในช่วงนี้ ไม่สามารถใช้เงินได้ตามใจตนเองเหมือนแต่ก่อน"
	]
}

var love = {
	title : "ความรัก",
	desc : [
		"จะพบคนเก่งที่มีความสามารถ เขาเป็นคนที่มีชื่อเสียงในแวดวงการของเขา เป็นคนที่เจ้าชะตาถูกใจเขามากทีเดียว"
	]
}

var secret = {
	title : "เคล็ดลับเสริมดวงประจำวันนี้",
	desc : [
		"สวมแหวนทองคำที่นิ้วนาง จะส่งผลทำให้เจ้าชะตาประสบความโชคดี"
	]
}

exports.findHoroscope = function(msg){
	var isQuestion = question.indexOf(msg);
	if(isQuestion != -1){
		return "เกิดวันอะไรครับ";
	}

	else "ทำนายไม่ได้...";
}