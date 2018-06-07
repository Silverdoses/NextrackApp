function setPanelData(items) {
  console.log(items);
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
    '          <div class="item-title">{{name}}</div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <div class="swipeout-actions-left">\n' +
    '        <a href="#" class="color-green alert-reply">Ruta</a>\n' +
    '        <a href="#" class="color-blue alert-forward">Seguimiento</a>\n' +
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
