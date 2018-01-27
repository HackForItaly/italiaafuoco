---
layout: page
title: Ultime promesse elettorali
permalink: /last/
share-img: "http://www.unapromessa.it/logo.png"
---

<div class="row">

{% assign filteredissues = site.data.issuesjson %}
{% for member in filteredissues limit:6 | sort: "created_at" %}
<div class="col-md-4 col-xs-12">
        <div class="panel panel-default">
                <div class="panel-body" style="min-height:120px;max-height:120px;overflow-y:hidden;">
                        <a href="{{site.url}}/promessa/{{member.number}}">
                        <h4>{{member.title}}</h4>
                        <!---<p>{{member.issue.data.data}}</p>--->
                        </a>
                </div>

                <div class="panel-footer">
                        <ul class="share-buttons">
                        <li>Condividi:</li>
                        <li><a href="https://unapromessa.it/issues/{{ member.number | datapage_url: '.' }}" title="Copia link"><img alt="Copia link" src="/img/icone/link.png"></a></li>
                        <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://unapromessa.it/issues/{{ member.number | datapage_url: '.' }}&title={{member.title|truncate:70|uri_escape}} | {{ site.title }}" title="Condividi su Facebook" target="_blank"><img alt="Condividi su Facebook" src="/img/icone/Facebook.png"></a></li>
                        <li><a href="https://twitter.com/intent/tweet?url=https://unapromessa.it/issues/{{ member.number | datapage_url: '.' }}&text={{member.title|truncate:50|uri_escape}}&via=terremotocentro&hashtags=terremotocentroitalia" target="_blank" title="Tweet"><img alt="Tweet" src="/img/icone/Twitter.png"></a></li>
                        <li><a href="https://plus.google.com/share?url=https://unapromessa.it/issues/{{ member.number | datapage_url: '.' }}" target="_blank" title="Condividi su Google+"><img alt="Condividi su Google+" src="/img/icone/Google+.png"></a></li>
                        <li><a data-proofer-ignore href="mailto:?subject={{member.title|truncate:70|uri_escape}} | {{site.title}}&body={{member.title|truncate:70|uri_escape}}%20Clicca qui:%20https://unapromessa.it/issues/{{ member.number | datapage_url: '.' }}" title="Invia email"><img alt="Invia email" src="/img/icone/Email.png"></a></li>
                        </ul>
                </div>

        </div>
</div>
{% endfor %}

</div>
<hr class="col-md-12"/>


