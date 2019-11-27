// var previous = null;
var limit_const = 10;

$('#authors_names').on("click", 'li', function () {
    // if (previous != null){
    //     previous.css('text-decoration','none');
    //     previous = $(this);
    // }
    $('#authors_names li').css('text-decoration', 'none').removeClass('clicked');
    $(this).css('text-decoration', 'underline').addClass('clicked');
});

function getSources() {
    return ["source1", "source2", "source3"];
}

function getAuthors(limit, offset) {
    let result = [];
    for (i = 0; i < limit; i++) {
        result[i] = {
            id: i + offset + 1,
            name: 'Pavel' + (i + offset + 1)
        }
    }
    return result;
    // return [{
    //     id: 1,
    //     avatar: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg',
    //     name: "Dick",
    //     nickname: "Donut",
    //     userLabel: "male"
    // }, {
    //     id: 2,
    //     avatar: 'url2',
    //     name: "Nikolai",
    //     nickname: "DarkNick",
    //     userLabel: "male"
    // }, {
    //     id: 3,
    //     avatar: 'url3',
    //     name: "Pavel",
    //     nickname: "Monah",
    //     userLabel: ""
    // }];
}

function getAuthorPost() {
    return [{
        id: 35,
        value: 'text1'
    }, {
        id: 36,
        value: 'text2'
    }, {
        id: 37,
        value: 'text3'
    }];
}

function fillSources() {
    var options = getSources();
    var select = document.getElementById("sources");
    // select.innerHTML = "<option";
    for (let i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.onchange = function () {
            for (var i = 1; i < select.options.length; i++) {
                let option = select.options[i];
                if (option.selected) {
                    var arrAuthors = getAuthors(limit_const, 0);
                    fillAuthor(arrAuthors, -1, true);
                }
            }
            // select.innerHTML = "";// Optional: Clear all existing options first:
            // var arrAuthors = getAuthors(limit_const, 0);
            // fillAuthor(arrAuthors, -1);
            // alert('hello');
        };
        select.appendChild(el);
    }
}

fillSources();

// var authorListScroll = document.querySelector("authors_names");
// authorListScroll.addEventListener('scroll', function (e) {
//     // var target = e.target;
//     var target=document.querySelector("authors_names");
//     if (target.scrollHeight - target.scrollTop < 400) {
//         let num = target.lastChild.id;
//         var arrAuthors = getAuthors(limit_const, num);
//         fillAuthor(arrAuthors, num, false);
//     }
// });

// var arrAuthors = getAuthors();
// fillAuthor(arrAuthors);

function fillAuthor(arrAuthors, lastNum, clear) {
    // var arrAuthors = getAuthors();
    var ulAuthor = document.getElementById("authors_names");
    if (clear) {
        ulAuthor.innerHTML = "";
    }
    for (let i = 0; i < arrAuthors.length; i++) {
        let picture = arrAuthors[i].avatar;
        let name = arrAuthors[i].name;
        let nick = arrAuthors[i].nickname;
        let gender = arrAuthors[i].userLabel;
        let userId = arrAuthors[i].id;

        let elem = document.createElement("li");
        elem.id = lastNum + 1 + i;

        elem.innerHTML =
            "<div class=\"imgWrapper\">" +
            "<img src=\"" + picture + "\" alt=\"No picture\">" +
            "</div>" +
            "<div class=\"authorInfoWrapper\">" +
            "<div class=\"name\">" + name + "</div>" +
            "<div class=\"nickname\">" + nick + "</div>" +
            "<div class=\"label\"" + " id=\"" + userId + "\">" + gender + "</div>" +
            "</div>";
        elem.onclick = fillAuthorPost();
        ulAuthor.appendChild(elem);
    }
}

function fillAuthorPost() {
    var arrAuthorPost = getAuthorPost();
    var ulAuthorPost = document.getElementById("authors_texts");
    ulAuthorPost.innerHTML = "";
    for (var i = 0; i < arrAuthorPost.length; i++) {
        let authorPostId = arrAuthorPost[i].id;
        let authorPost = arrAuthorPost[i].value;
        let elem = document.createElement("li");
        elem.textContent = authorPost;
        ulAuthorPost.appendChild(elem);
    }
}

//replace gender
var chooseSelectGender = document.getElementById("gender");
chooseSelectGender.onchange = function () {
    for (var i = 0; i < chooseSelectGender.options.length; i++) {
        var option = chooseSelectGender.options[i];
        if (option.selected) {
            let selectedAuthorGenderElem = document.querySelector(".clicked .label");
            selectedAuthorGenderElem.textContent = option.text;
            selectedAuthorGenderElem.style.color = "red";
            document.querySelector(".clicked .label").className += " changed";
        }
    }
};

var ok = document.getElementById("submit");
ok.onclick = function () {
    var authorIdGender = {};
    var changed = document.getElementsByClassName("label changed");
    for (var i = 0; i < changed.length; i++) {
        authorIdGender[changed[i].id] = changed[i].textContent;
        // api.labelAuthor(changed[i].id, userId, changed[i].textContent);
    }
};

function loader() {
    var target = document.getElementById('authors_names');
    var num = target.lastChild.id;
    var arrAuthors = getAuthors(limit_const, num);
    fillAuthor(arrAuthors, num, false);
    // alert('hi');
}


$(".authors ul").on("scroll", scrolling);

function scrolling() {
    var currentHeight = $(this).children(".authors ul li").height();
    if ($(this).scrollTop() >= (currentHeight - $(this).height() - 500)) {
        $(this).unbind("scroll");
        loader();
        $(this).bind("scroll");
        $(".authors ul").on("scroll", scrolling);
    }
}


// var select = document.getElementById("selectNumber");
// var options = ["1", "2", "3", "4", "5"];
//
// // Optional: Clear all existing options first:
// select.innerHTML = "";
// // Populate list with options:
// for(var i = 0; i < options.length; i++) {
//     var opt = options[i];
//     select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
// }