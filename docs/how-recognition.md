The process consists of two distinct operations: Media detection and filename identification.

First of all, Taiga checks all windows to see if there are any media players (or web browsers) running, with help from [Anisthesia](https://github.com/erengy/anisthesia). When it finds one, it goes on to use various methods to retrieve the filename of the video (for web browsers, it's the page title).

This is where [Anitomy](https://github.com/erengy/anitomy) comes in. This piece of software, designed specifically for Taiga and similar applications, is able to parse anime video filenames and extract their elements. It uses advanced techniques, rather than simply applying regular expressions or ignoring everything inside brackets.

Here's an example filename: `[TaigaSubs]_Toradora!_-_01_[720p].mkv`

And here's what Taiga sees:

- Release group: `TaigaSubs`
- Anime title: `Toradora!`
- Episode number: `01`
- Video resolution: `720p`
- File extension: `mkv`

Once Taiga has this information, it goes on to look up the anime title (in this case, `Toradora!`) in its database. This database consists of all the titles the active service provides (e.g. Romaji titles, English titles, synonyms) for your anime list, as well as cached search results. Taiga does lots of smart things so that it doesn't trip over capitalization, punctuation and different numbering schemes. If available, Taiga looks up the name of the parent directory too, so that it's able to identify something like `X:\Anime\Toradora!\01 - Tiger and Dragon.mkv`.

When Taiga finds a single exact match (e.g. `Toradora!` → [*Toradora!*](https://myanimelist.net/anime/4224/)), it's done. This is what happens most of the time. When there are multiple matches that are equally likely, or when there are no direct matches, recognition fails. In these cases, Taiga displays a list of similar titles on the Now Playing page. You can click on a title to add the current title as an alternative title for that anime, after which it will be recognized. In other cases, you may need to manually add alternative titles via the Anime Information dialog. This is the primary method for resolving recognition issues.

Note that when you scan your library folders for available episodes or check your RSS feed for new releases, the process works just the same. Taiga parses each filename and tries to identify them.
