---
layout: page
title: Programmi
permalink: /programmi/
share-img: "http://www.unapromessa.it/logo.png"
---

In tabella troverete tutti i riferimenti ai programmi elettorali raccolti da questo progetto.


{: .table .table-striped #opendata}
Partito         |Link            |Evento          |Amministrazione
:---------------|:---------------|:---------------|:---------------
{% for member in site.data.programmi %} {{member.partito}} | [Link]({{member.link}}) | {{member.evento}} | {{member.amministrazione}}
{% endfor %}