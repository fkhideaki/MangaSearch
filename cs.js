
function setLink(urlObjName, name, url)
{
	var urlObj = document.getElementById(urlObjName);
	urlObj.innerHTML = name;
	urlObj.href = url;
}

function setLinkT(name, w)
{
	var tex = document.getElementById(name);
	tex.innerHTML = w;
}

function setLinkG(urlObjName, url, w)
{
	var urlObj = document.getElementById(urlObjName);
	urlObj.innerHTML = w;
}

function createLinkT(word, mode)
{
	var s = "https://ec.toranoana.shop/tora/ec/app/catalog/list/";
	s += "?searchDisplay=0";
	s += "&searchBackorderFlg=1";
	s += "&searchWord=" + word;
	if (mode == 1)
		s += "&commodity_kind_name=同人誌";
	else if (mode == 2)
		s += "&commodity_kind_name=書籍";
	return s;
}

function createLinkM(word, mode)
{
	var s = "https://www.melonbooks.co.jp/search/search.php";
	s += "?mode=search";
	s += "&search_disp=";
	s += "&category_id=0";
	s += "&text_type=";
	s += "&text_type=all";
	s += "&name=" + word;
	if (mode == 1)
		s += "&category_ids%5B%5D=1";
	else if (mode == 2)
		s += "&category_ids%5B%5D=4";

	return s;
}

function createLinkA(word)
{
	var s = "https://www.animate-onlineshop.jp/products/list.php";
	s += "?mode=search";
	s += "&smt=" + word;
	return s;
}

function createLinkG(word)
{
	var s = "https://www.gamers.co.jp/products/list.php";
	s += "?mode=search";
	s += "&smt=" + word;
	return s;
}

function createLinkGG(word)
{
	var s = "https://www.google.co.jp/search";
	s += "?q=" + word;
	s += "&oq=" + word;
	s += "&ie=UTF-8";
	return s;
}

function updateLinks(w)
{
	setLinkT("wdcur", w);
	setLink("urlGG", "検索", createLinkGG(w), w);
	setLink("urlT", "検索", createLinkT(w, 0));
	setLink("urlTU", "同人", createLinkT(w, 1));
	setLink("urlTM", "漫画", createLinkT(w, 2));
	setLink("urlM", "検索", createLinkM(w, 0));
	setLink("urlMU", "同人", createLinkM(w, 1));
	setLink("urlMM", "漫画", createLinkM(w, 2));
	setLink("urlA", "検索", createLinkA(w));
	setLink("urlG", "検索", createLinkG(w));
}

function onCreate()
{
	var wt = document.getElementById("word");
	var w = wt.value;
	updateLinks(w);
}

window.onload = function()
{
	var re = new RegExp('.+serachWord=(.+)(\\b|\\&)');
	var ar = re.exec(location.href);
	if (ar === null)
		return;

	var wr = ar[1];
	var w = decodeURIComponent(wr);

	updateLinks(w);
	var wt = document.getElementById("word");
	wt.value = w;
}
