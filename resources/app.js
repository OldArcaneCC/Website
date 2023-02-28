var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function () {
    var searchField = $("#search");

    searchField.on('input', function () {
        this.value = this.value.replace(/\s/g, "");
        this.value = this.value.replace(/\W/g, '');
    });

    var searchPlayers = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            url: '/search_players/%QUERY',
            wildcard: '%QUERY'

        },
        limit: 5
    });

    searchPlayers.initialize();

    searchField.typeahead({
        name: 'search-players',
        source: searchPlayers.ttAdapter(),
        highlighter: Object,
        afterSelect: function (item) {
            $("#search").val(item).change();
            window.location = '/u/' + item;
        },
        sorter: function (items) {
            return items;
        }
    });

    var id = setInterval(function () {
        if ($(".typeahead.dropdown-menu").children().length === 1) {
            if ($(".typeahead.dropdown-menu").children().first().text().toLowerCase() === searchField.val().toLowerCase()) {
                window.location = '/u/' + $(".typeahead.dropdown-menu").children().first().text();
                clearInterval(id);
            }
        }
    }, 100)

});

}
/*
     FILE ARCHIVED ON 12:03:39 Dec 25, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:11:46 Feb 14, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 104.986
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.071
  cdx.remote: 0.06
  esindex: 0.009
  LoadShardBlock: 79.049 (3)
  PetaboxLoader3.datanode: 66.136 (4)
  CDXLines.iter: 16.233 (3)
  load_resource: 57.876
  PetaboxLoader3.resolve: 29.237
*/