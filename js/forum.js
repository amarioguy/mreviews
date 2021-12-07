var comment0 = document.getElementById("0");
var comment1 = document.getElementById("1");
var comment2 = document.getElementById("2");
var submitButton = document.getElementById("submit");
comment0.onclick=function(){deleteText(comment0)};
comment1.onclick=function(){deleteText(comment1)};
comment2.onclick=function(){deleteText(comment2)};
submitButton.onclick = function(){submitText()};



function submitText(){
    var text = document.getElementById("forumText");
    var postList = document.getElementById("posts");
    if(text.value.length>=1){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(text.value));
        var newButton = document.createElement("button");
        newButton.innerHTML = "Delete";
        if(isEmpty(postList)){
            newButton.id="0";
        }
        else{
            newButton.id = (parseInt(postList.lastElementChild.lastElementChild.id) + 1) + ""
        }
        newButton.onclick = function(){deleteText(newButton)};
        li.appendChild(newButton);
        postList.appendChild(li);
        text.value="";
    }
}

function deleteText(button){
        var li = button.parentElement;
        li.remove();
}

function isEmpty(lst){
    return lst.innerHTML.trim() ==""
}