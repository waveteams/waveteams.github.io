function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function captcha(grant, deny) {
	var phrases = ["Выйди ... розбiйник!", "Выйдите ...", "А.....скую - exit."]
	var answers = ["Выйди отсюда розбiйник!", "Выйдите отсюда", "Английскую - exit."]

	var n = getRandomInt(0, 2)
	i = prompt("Вместо ... введи пропущенное слово или букву", phrases[n])

	if(i == answers[n]) {
		if (grant == "@") {
			alert("Успех!")
		} else {
			location.href = grant
		}
	} else {
		if (deny == "@") {
			alert("Вы не разгадали капчу!")
		} else {
			location.href = deny
		}
	}
}