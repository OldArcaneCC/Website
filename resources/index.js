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
    function loadDiscordWidget() {
        $.ajax({
            url: '/partial/widget/discord',
            dataType: 'html',
            success: function (result) {
                $('#discord-widget').append(result);
            }
        })
    }

    function loadTwitterWidget() {
        $.ajax({
            url: '/partial/widget/twitter',
            dataType: 'html',
            success: function (result) {
                $('#twitter-widget').append(result);
            }
        })
    }

    loadTwitterWidget();
    loadDiscordWidget();
});

}
/*
     FILE ARCHIVED ON 16:36:30 Jun 12, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:15:26 Feb 14, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 66.912
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.067
  RedisCDXSource: 0.573
  esindex: 0.009
  LoadShardBlock: 45.687 (3)
  PetaboxLoader3.datanode: 138.933 (4)
  CDXLines.iter: 17.589 (3)
  load_resource: 191.317
  PetaboxLoader3.resolve: 66.445
*/