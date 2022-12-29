function generateWidget(type, href, imageUrl, appName, title, tags, description) {
    var widget = document.createElement("a");
    widget.classList.add("widget");
    widget.classList.add(type);
    widget.href = href;

    var thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    var img = document.createElement("div");
    img.classList.add("image");
    img.style.backgroundImage = "url(" + imageUrl + ")";
    thumbnail.appendChild(img);
    if (appName != null) {
        var _appName = document.createElement("h1");
        _appName.classList.add("app-name");
        _appName.innerHTML = appName;
        thumbnail.appendChild(_appName);
    }
    widget.appendChild(thumbnail);

    var content = document.createElement("div");
    content.classList.add("content");
    var _title = document.createElement("h2");
    _title.classList.add("title");
    _title.innerHTML = title;
    content.appendChild(_title);
    if (tags != null) {
        var _tags = document.createElement("ul");
        _tags.classList.add("tags");
        for (var i = 0; i < tags.length; i++) {
            var tag = document.createElement("li");
            tag.innerHTML = tags[i];
            _tags.appendChild(tag);
        }
        content.appendChild(_tags);
    }
    var _description = document.createElement("p");
    _description.classList.add("description");
    _description.innerHTML = description;
    content.appendChild(_description);
    widget.appendChild(content);

    return widget;
}

function generateWidgetTable(widgets) {
    var table = document.createElement("div");
    table.classList.add("widget-table");
    for (var i = 0; i < widgets.length; i++)
        table.appendChild(widgets[i]);
    return table;
}