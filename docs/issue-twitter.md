Spamming every watched episode to Twitter can annoy your followers, which is why the default format string is set up to work only when you watch the first or the last episode of a series. To change this behavior, you can use one of the following strings instead:

<pre>Just watched: %title% #%episode% %animeurl%</pre>
<pre>Just watched: %title% #%episode%/%total% %animeurl%</pre>
<pre>Just watched: %title% #%episode%$if(%total%,/%total%) %animeurl%</pre>
<pre>Just watched: %title% #%episode%$if(%total%,/%total%)$if(%score%, (Score: %score%)) %animeurl%</pre>
<pre>$ifequal(%episode%,%total%,Just completed: %title%,Just watched: %title% #%episode%$if(%total%,/%total%))$if(%score%, (Score: %score%)) %animeurl%</pre>
