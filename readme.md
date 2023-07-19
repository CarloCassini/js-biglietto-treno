# biglietto del treno

## traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## svolgimento

- chiedo quanti kilometri vuole percorrere il passeggero e salvo il dato in una variabile "KmPercorso"- recupero i valori con formato numerico

- chiedo l'età del passeggero e salvo la variabile in una variabile "Eta" - recupero i valori con formato numerico

- creo la variabile "PrezzoViaggio"

- valorizzo PrezzoViaggio moltiplicando KmPercorso \* 0,21

eseguo il seguente controllo

- **se** Eta < 18
  - PrezzoViaggio = PrezzoViaggio - (20% di PrezzoViaggio)
- **altrimenti se** Eta >= 65 - PrezzoViaggio = PrezzoViaggio - (40% di PrezzoViaggio)

- eseguo operazioni di troncaggio decimali su PrezzoViaggio

-eseguo output in forma umana di PrezzoViaggio
