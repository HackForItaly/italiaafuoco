---
layout: post
title: Scrivere un programma elettorale in formato aperto
categories: blog
subtitle: Un suggerimento alle forze politiche per rendere i programmi facilmente divulgabili
date: 19 Gennaio 2018
---

Scrivere documentazione in formato [markdown](https://it.wikipedia.org/wiki/Markdown) non solo consente di pubblicarla online in modo semplice ma anche che questa venga facilmente diffusa e riusata. Questo formato altro non è che un modo di scrivere un testo adottando opportune convenzioni perchè possa essere formattato online. Anche i post di questo blog sono scritti in formato markdown e potete vederli nella loro forma "grezza" [qui](https://raw.githubusercontent.com/HackForItaly/politicamentecorretto/master/_posts/2018-1-01-Siamo-online.md).

Inoltre scrivere un testo in questo formato permette di tenere traccia delle modifiche apportate nel tempo usando, ad esempio, un sistema di 'versionamento' come [Github](www.github.com), ovvero la piattaforma usata da molti programmatori per sviluppare software in modo opensource.

E' stato usato questo approccio per visualizzare le differenze della Costituzione italiana se mai fosse passata la riforma del referendum di Dicembre 2017. Potete vedere il risultato [qui](https://github.com/pmontrasio/costituzione/commit/002de456397d30f8591103ce1ea31664af90023e).

Allo stesso modo si dovrebbe pensare di pubblicare i programmi elettorali in questo formato e su una piattafforma come Github perchè cosi si potrebbero leggere senza particolari difficoltà anche tramite un software (un PDF è molto più complesso da analizzare) e si potrebbero tracciare eventuali revisioni nel tempo. Non è infatti detto che un programma elettorale resti lo stesso negli anni, secondo noi. Il contesto nazionale ed internazionale può cambiare e potrebbe quindi essere necessario allineare il programma a nuove priorità ed esigenze. L'importante sarebbe rendere trasparenti queste modifiche e farle conoscere ai cittadini. Creare il programma in questo formato e archiviarlo su Github potrebbe essere un buon metodo.

I file markdown possono inoltre essere usati in siti web statici (come questo) per farli diventare direttamente dei post facilmente condivisibili via social oppure possono essere resi dei documenti rintracciabili e visionabili su piattaforme come [readthedocs](https://readthedocs.org/).

Ecco allora una proposta su come potrebbe essere impostato un file markdown di un programma elettorale. Si tratta di un'operazione alquanto semplice, basta creare un file di testo (come un .txt) e dargli estensione .md e scriverci dentro usando il [linguagggio markdown](https://it.wikipedia.org/wiki/Markdown). Ecco un esempio:

<script src="https://gist.github.com/iltempe/4723875ae73859a49109bd2975c87bee.js"></script>

Archiviato su sistemi che rendono il markdown visibile (come Github) viene visualizzato così

<script src="https://gist.github.com/iltempe/f57421a37c452491df0e3072846b7077.js"></script>

Nella sezione revisioni di Github potete tenere traccia di tutte le modifiche fatte e renderle "trasparenti" a chi legge.

![la sezione revisioni](https://raw.githubusercontent.com/HackForItaly/politicamentecorretto/master/images/revisioni_github.png)

![il dettaglio delle modifiche effettuate](https://raw.githubusercontent.com/HackForItaly/politicamentecorretto/master/images/revisioni_2.png)

E sarà possibile referenziare ogni revisione del programma con un link specifico.
Ad esempio [questo](https://gist.github.com/iltempe/4723875ae73859a49109bd2975c87bee/119b2bb62303ed4b61b35e55073b9e06dfc1f064) per una revisione e [questo link](https://gist.github.com/iltempe/4723875ae73859a49109bd2975c87bee/ee5b17d7a5497d9d2750f04a0be51a7033f14da3) per indicarne un'altra.

Ci siamo quindi chiesti se effettivamente sia possibile tutto questo, dal momento che esiste una legge che, in nome della "trasparenza", impone pubblicazione dei programmi con un po' di anticipo rispetto alle elezioni stesse. Ci siamo chiesti quanto sforzo si dovrebbe fare per avere questa tecnologia a servizio di partiti ma soprattutto di cittadini. Ci siamo chiesti quanto costerebbe introdurre una regola per richiedere ai partiti il programma in questo formato, con il doppio vantaggio di fare trasparenza e standardizzare i documenti sul sito del governo. E la risposta è molto semplice: volendo farlo il costo sarebbe pressocchè nullo con immenso valore per chi i programmi vuole consultarli, analizzarli, divuglarli.

In ogni caso ogni partito può decidere di farlo in autonomia (un account Github non costa niente), che aspettate dunque ad aprire il vostro programma elettorale?
