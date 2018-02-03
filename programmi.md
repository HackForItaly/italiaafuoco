---
layout: page
title: Programmi
permalink: /programmi/
share-img: "http://www.unapromessa.it/logo.png"
---

In tabella troverete tutti i riferimenti ai programmi elettorali raccolti da questo progetto. Se vuoi consultarli online o in formato ebook o testuale puoi consultarli anche sulla nostra sezione su [Archive](https://archive.org/details/elezioni2018). Se invece vuoi cercare all'interno dei programmi puoi accedere a alla [pagina di ricerca](https://www.unapromessa.it/programmi_search/)

{% assign programmigroupevento = site.data.programmi | group_by: "evento" %}

{% for programmagroupevento in programmigroupevento %}
<h2>{{programmagroupevento.name}}</h2>

{% assign programmigroupeventoamm = programmagroupevento.items | group_by: "amministrazione" %}

{% for programmagroupeventoamm in programmigroupeventoamm %}

<h3>{{programmagroupeventoamm.name}}</h3>

<div class="list-group list-group-default">
{% for programma in programmagroupeventoamm.items %}
<a href="{{programma.link}}" class="list-group-item">
<div class="row">
<div class="col-md-4"><strong>{{programma.partito}}</strong></div>
<div class="col-md-8"><small>{{programma.link}}</small></div>
</div>
</a>
{% endfor %}
</div>
{% endfor %}
{% endfor %}

