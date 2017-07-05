var question = ["ดูดวง", "ใช่", "ต้องการ"];
var day = [
	{
		id : 1,
		text : ["จันทร์"]
	},
	{
		id : 2,
		text : ["อังคาร"]
	},
	{
		id : 3,
		text : ["พุธ"]
	},
	{
		id : 4,
		text : ["พฤหัสบดี", "พฤหัส"]
	},
	{
		id : 5,
		text : ["ศุกร์"]
	},
	{
		id : 6,
		text : ["เสาร์"]
	},
	{
		id : 7,
		text : ["อาทิตย์"]
	}
]

var job = {
	title : "การงาน",
	desc : [
		"อุปสรรคทางด้านการงานยังพึงมี แต่เจ้าชะตาไม่เคยย่อท้อ มีการแก้ไขปัญหาเฉพาะหน้าต่าง ๆ ให้ผ่านพ้นไปได้อย่างเป็นโชค",
		"จะเกิดอุปสรรคบางอย่าง และส่งผลทำให้เกิดความไม่ชัดเจน ซึ่งจะทำให้เจ้าชะตาต้องปฏิเสธการงานบางอย่างออกไป เพื่อที่จะมุ่งเน้นการงานหลักที่ต้องสร้างผลงานหลักให้ดีก่อน",
		"มีโอกาสเปลี่ยนแปลงเกี่ยวกับเรื่องการงานที่เจ้าชะตาจะต้องพบเจอ ควรมีที่ปรึกษาที่ดีช่วยตัดสินใจในเรื่องการงานที่ก่อให้เกิดโชค",
		"ความเฉลียวฉลาดในการเจรจาต่อรองต่าง ๆ จะทำให้ประสบโชค และผลสำเร็จอยู่ในเกณฑ์ที่ดี มีบริวารที่ดีให้ความช่วยเหลือเจ้าชะตาอย่างเป็นโชค",
		"จะทำงานสิ่งใดในช่วงนี้จะประสบความสำเร็จ แต่ต้องพบเจอสภาวะความกดดันต่าง ๆ ที่ต้องคอยแก้ไขปัญหาให้ผ่านพ้นไปให้ได้",
		"พบอุปสรรคทางด้านการงานต่อการเปลี่ยนแปลงต่าง ๆ ในช่วงนี้ที่เจ้าชะตาต้องคอยแก้ไขปัญหาเฉพาะหน้าให้ผ่านพ้นไปให้ได้",
		"ช่วงนี้ต้องวางแผนการลงทุนอย่างรอบคอบ คุ้มค่ากับการลงทุนหรือไม่ และไม่ควรตัดสินใจเร่งด่วน เพราะจะก่อให้เกิดความผิดพลาด"
	]
}

var money = {
	title : "การเงิน",
	desc : [
		"ระมัดระวังการใช้เงิน และการใช้จ่ายในช่วงนี้ ไม่สามารถใช้เงินได้ตามใจตนเองเหมือนแต่ก่อน",
		"มีทั้งรับทั้งจ่ายสลับปรับเปลี่ยนกันไปในช่วงนี้ วางแผนการใช้จ่ายให้รอบคอบ และรัดกุม",
		"มีโชคจะได้เงินเข้ามาเพิ่มเติม เพิ่มขึ้นในช่วงนี้ มีเรื่องที่ต้องจ่ายออกไป แต่ก็จะหาเข้ามาได้อย่างรวดเร็ว",
		"มีโชคจะได้เงินเข้ามาเพิ่มเติมอย่างต่อเนื่อง ดวงชะตาอยู่ในเกณฑ์ที่ดีมากในช่วงนี้",
		"มีโชคจะได้เงินเข้ามาอย่างต่อเนื่องในช่วงนี้ จะพบความกดดันบ้าง แต่ก็จะได้เงินเข้ามาเพิ่มเติมเพิ่มขึ้นก็เป็นไปได้",
		"ยังอยู่ในเกณฑ์ทรงตัวในช่วงนี้ ไม่มีปัญหาใด ๆ มีพอใช้จ่ายเรื่อย ๆ ไม่เดือดร้อน",
		"ช่วงนี้เรื่องการเงินยังไม่โดดเด่นมากนัก ให้วางแผนการใช้จ่าย และการใช้เงินให้รอบคอบที่สุด"
	]
}

