function loadTags(word)
{
    $( '#display_tags' ).empty();
    $( '#display_tagIDs' ).empty();
    $( '#display_tags' ).append("<p>Tags for word "+word+"</p>");
    if(word)
    {
        $.ajax({
            type: 'post',
            url: 'loadtags',
            data: {
                word:word,
            },
            success: function (response) {
                $( '#display_tags' ).empty();
                $( '#display_tagIDs' ).empty();
                $( '#display_tags' ).append("<p>Tags for word "+word+"</p>");
                $( '#display_tags' ).append(response);
            }
        });
    }

}

function loadTagIDs(word,tag)
{
    $( '#display_tagIDs' ).empty();
    $( '#display_tagIDs' ).append("<p>Locations for Word: "+word+" and Tag: "+tag+"</p>");
    if(word)
    {
        $.ajax({
            type: 'post',
            url: 'loadtagIDs',
            data: {
                word:word,
                tag:tag,
            },
            success: function (response) {
                $( '#display_tagIDs' ).empty();
                $( '#display_tagIDs' ).append("<p>Locations for Word: "+word+" and Tag: "+tag+"</p>");

                $( '#display_tagIDs' ).append(response);
            }
        });
    }

}

function loadTagWords(tag)
{
    $( '#display_tagWords' ).empty();
    $( '#display_tagIDs' ).empty();
    $( '#display_tagWords' ).append("<p>Processing... Wait for the Tag: "+tag+"</p>");
    if(tag)
    {
        $.ajax({
            type: 'post',
            url: 'loadtagWords',
            data: {
                tag:tag,
            },
            success: function (response) {
                $( '#display_tagWords' ).empty();
                $( '#display_tagWords' ).append("<p>Words tagged with: "+tag+"</p>");
                $( '#display_tagWords' ).append(response);
            }
        });
    }

}