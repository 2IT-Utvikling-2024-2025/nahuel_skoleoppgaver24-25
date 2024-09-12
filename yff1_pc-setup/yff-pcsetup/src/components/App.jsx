import { useState } from 'react'
import './css/App.css'
import Booting from './opg-1'

function App() {

  return (
    <>
      <h1>PC kommunikasjon</h1>
      <h2>OS og Booting</h2>
      <p>
        Når jeg startet så skrudde pcen seg på men skrudde seg av nesten med engang. Før pc-en skrudde seg av fikk jeg en error melding om at tid og dato ikke var satt og at dette var grunnen til at pc-en ikke fikk startet ordentlig. Når jeg så dette gikk jeg inn i bios og manuelt satte tiden og datoen. Dette fikset boot erroren men jeg fikk ikke logget inn siden jeg ikke viste logg inn infoen til brukeren. For å fikse dette skulle jeg slette det gamle OS og legge inn ett nytt.
        For å få en ny OS fikk jeg en USB-pinne av Kevin med en windows 11 iso fil og en annen som ikke inneholdt noe. For å kopiere iso filen over på den tomme USb-pinnen og gjøre den bootable brukte jeg en programvare som heter «Rufus».
      </p>
      <p>
        Etter å få kopiert iso filen ga jeg en av minne-pinnene tilbake til kevin og tok den andre for å installere windows på pc-en. Jeg startet pc-en og gikk inn i biosen for å endre uefi/legacy boot til both så jeg fikk velge hva jeg booter fra. Da jeg restartet pc-en trykket jeg på enter for å stoppe den normale startupen og deretter f11 for å kunne velge boot options. Jeg bootet fra USB-pinnenen med iso filen, men det oppstod et problem når jeg skulle velge hvilken disk jeg skulle bruke. Problemet var at diskene allerede hadde et OS installert så ved hjelp fra kevin gikk jeg inn i kommand prompt og wipet disk før jeg converterte den til gpt. Etter dette fikk jeg velge riktig disk 
        Når jeg hadde valgt disk fikk jeg gå gjennom installasjons prosessen til windows og satt opp pc-en sånn som jeg ville.
      </p>
      <h2>Ping</h2>
      <p>
        I oppgave 2 skulle jeg og Andreas pinge hverandres pc og se om vi fikk en connection. Det første vi gjorde var å bytte IP-adressene våre til å matche pc tallene våre siden vi var heldig nok til å få riktig range for å kunne gjøre det. Med dette ble IP adressene våre 192.168.1.21-22 hvorav jeg er 21 og Andreas 22.
      </p>
      <p>
        Etter å endre IP adressene prøvde vi å pinge hverandre ved å skrive inn kommandoen «ping ip adresse» i cmd. Dette funket ikke og vi fikk en error melding. For å endre dette måtte vi gå i windows defender firewall og legge til en ny regel for å la andre enheter overføre data, dette var «inbound echo request ICMPv4». Det funket å pinge når vi hadde lagt til disse nye reglene, men uken etter da vi prøvde på nytt funket det ikke. Jeg vet fortsatt ikke hva problemet siden det ble fikset etter at jeg oppdaterte pc-en og startet den på nytt.  
      </p>
      <h2>FTP</h2>
      <p>
        Når det kom til FTP-er valgte vi å bruke filezilla. Dette var fordi vi hadde brukt det tidligere og var relativt kjent med programmet. Vi lastet ned både server versjonen og klient versjonen så vi kunne teste på hverandre. Siden vi allerede var godt  kjent med klient versjonen gikk vi rett på å finne ut av filezilla server.
        </p>
      <p>
        Vi  hadde litt problemer i starten, men etter å få hjelp fra svein som kunne det fant vi ut av hvordan det funket og jeg fikk koblet meg opp til filezilla serveren til Andreas. Når det kom til mitt oppset brukte jeg filezilla configuration wizard for å gjøre det generelle oppsettet og la til en bruker Andreas kunne bruke. Innlogging for admin brukeren på serveren min og kontoen jeg kalte andreas står under.
      </p>
      <p className='bold'>Admin:</p>
      <div className='inline'><p>Host:127.0.0.1 </p>	<p>port: 14148</p>	<p>password: 9395</p></div>
        <p className='bold'>User:</p>

        <div className='inline'><p>Host: 192.168.1.21</p>	<p>port: 21</p>	<p>password: bleh</p></div>
        <p>
        Når andreas prøvde å logge på fikk han ett problem. Dette problemet oppstod fordi jeg ikke hadde åpnet portene filezilla brukte til trafikk. Jeg gikk inn i FW og la til en rule på inbound hvor jeg designerte portene som filezilla brukte som åpne for trafikk.</p>
      <p>
        Vi fikk koblet opp til hverandres server og alt funket.
      </p>

      <h2>Egenvurdering</h2>

      <p className='italic'>Hva har du lært gjennom denne oppgaven? </p>
      <p>
      Jeg har lært hvordan jeg jobber med FW, cleaner en disk og hvordan man bruker Filezilla server.
      </p>

      <p className='italic'>Hvordan har din innsats og fokus vært?</p>  
      <p>
      Jeg har fått gjort alle oppgavene innen tiden og holdt ett helt ok nivå med fokus. Jeg hadde mye død tid som jeg brukte på hjelpe andre med problemer sånn som Kevin og Svein gjorde for meg
      </p>

      <p className='italic'>Om du skal utføre oppgaven en gang til, er det noe du ville gjort annerledes?</p>
      <p>
      Jeg mener jeg har gjort det ganske bra og selv om det sikkert er ting jeg kunne gjort annerledes er de veldig små endringer som ikke egentlig har noen effekt på slutt produktet og av denne grunn vil jeg ikke bruke lang tid på å finne små forbedringer.
      </p>
    </>
  )
}

export default App
