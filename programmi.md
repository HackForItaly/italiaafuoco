---
layout: page
title: Programmi
permalink: /programmi/
share-img: "http://www.unapromessa.it/logo.png"
---

In tabella trovi i riferimenti per accedere ai programmi elettorali raccolti da questo progetto per le elezioni regionali e politiche 2018. I link ai programmi per le elezioni politiche rimandano al [sito](http://dait.interno.gov.it/elezioni/trasparenza) del Viminale dove per legge devono essere pubblicati. 
Se vuoi consultarli in formato ebook o testuale puoi farlo visitando la sezione dedicata che abbiamo aperto su [Archive](https://archive.org/details/elezioni2018). 
Se invece vuoi effettuare una ricerca per parole all'interno dei programmi puoi accedere a questa [pagina di ricerca](https://www.unapromessa.it/programmi_search/).

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

