//your code here!

let itemcount = 1

function itemlist(count) {
	const list =document.getElementById("infi-list");
	for(i=0;i<count;i++){
		const li = document.createElement("li");
		     li.textContent = `list item ${itemcount}`
		itemcount++
		list.appendChild(li)
	}
}

function scroll(){
	const list =document.getElementById("infi-list");
	list.scrollTop + list.clientHeight >= list.scrollHeight - 1
	itemlist(2)
}

itemlist(10)

document.getElementById("infi-list").addEventListener("scroll",scroll)