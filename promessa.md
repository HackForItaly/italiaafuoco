---
layout: page
title: Promesse Elettorali
tags:
        - Legalità
        - Sanità
        - Scuola/Università
        - Economia
        - Euro
        - Europa
        - Fiscalità
        - Immigrazione
        - Lavoro
        - Pensioni
        - Politica Internazionale
permalink: /promessa/
---

{% for tag in page.tags %}
# {{tag}}
<div class="panel-group">
{% assign filteredissues = site.data.issuesjson | where_exp: "member","member.issue.labels contains tag" %}
{% for member in filteredissues %}
<div class="panel-body">
<a href="{{site.url}}/promessa/{{member.number}}" class="list-group-item">
	<h4 class="list-group-item-heading">{{member.title}}</h4>
	<p class="list-group-item-text">{{member.issue.data.descrizione|markdownify}}</p>
</a>
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
{% endfor %}
</div>
---
{% endfor %}


