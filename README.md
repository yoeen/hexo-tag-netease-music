# hexo-tag-netease-music
Embed netease music in Hexo

## Size of iframe widget:
width range: [260, 510]
height range：[190, 500]

## Size of flash widget:
small: {width:278, height: 32}
medium: {width:320, height: 66}

## Syntax:
{% nemusic $musicID $widget(flash|iframe) $auto(0|1) ([JSONsize]|(small|medium)) %}

### Example of iframe widget:
{% nemusic 251613 iframe 0 '{"width":320, "height":66}' %}

### Output:
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=320 height=86 src="http://music.163.com/outchain/player?type=2&id=251613&auto=0&height=66"></iframe>

### Example of flash widget:
{% nemusic 251613 flash 0 'medium' %}

### Output:
<embed src="http://music.163.com/style/swf/widget.swf?sid=251613&type=2&auto=0&width=320&height=66" width="340" height="86"  allowNetworking="all"></embed>