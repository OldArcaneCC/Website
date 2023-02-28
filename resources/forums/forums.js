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
    if ($("#new-thread").find('select').length) {
        $("#new-thread select").chosen({disable_search_threshold: 100});
    }

    if ($("#create").length) {
        autosize($("#create"));
    }

    $("#thread").on('mouseover', function () {
       $("#options").fadeIn();
    });

    $("#thread").on('mouseleave', function () {
       $("#options").fadeOut();
    });

    if ($("#thread").find('#token').length) {
        var token = $("#token").val();

        $("#thread").find("#title").editable('click', function (e) {
            if (e.value.length < 10 || e.value > 64) {
                if (e.value.length === 0) {
                    e.target.html(e.old_value);
                }

                e.target.addClass('error');
                e.target.effect('shake');

            } else {
                $("#breadcrumb").find('li:last-of-type').find('a').text(e.value);
                e.target.removeClass('error');

                $.ajax({
                    url: window.location.pathname,
                    type: "POST",
                    data: {csrfmiddlewaretoken: token, action: 'edit_title', title: e.value},
                    success: function (data) {
                        console.log("success");
                    }
                });
            }
        });

        $("#thread").find(".text").editable({type: 'textarea', action: 'click'}, function (e) {
            var limit = 2048;

            if ($('#staff').length) {
                limit = 200000000000000;
            }

            if (e.value.length < 16 || e.value > limit) {
                e.target.html(e.og_value);
            } else {
                e.target.removeClass('error');

                $.ajax({
                    url: window.location.pathname,
                    type: "POST",
                    data: {csrfmiddlewaretoken: token, action: 'edit_text', text: e.value},
                    success: function (data) {
                        console.log("success");
                    }
                });
            }
        });
    }

    $(".reply-button").on('click', function (event) {
        event.preventDefault();
        var form = $(this).parent().parent().parent().find('.reply-reply-form');

        if (form.is(":hidden")) {
            form.slideDown();
        } else {
            form.slideUp();
        }

    });

    $("a[data-action='vote']").on('click', function (event) {
        event.preventDefault();

        var thread = $(this).data('thread');
        var reply = $(this).data('reply');
        var token = $(this).data('token');

        if ($(this).hasClass('upvoted')) {
            $(this).removeClass('upvoted');
            $(this).find('span').text(parseInt($(this).find('span').text()) - 1)
        } else {
            $(this).addClass('upvoted');
            $(this).find('span').text(parseInt($(this).find('span').text()) + 1)
        }

        if (typeof reply !== 'undefined') {
            $.ajax({
                url: window.location.pathname,
                type: "POST",
                data: {csrfmiddlewaretoken: token, action: 'vote', 'comment': reply},
                success: function (data) {
                    console.log("voted :)");
                }
            });
        } else {
            $.ajax({
                url: window.location.pathname,
                type: "POST",
                data: {csrfmiddlewaretoken: token, action: 'vote'},
                success: function (data) {
                    console.log("voted :)");
                }
            });
        }
    });
});

}
/*
     FILE ARCHIVED ON 12:53:59 Aug 25, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:54:01 Feb 14, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 118.515
  exclusion.robots: 0.163
  exclusion.robots.policy: 0.142
  cdx.remote: 0.093
  esindex: 0.011
  LoadShardBlock: 80.388 (3)
  PetaboxLoader3.datanode: 92.601 (4)
  CDXLines.iter: 22.732 (3)
  load_resource: 896.392
  PetaboxLoader3.resolve: 878.178
*/