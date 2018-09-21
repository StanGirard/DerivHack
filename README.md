### For legal reasons, we can't publish plubically this repo. If you want access to the entire code, please send us an Email at stanislas.girard@natixis.com or remi.foult@natixis.com
#### You can look at our block explorer at http://antid0te.fr:3000


# Natixis team DerivHack2018 
This is the result of Natixis team for the 2018 Barclays ISDA Hackathon which aimed at levereging the ISDA CDM model using a Blockchain/DLT 

We used R3 primitives for Corda 4 : 
https://bitbucket.org/caismanai/derivatives-trading-network
https://bitbucket.org/caismanai/cdm

What we have done : 
- Asynchronous JS CDM Event loader (in tools)
- UI (in webapp you have a react/redux project)
    - Loading of CDM events that dispatch to the party1 webserver and load a PersistCDMEventOnLedgerFlow
    - Visualisation of corda business network
    - Visualisation of live contracts, terminated contract, contract history (consumed states)
    - Visualisation of IOU at Date linked to contractIdentifier that enables netting payment to be made at a given date
- The reset event for each date should be send by the BNO to all participants (scrits in tools/BNOreset.sh).
Then it triggers each node to generate IOUs based on /webapp/public/data.json file which provide resets based on each participant's contracts


to initiate the Corda business network : 
```
cd derivatives-trading-network/
./deploy.sh
 wait a while
cd deploy
./joinNetwork.sh
./h2.sh
```

The Natixis team : José Luu, Christophe Laureote, Stanislas Girard, Rémi Foult

Thanks to Joel Dudley from R3 for his assistance !
