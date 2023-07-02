It's almost the same system that is used by [foobar2000](https://wiki.hydrogenaud.io/index.php?title=Foobar2000:Title_Formatting_Reference) and [Mp3tag](https://docs.mp3tag.de/scripting/). The basic idea is as following:

Variables are replaced by their corresponding values. If you're watching the third episode of [*Toradora!*](https://myanimelist.net/anime/4224/), `%title% - %episode%` will appear as `Toradora! - 3`.

Functions allow you to set conditions or modify things. Here's some examples:

- `$ifequal(%episode%,1,First episode!,Another episode!)` will output `First episode!` if you're watching the first episode of some series.
- `$substr($replace(Aisaka,s,b),2,4)` will output `baka`, replacing the `s` with a `b`, and then returning the first 4 characters starting from the 2nd one (zero-indexed).
- `#$replace(%title%, ,)` will output the anime title as a hashtag (e.g. `#OnePunchMan`).


Click the *Add...* button in the *Edit Format* dialog to see a list of available functions and variables.

Admittedly, these strings become pretty complicated once you start combining functions. If you have a better solution in mind that'd provide the same level of customizability, let us know.
