chrome.runtime.onMessage.addListener(messAge);
function messAge(message,sender,sendresponse)
{
	console.log(message.txt);
	let paragraphs = document.getElementsByTagName("p");
	for(elt of paragraphs)
	{
		elt.style['background-color'] = '#9900cc';
	}
}