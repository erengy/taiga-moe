//  _____    ___    _    ___     ___
// |_   _|  / _ \  | |  / __\   / _ \
//   | |   | |_| | | | | |     | |_| |
//   | |   |  _  | | | | |  _  |  _  |
//   | |   | | | | | | | | | | | | | |
//   | |   | | | | | | | \_/ | | | | |
//   |_|   |_| |_| |_|  \___/  |_| |_|
//
//  ----- Hello, visitor!  =^.^= -----

var api_data = {
  "services": [
    /**
    {
      "name": "Taiga",
      "canonical": "taiga"
    },
    /**/
    {
      "name": "AniList",
      "canonical": "anilist"
    },
    /**
    {
      "name": "Herro",
      "canonical": "herro"
    },
    /**/
    /**{
      "name": "Hummingbird v1",
      "canonical": "hummingbird-v1"
    },
    /**/
    /**
    {
      "name": "Hummingbird v2",
      "canonical": "hummingbird-v2"
    },
    /**/
    {
      "name": "Kitsu",
      "canonical": "kitsu"
    },
    {
      "name": "MyAnimeList",
      "canonical": "myanimelist"
    }
  ],
  "tables": [
    {
      "id": "table-api-details",
      "type": "string",
      "table": [
        {
          "name": "Protocol",
          "anilist": "HTTPS",
          "herro": "HTTP",
          "hummingbird-v1": "HTTP/HTTPS",
          "hummingbird-v2": "HTTPS",
          "kitsu": "HTTPS",
          "myanimelist": "HTTPS"
        },
        {
          "name": "Data exchange format",
          "anilist": "GraphQL",
          "herro": "JSON",
          "hummingbird-v1": {
            "text": "JSON",
            "note": "1"
          },
          "hummingbird-v2": {
            "text": "JSON",
            "note": "1"
          },
          "kitsu": {
            "text": "JSON API",
            "note": "1"
          },
          "myanimelist": {
            "text": "XML",
            "note": "1"
          }
        },
        /*{
          "name": "Authentication",
          "hummingbird-v1": "Basic",
          "kitsu": "OAuth 2.0",
          "myanimelist": "Basic"
        },*/
        {
          "name": "gzip support",
          "anilist": "Yes",
          "herro": {
            "text": "",
            "note": "?"
          },
          "hummingbird-v1": "Yes",
          "hummingbird-v2": "Yes",
          "kitsu": "No",
          "myanimelist": {
            "text": "Partial",
            "note": "2"
          }
        },
        {
          "name": "Unique identifiers",
          "anilist": "Integer",
          "herro": {
            "text": "String",
            "note": "4"
          },
          "hummingbird-v1": {
            "text": "Integer/String",
            "note": "3"
          },
          "hummingbird-v2": {
            "text": "Integer/String",
            "note": "3"
          },
          "kitsu": {
            "text": "Integer/String",
            "note": "3"
          },
          "myanimelist": "Integer"
        }
      ],
      "notes": [
        "May return undocumented HTML responses on errors.",
        "Only malappinfo.php supports gzip compression.",
        "Supports lookups by numeric IDs or slugs. Note that slugs may change over time.",
        /*
        "Each anime ID is a 24-character hexadecimal string, probably in the same format as the <a href=\"http://docs.mongodb.org/manual/reference/object-id/\">ObjectId</a> type of MongoDB."
        */
      ]
    },
    {
      "id": "table-api-methods",
      "type": "feature-list",
      "table": [
        {
          "name": "Verify credentials",
          "anilist": true,
          "herro": false,
          "hummingbird-v1": true,
          "hummingbird-v2": false,
          "kitsu": true,
          "myanimelist": true
        },
        {
          "name": "Add library entry",
          "anilist": true,
          "herro": true,
          "hummingbird-v1": true,
          "hummingbird-v2": false,
          "kitsu": true,
          "myanimelist": true
        },
        {
          "name": "Delete library entry",
          "anilist": true,
          "herro": true,
          "hummingbird-v1": true,
          "hummingbird-v2": false,
          "kitsu": true,
          "myanimelist": true
        },
        {
          "name": "Update library entry",
          "anilist": true,
          "herro": true,
          "hummingbird-v1": true,
          "hummingbird-v2": false,
          "kitsu": true,
          "myanimelist": true
        },
        {
          "name": "Search title",
          "anilist": true,
          "herro": {
            "text": true,
            "note": "&nbsp;2"
          },
          "hummingbird-v1": {
            "text": true,
            "note": "&nbsp;1"
          },
          "hummingbird-v2": false,
          "kitsu": {
            "text": true,
            "note": "&nbsp;1"
          },
          "myanimelist": {
            "text": true,
            "note": "&nbsp;1"
          }
        },
        {
          "name": "Get metadata by ID",
          "anilist": true,
          "herro": true,
          "hummingbird-v1": true,
          "hummingbird-v2": true,
          "kitsu": true,
          "myanimelist": false
        },
        {
          "name": "Get all library entries",
          "anilist": true,
          "herro": true,
          "hummingbird-v1": true,
          "hummingbird-v2": false,
          "kitsu": true,
          "myanimelist": {
            "text": true,
            "note": "&nbsp;2"
          }
        },
        {
          "name": "Get all database entries",
          "anilist": true,
          "herro": {
            "text": true,
            "note": "&nbsp;2"
          },
          "hummingbird-v1": false,
          "hummingbird-v2": false,
          "kitsu": true,
          "myanimelist": false
        },
        {
          "name": "Get recommendations",
          "anilist": false,
          "herro": true,
          "hummingbird-v1": false,
          "hummingbird-v2": false,
          "kitsu": false,
          "myanimelist": false
        }
      ],
      "notes": [
        "Limited to 20 results for Hummingbird, 20 results per page for Kitsu, 50 results for MyAnimeList.",
        "This method is undocumented.",
      ]
    },
    {
      "id": "table-api-metadata",
      "type": "string",
      "table": [
        {
          "name": "Unique identifier",
          "taiga": "id",
          "anilist": "id",
          "herro": "_id",
          "hummingbird-v1": "id, anime_id",
          "hummingbird-v2": "id",
          "kitsu": "id",
          "myanimelist": "id, series_animedb_id"
        },
        {
          "name": "Slug",
          "taiga": null,
          "herro": "slug",
          "hummingbird-v1": "slug",
          "hummingbird-v2": "slug",
          "kitsu": "slug"
        },
        {
          "name": "Anime page URL",
          "taiga": "resource",
          "hummingbird-v1": "url"
        },
        {
          "name": "Poster image URL",
          "taiga": "resource",
          "anilist": "coverImage",
          "herro": "image_url",
          "hummingbird-v1": "cover_image",
          "hummingbird-v2": "poster_image",
          "kitsu": "posterImage",
          "myanimelist": "image, series_image"
        },
        {
          "name": "Cover image URL",
          "taiga": "resource",
          "anilist": "bannerImage",
          "hummingbird-v1": "",
          "hummingbird-v2": "cover_image",
          "kitsu": "coverImage",
          "myanimelist": ""
        },
        /**
        {
          "name": "Screencap URLs",
          "taiga": "resource",
          "hummingbird-v2": "screencaps",
        },
        /**/
        {
          "name": "Title (romaji)",
          "taiga": "title",
          "anilist": "title/romaji",
          "herro": "title, series_title",
          "hummingbird-v1": "title",
          "hummingbird-v2": "romaji",
          "kitsu": "titles/en_jp",
          "myanimelist": "title, series_title"
        },
        {
          "name": "Title (en)",
          "taiga": "alternative",
          "anilist": "title/english",
          "herro": "title_english",
          "hummingbird-v1": "alternate_title",
          "hummingbird-v2": "english",
          "kitsu": "titles/en",
          "myanimelist": "english"
        },
        {
          "name": "Title (ja)",
          "taiga": "alternative",
          "anilist": "title/native",
          "herro": "title_japanese",
          "hummingbird-v1": "",
          "hummingbird-v2": "japanese",
          "kitsu": "titles/ja_jp",
          "myanimelist": ""
        },
        {
          "name": "Alternative titles",
          "taiga": "alternative",
          "anilist": "synonyms",
          "herro": "title_aka",
          "hummingbird-v1": "",
          "hummingbird-v2": "",
          "kitsu": "abbreviatedTitles",
          "myanimelist": "synonyms, series_synonyms"
        },
        {
          "name": "Description",
          "taiga": "description",
          "anilist": "description",
          "herro": "plot",
          "hummingbird-v1": "synopsis",
          "hummingbird-v2": "synopsis",
          "kitsu": "synopsis",
          "myanimelist": "synopsis"
        },
        {
          "name": "Episode count",
          "taiga": "extent",
          "anilist": "episodes",
          "herro": "episodes_total, series_total",
          "hummingbird-v1": "episode_count",
          "hummingbird-v2": "episode_count",
          "kitsu": "episodeCount",
          "myanimelist": "episodes, series_episodes"
        },
        {
          "name": "Episode length",
          "taiga": "extent",
          "anilist": "duration",
          "herro": "episodes_length",
          "hummingbird-v1": "episode_length",
          "hummingbird-v2": "episode_length",
          "kitsu": "episodeLength",
          "myanimelist": ""
        },
        {
          "name": "Airing status",
          "taiga": "status",
          "anilist": "status",
          "herro": "series_status",
          "hummingbird-v1": "status",
          "kitsu": "status",
          "myanimelist": "status, series_status"
        },
        {
          "name": "Date started airing",
          "taiga": "date",
          "anilist": "startDate",
          "herro": "series_start",
          "hummingbird-v1": "started_airing",
          "hummingbird-v2": "started_airing_date",
          "kitsu": "startDate",
          "myanimelist": "start_date, series_start"
        },
        {
          "name": "Date finished airing",
          "taiga": "date",
          "anilist": "endDate",
          "herro": "series_end",
          "hummingbird-v1": "finished_airing",
          "hummingbird-v2": "finished_airing_date",
          "kitsu": "endDate",
          "myanimelist": "end_date, series_end"
        },
        {
          "name": "Type",
          "taiga": "type",
          "anilist": "type",
          "herro": "series_type",
          "hummingbird-v1": "show_type",
          "hummingbird-v2": "show_type",
          "kitsu": "subtype",
          "myanimelist": "type, series_type"
        },
        {
          "name": "Age rating",
          "taiga": "audience",
          "anilist": "isAdult",
          "herro": "",
          "hummingbird-v1": "age_rating",
          "hummingbird-v2": "age_rating",
          "kitsu": "ageRating, ageRatingGuide, nsfw",
          "myanimelist": ""
        },
        {
          "name": "Genres",
          "taiga": "subject",
          "anilist": "genres",
          "herro": "genres",
          "hummingbird-v1": "genres",
          "hummingbird-v2": "genres",
          "kitsu": "genres",
          "myanimelist": {
            "text": "genres",
            "note": "1",
            "required": true
          }
        },
        {
          "name": "Producers",
          "taiga": "creator",
          "anilist": "studios",
          "herro": "series_producers",
          "hummingbird-v1": "",
          "hummingbird-v2": "",
          "kitsu": "producers",
          "myanimelist": ""
        },
        {
          "name": "Characters",
          "taiga": "",
          "anilist": "characters",
          "herro": "characters",
          "hummingbird-v1": "",
          "hummingbird-v2": "",
          "kitsu": "characters",
          "myanimelist": ""
        },
        {
          "name": "Average user rating",
          "taiga": "",
          "anilist": "averageScore, meanScore",
          "herro": "",
          "hummingbird-v1": "community_rating",
          "hummingbird-v2": "community_rating, bayesian_rating",
          "kitsu": "averageRating, ratingFrequencies",
          "myanimelist": {
            "text": "score",
            "note": "1",
            "required": true
          }
        }
      ],
      "notes": [
        "Available through an undocumented non-API call, which is at least better than scraping the anime page."
      ]
    },
    {
      "id": "table-api-library",
      "type": "string",
      "table": [
        {
          "name": "Unique identifier",
          "taiga": null,
          "anilist": "id",
          "hummingbird-v1": "id",
          "kitsu": "id",
          "myanimelist": {
            "text": "my_id",
            "note": "1"
          }
        },
        {
          "name": "Watching status",
          "taiga": "status",
          "anilist": "status",
          "herro": "status, list_status",
          "hummingbird-v1": "status",
          "kitsu": "status",
          "myanimelist": "status, my_status"
        },
        {
          "name": "Last watched episode",
          "taiga": "progress",
          "anilist": "progress",
          "herro": "progress, list_progress",
          "hummingbird-v1": "episodes_watched",
          "kitsu": "progress",
          "myanimelist": "episode, my_watched_episodes"
        },
        {
          "name": "Increment watched episodes",
          "taiga": null,
          "hummingbird-v1": "increment_episodes"
        },
        {
          "name": "Rewatching status",
          "taiga": "progress",
          "anilist": "status",
          "herro": "",
          "hummingbird-v1": "rewatching",
          "kitsu": "reconsuming",
          "myanimelist": "enable_rewatching, my_rewatching"
        },
        {
          "name": "Last rewatched episode",
          "taiga": null,
          "myanimelist": "my_rewatching_ep"
        },
        {
          "name": "Rewatch value",
          "taiga": null,
          "myanimelist": {
            "text": "rewatch_value",
            "note": "2",
            "required": false
          }
        },
        {
          "name": "Times rewatched",
          "taiga": "progress",
          "anilist": "repeat",
          "herro": "",
          "hummingbird-v1": "rewatched_times",
          "kitsu": "reconsumeCount",
          "myanimelist": "times_rewatched"
        },
        {
          "name": "Date started watching",
          "taiga": "date",
          "anilist": "startedAt",
          "herro": "",
          "hummingbird-v1": "",
          "kitsu": "startedAt",
          "myanimelist": "date_start, my_start_date"
        },
        {
          "name": "Date finished watching",
          "taiga": "date",
          "anilist": "completedAt",
          "herro": "",
          "hummingbird-v1": "",
          "kitsu": "finishedAt",
          "myanimelist": "date_finish, my_finish_date"
        },
        {
          "name": "Last library update",
          "taiga": "modified",
          "anilist": "updatedAt",
          "herro": "",
          "hummingbird-v1": "last_watched, updated_at",
          "kitsu": "updatedAt",
          "myanimelist": "my_last_updated"
        },
        {
          "name": "Rating",
          "taiga": "",
          "anilist": "score",
          "herro": "score, list_score",
          "hummingbird-v1": "rating, sane_rating_update",
          "kitsu": "rating",
          "myanimelist": "score, my_score"
        },
        {
          "name": "Tags",
          "taiga": "subject",
          "herro": "",
          "hummingbird-v1": "",
          "kitsu": "",
          "myanimelist": "tags, my_tags"
        },
        {
          "name": "Personal notes",
          "taiga": "",
          "anilist": "notes",
          "herro": "",
          "hummingbird-v1": "notes, notes_present",
          "kitsu": "notes",
          "myanimelist": {
            "text": "comments",
            "note": "2",
            "required": true
          }
        },
        {
          "name": "Privacy",
          "taiga": "",
          "anilist": "private",
          "herro": "",
          "hummingbird-v1": "private, privacy",
          "kitsu": "private",
          "myanimelist": ""
        },
        {
          "name": "Priority",
          "taiga": "",
          "anilist": "priority",
          "herro": "",
          "hummingbird-v1": "",
          "kitsu": "",
          "myanimelist": {
            "text": "priority",
            "note": "2",
            "required": true
          }
        },
        {
          "name": "Ask to discuss",
          "taiga": null,
          "myanimelist": {
            "text": "enable_discussion",
            "note": "2",
            "required": false
          }
        },
        {
          "name": "Total episodes downloaded",
          "taiga": null,
          "myanimelist": {
            "text": "downloaded_episodes",
            "note": "2",
            "required": false
          }
        },
        {
          "name": "Fansub group",
          "taiga": null,
          "myanimelist": {
            "text": "fansub_group",
            "note": "2",
            "required": false
          }
        },
        {
          "name": "Storage type",
          "taiga": null,
          "myanimelist": {
            "text": "storage_type",
            "note": "2",
            "required": false
          }
        },
        {
          "name": "Storage value",
          "taiga": null,
          "myanimelist": {
            "text": "storage_value",
            "note": "2",
            "required": false
          }
        }
      ],
      "notes": [
        "<a href='https://myanimelist.net/forum/?topicid=314309'>Deprecated</a> as of 2011-08-09, but is still included in malappinfo.php results.",
        "Can set a new value, but cannot get the current value."
      ]
    }
  ]
};

