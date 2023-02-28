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
    $(".col-md-3").height($('.col-md-9').height());
    $("#jump-toolbar").stick_in_parent();
    $(document).on('scroll', function () {
        var scroll = $(this);
        $(".staff-member-group").each(function () {
            if (scroll.scrollTop() >= ($(this).offset().top - 50)) {
                var button = $('#' + $(this).attr('id') + '-button');

                if (button.hasClass('deactivated')) {
                    $('.rank').each(function () {
                        $(this).addClass('deactivated');
                    });
                    button.removeClass('deactivated');
                }
            }
        });
    });

    var scroll = $(document);
    $(".staff-member-group").each(function () {
        if (scroll.scrollTop() >= ($(this).offset().top - 15)) {
            var button = $('#' + $(this).attr('id') + '-button');

            if (button.hasClass('deactivated')) {
                $('.rank').each(function () {
                    $(this).addClass('deactivated');
                });
                button.removeClass('deactivated');
            }
        }
    });

    $(".rank").click(function (e) {
        e.preventDefault();
        var aid = $(this).attr('href');
        $('html,body').animate({scrollTop: $(aid).offset().top - 15}, 'slow');
    });
});

}
/*
     FILE ARCHIVED ON 12:53:59 Aug 25, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:58:06 Feb 14, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 66.483
  exclusion.robots: 0.091
  exclusion.robots.policy: 0.082
  RedisCDXSource: 0.747
  esindex: 0.01
  LoadShardBlock: 44.398 (3)
  PetaboxLoader3.datanode: 52.264 (4)
  CDXLines.iter: 18.115 (3)
  load_resource: 91.658
  PetaboxLoader3.resolve: 75.047
*/