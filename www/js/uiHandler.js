function setPanelData() {
  // Dummy items array
  var items = [];
  for (var i = 1; i <= 10; i++) {
    items.push({
      title: 'Item ' + i,
      subtitle: 'Subtitle ' + i
    });
  }

  var virtualList = app.virtualList.create({
    // List Element
    el: '.virtual-list',
    // Pass array with items
    items: items,
    // List item Template7 template
    itemTemplate:
    '<div class="list">\n' +
    '  <ul>\n' +
    '    <li class="swipeout">\n' +
    '      <div class="item-content swipeout-content">\n' +
    '        <div class="item-inner">\n' +
    '          <div class="item-title">Swipe right on me please</div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="swipeout-actions-left">\n' +
    '        <a href="#" class="color-green alert-reply">Reply</a>\n' +
    '        <a href="#" class="color-blue alert-forward">Forward</a>\n' +
    '      </div>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>'
    ,
    // Item height
    height: app.theme === 'ios' ? 63 : 73,
  });

  $$('.virtual-list').on('click', '.alert-reply', function () {
    app.dialog.alert('Done!');
  });

  $$('.virtual-list').on('click', '.alert-forward', function () {
    app.dialog.alert('Done!');
  });

  return virtualList;

}



