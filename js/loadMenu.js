$("#banner").load("banner.html");
$("nav.header").load("menu.html");

//установка текущего тэга li в основном меню
function setHeaderCurrentLi()
{
	let name = getBodyName();
	if (name == "")
		return;
	let li = getNavLiWhereIs("nav.header", name);
	setLiHere(li);
}

function setLeftNavCurrentLi()
{
	let name = getNavName();
	if (name == "")
		return;
	let li = getNavLiWhereIs("nav.left", name);
	setLiHere(li);
}

//возвращает текущий тег li из навигации
function getNavLiWhereIs(navSelector, text)
{
	if (navSelector.length == 0)
		return;
	let a = $(navSelector).find("a:contains('" + text + "')");
	return a.parent("li");
}

function setLiHere(li)
{
	li.addClass("here");
	let a = li.find("a");
	a.attr("onclick", "return false;")
}

function getBodyName()
{
	let bodyId = $("body").attr("id");
	return getBodyFromId(bodyId);
}

function getNavName()
{
	let bodyId = $("body").attr("id");
	return getGeneralInfoName(bodyId);
}

function getBodyFromId(id)
{
	let name = "";
	switch(id) {
		case "home":
			name = "Главная";
			break;
		case "generalInfo":
		case "structure":
		case "docs":
		case "education":
		case "educationStandarts":
			name = "Сведения об ОО";
			break;
	}
	return name;
}

function getGeneralInfoName(id)
{
	let name = "";
	switch(id) {
		case "generalInfo":
			name = "Основные сведения";
			break;
		case "structure":
			name = "Структура ОО";
			break;
		case "docs":
			name = "Документы";
			break;
		case "education":
			name = "Образование";
			break;
		case "educationStandarts":
			name = "Образовательные стандарты";
			break;
	}
	return name;
}