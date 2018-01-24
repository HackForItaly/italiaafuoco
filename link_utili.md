---
layout: page
title: Link Utili
permalink: /link_utili/
share-img: "http://www.unapromessa.it/logo.png"
---

{: .table .table-striped #links}
Nome            |Link
:---------------|:-----------------------
{% for member in site.data.links %} {{member.Nome}} | [Link]({{member.Link}})
{% endfor %}