function printValue(data, type) {
  var value = {};

  if (data && typeof data === 'object') {
    value.text = data.text;
    value.note = data.note;
    value.required = data.required;
  } else {
    value.text = data;
  }

  if (type == 'feature-list') {
    if (value.text == true) {
      value.text = '<span class="text-success glyphicon glyphicon-ok"></span>';
    } else if (value.text == false) {
      value.text = '<span class="text-danger glyphicon glyphicon-remove"></span>';
    } else {
      value.text = 'n/a';
      value.required = false;
    }
  } else {
    if (value.text === '') {
      value.text = 'n/a';
      value.required = true;
    } else if (!value.text) {
      value.text = 'n/a';
      value.required = false;
    }
  }

  if (value.note) {
    value.text += '<sup>' + value.note + '</sup>';
  }

  if (value.required == true) {
    value.text = '<span class="text-danger">' + value.text + '</span>';
  } else if (value.required == false) {
    value.text = '<span class="text-muted">' + value.text + '</span>';
  }

  value.text = '<td>' + value.text + '</td>';

  return value;
}

function populateTables(data) {
  var services = data.services,
      tables = data.tables,
      html = '';

  for (var i = 0; i < tables.length; i++) {
    var id = tables[i].id,
        type = tables[i].type,
        table = tables[i].table,
        notes = tables[i].notes;

    // Headers
    html = '';
    var percentage = 100 / (services.length + 1);
    html += '<tr>';
    for (var j = 0; j < services.length + 1; j++) {
      var header = j > 0 ? services[j - 1].name : '';
      html += '<th style="width: ' + percentage.toString() + '%">' + header + '</th>';
    }
    html += '</tr>';
    $('#' + id + ' table thead').html(html);

    // Rows
    html = '';
    for (var j = 0; j < table.length; j++) {
      html += '<tr>';
      html += '<td>' + table[j].name + '</td>';
      for (var k = 0; k < services.length; k++) {
        var value = printValue(table[j][services[k].canonical], type);
        html += value.text;
      }
      html += '</tr>';
    }
    $('#' + id + ' table tbody').html(html);

    // Notes
    if (notes) {
      html = '<small>';
      for (var j = 0; j < notes.length; j++) {
        html += '<p><sup>' + (j + 1).toString() + '</sup> ' + notes[j] + '</p>';
      }
      html += '</small>';
      $('#' + id).after(html);
    }
  }
}

populateTables(api_data);
