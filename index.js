var _d = {
    $widget: 'flash',
    $auto: '0',
    $size: {
        $flash: 'medium',
        $iframe: '{"width": 320, "height": 66}'
    }
};
var _fs = {
    small: {
        width: 278,
        height: 32
    },
    medium: {
        width: 320,
        height: 66
    }
};
/**
 * Netease cloud music tag
 *
 * Syntax:
 *   {% nemusic $musicID $widget(flash|iframe) $auto(0|1) ([JSONsize]|(small|medium)) %}
 */
hexo.extend.tag.register('nemusic', function(args) {
    var musicId = args[0];
    var widget = (['flash', 'iframe'].indexOf(args[1]) > 0) ? args[1] : _d.$widget;
    var auto = (['0', '1'].indexOf(args[2]) > 0) ? args[2] : _d.$auto;
    
    var html;
    if('flash'==widget) {
        var size = (['small', 'medium'].indexOf(args[3]) > 0) ? args[3] : _d.$size.$flash;
        size = _fs[size];
        html = '<embed src="http://music.163.com/style/swf/widget.swf?sid=' + musicId + '&type=2&auto=' + auto + '&width=' + size.width + '&height=' + size.height + '" width="' + (size.width + 20) + '" height="' + (size.height + 20) + '"  allowNetworking="all"></embed>';
    } else {
        var size = args[3] || _d.$size.$iframe;
        try {
            size = JSON.parse(size);
            size.width = parseInt(size.width);
            size.height = parseInt(size.height);
            if(isNaN(size.width) || isNaN(size.height) || size.width<260 || size.width>510 || size.height<190 ||size.height>500) throw new Error();
        } catch(e) {
            size = JSON.parse(_d.$size.$iframe);
        }
        html = '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=' + size.width + ' height=' + (size.height + 20) + ' src="http://music.163.com/outchain/player?type=2&id=' + musicId + '&auto=' + auto + '&height=' + size.height + '"></iframe>';
    }
    return '<div class="netease-music-container"><div class="netease-music-inner">' + html + '</div></div>';
});