var love = {
	title : "ความรัก",
	desc : [
		"จะพบคนเก่งที่มีความสามารถ เขาเป็นคนที่มีชื่อเสียงในแวดวงการของเขา เป็นคนที่เจ้าชะตาถูกใจเขามากทีเดียว",
		"ยังไม่ลงตัวทางด้านความรักในช่วงนี้ เพราะเจ้าชะตามีโอกาสเดินทางบ่อย จึงส่งผลทำให้ความสัมพันธ์ไม่ต่อเนื่องนั่นเอง",
		"ยังพินิจพิจารณาในเรื่องเหล่านี้อยู่ แต่ก็ยังไม่ได้ตัดสินใจ เพราะในเรื่องของระยะทาง และเวลาที่ยังไม่ลงตัวที่จะส่งผลในการสร้างความสัมพันธ์ที่ดีต่อกัน",
		"สุขสมหวังลงตัวในเรื่องความรัก มีโอกาสสร้างความใกล้ชิดกับคนรักเป็นรักของเจ้าชะตาเป็นอย่างมากในช่วงนี้",
		"สุขสมหวัง และลงตัวกับการได้พบคนเก่ง มีความสามารถอยู่ในเกณฑ์เนื้อคู่",
		"ยังดู ๆ อยู่มากกว่า ยังไม่ตัดสินใจในเรื่องความรัก แต่ก็ตอบได้ว่าสนใจใครเป็นพิเศษ",
		"ยังไม่มีเวลาทุ่มเทในเรื่องความรัก เพราะช่วงนี้เจ้าชะตามุ่งมั่นเกี่ยวกับเรื่องของเป้าหมายในการดำเนินชีวิตทางด้านอื่นมากกว่า"
	]
}

var secret = {
	title : "เคล็ดลับเสริมดวงประจำวันนี้",
	desc : [
		"สวมแหวนทองคำที่นิ้วนาง จะส่งผลทำให้เจ้าชะตาประสบความโชคดี",
		"ร่วมกันบริจาคปัจจัยในการพิมพ์หนังสือสวดมนต์ หรือหนังสือธรรมะ เพื่อแจก จะทำให้ได้อานิสงส์ผลบุญเป็นอย่างมาก",
		"ทำบุญถวายผ้าไตรแด่พระภิกษุสงฆ์ จะได้อานิสงส์ผลบุญ ส่งผลต่อความเจริญรุ่งเรือง",
		"ไม่เดินทางไปในที่อโคจร จะทำให้เจ้าชะตาแคล้วคลาดปลอดภัย และโชคดี",
		"ถวายน้ำดื่ม หรือเครื่องกรองน้ำดื่มให้กับวัด โรงเรียน จะทำให้ได้อานิสงส์ผลบุญ ส่งผลต่อความเจริญรุ่งเรือง",
		"ถวายน้ำดื่ม และปัจจัยต่าง ๆ ในการทำสังฆทาน จะทำให้ได้บุญมาก และก่อให้เกิดความโชคดี",
		"เดินทางไปกราบไหว้หลวงพ่อโสธร จะทำให้ได้รับพรที่ดี ก่อให้เกิดความเป็นสิริมงคลกับชีวิต"
	]
}

exports.findHoroscope = function(msg){
	// check need horo
	var isQuestion = question.indexOf(msg);
	if(isQuestion != -1){
		return {
			type: 'text',
			text: "เกิดวันอะไรครับ(จันทร์-ศุกร์)"
		};
	}

	// check day for horo
	for(kDay in day){
		var dayMain = day[kDay];
		var isDay = dayMain.text.indexOf(msg);
		if(isDay != -1){
			var echo = 'ดวงรายวันสำหรับท่านที่เกิดวัน' + dayMain.text[0];

			// echo horo
			echo += '\n\n' + job.title + ': ' + job.desc[kDay];
			echo += '\n\n' + money.title + ': ' + money.desc[kDay];
			echo += '\n\n' + love.title + ': ' + love.desc[kDay];
			echo += '\n\n' + secret.title + ': ' + secret.desc[kDay];

			return {
				type: 'text',
				text: echo
			}
		}
	}

	// unknow
	return {
		type: 'text',
		text: "ทำนายไม่ได้... \n\n ต้องการดูดวงไหม..."
	};
}