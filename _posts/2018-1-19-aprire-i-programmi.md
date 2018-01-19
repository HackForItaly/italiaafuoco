---
layout: post
title: Scrivere un programma in formato aperto
categories: blog
subtitle: Un suggerimento che diamo alle forze politiche per rendere il loro programma facilmente divulgabile
date: 19 Gennaio 2018
---

Scrivere documentazione in formato [markdown](https://it.wikipedia.org/wiki/Markdown) consente non solo di pubblicarla in modo semplice online ma anche di consentire che questa venga facilmente diffusa e riusata. Questo formato altro non è che un modo di scrivere un testo tramite un computer adottando opportune convenzioni perchè possa essere formattato online. Anche i post stessi di questo blog sono scritti in formato markdown e potete vederli nella loro forma "grezza" [qui](https://raw.githubusercontent.com/HackForItaly/politicamentecorretto/master/_posts/2018-1-01-Siamo-online.md).

Non solo, scrivere in questo formato consente di tenere traccia delle modifiche al testo del documento nel tempo usando ad esempio un sistema di versionamento come [Github](www.github.com). E' stato usato questo formato ad esempio per visualizzare le differenze della costituzione italiana se mai fosse passata la riforma dell'ultimo referendum a Dicembre 2017, potete vedere il risultato [qui](https://github.com/pmontrasio/costituzione/commit/002de456397d30f8591103ce1ea31664af90023e). Allo stesso modo si dovrebbe pensare di pubblicare i programmi elettorali in questo formato e di pubblicarli su Github in un formato come questo perchè si possano leggere senza particolari difficoltà anche tramite un software (un PDF è molto più complesso da analizzare) e perchè si possano tracciare eventuali revisioni dei documenti nel tempo. Non è infatti detto che un programma elettorale resti stabile negli anni, secondo noi. Il contesto nazionale ed internazionale può cambiare in modo tale da dover allineare il programma a nuove priorità ed esigenze. L'importante sarebbe che queste modifiche fossero trasparenti ai cittadini e crearlo in questo formato e archiviarli su Github potrebbe essere un buon metodo.

I file markdown possono inoltre essere usati per essere visualizzati in siti web statici (come questo) per farli diventare direttamente dei post facilmente condivisibili via social oppure possono essere resi dei documenti rintracciabili e visionabili su piattaforme come [readthedocs](https://readthedocs.org/).

Diamo allora una nostra proposta di come potrebbe essere impostato un file markdown di un programma elettorale e la riportiamo qui sotto, è un'operazione alquanto semplice, si tratta di creare sul vostro computer un file di testo (come un .txt) e dargli estensione .md e scriverci dentro usando il [linguagggio markdown](https://it.wikipedia.org/wiki/Markdown). Ecco un esempio

<script src="https://gist.github.com/iltempe/4723875ae73859a49109bd2975c87bee.js"></script>

che archiviato su sistemi che rendono il markdown visibile (come Github) viene visualizzato così

<script src="https://gist.github.com/iltempe/f57421a37c452491df0e3072846b7077.js"></script>

Nella sezione revisioni di github potete tenere traccia di tutte le modifiche fatte e renderle "trasparenti" a chi legge.

![la sezione revisioni](https://raw.githubusercontent.com/HackForItaly/politicamentecorretto/master/images/revisioni_github.png)

![il dettaglio delle modifiche effettuate](https://raw.githubusercontent.com/HackForItaly/politicamentecorretto/master/images/revisioni2.png)

E sarà possibile referenziare ogni revisione del programma con un link specifico.
Ad esempio [questo](https://gist.github.com/iltempe/4723875ae73859a49109bd2975c87bee/119b2bb62303ed4b61b35e55073b9e06dfc1f064) per una revisione e [questo link](https://gist.github.com/iltempe/4723875ae73859a49109bd2975c87bee/ee5b17d7a5497d9d2750f04a0be51a7033f14da3) per indicarne un'altra.

Che aspetti ad aprire il tuo programma elettorale? Ci contiamo!