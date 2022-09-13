## YouTube Search API

Pour utiliser l'API de recherche YouTube dans ce projet, vous devez vous inscrire pour obtenir un jeton d'API.
Tout d'abord, si vous n'en avez pas déjà un, vous devez créer un [Compte Google](https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Faccounts.google.com%2FManageAccount%3Fnc%3D1&flowName=GlifWebSignIn&flowEntry=SignUp).
Lorsque cela est fait, rendez-vous sur la page [Console développeur Google](https://console.cloud.google.com/apis/dashboard?pli=1&project=projectyoutubesearch&folder=&organizationId=).
Une fois le projet créé avec succès, suivez les étapes ci-dessous pour obtenir un jeton API :
1. Accédez à la page des informations d'identification en cliquant sur Informations d'identification situées dans le menu de la barre latérale ;
2. Cliquez sur le bouton + CRÉER DES IDENTIFIANTS situé en haut de la page et sélectionnez Clé API. Une nouvelle clé API doit être créée. Copiez cette clé et stockez-la dans un endroit sûr ;
3. Rendez-vous sur la page API et services en cliquant sur API et services situés en haut de la barre latérale ;
4. Cliquez sur ACTIVER LES API ET LES SERVICES en haut de la page. Vous serez redirigé vers une nouvelle page. Recherchez l'API YouTube Data et cliquez sur l'option Youtube Data API v3. Une fois de plus, vous serez redirigé vers une autre page. Cliquez sur Activer pour autoriser l'accès à cette API.

Maintenant, il suffit de mettre la clé que vous copiez avant dans la variable API_TOKEN dans ProjectMultimedia -> projets -> youtube -> src -> app -> shared -> services -> search.service.ts (ligne 17).
Cela fait, vous pouvez utiliser l'API YouTube.

## Spotify API

Pour utiliser l'API Spotify dans ce projet, vous devez vous inscrire pour obtenir une clé d'identification client et une clé secrète client.
Tout d'abord, si vous n'en avez pas déjà un, vous devrez créer un [compte Spotify](https://www.spotify.com/fr/signup/).
Lorsque cela est fait, rendez-vous sur la page [tableau de bord Spotify](https://developer.spotify.com/dashboard/applications).
Une fois cela fait, suivez les étapes ci-dessous pour paramétrer l'API :
1. Créez une application sur le tableau de bord Spotify ;
2. Copiez la clé d'identification du client et la clé secrète du client et stockez-les en lieu sûr ;
3. Cliquez sur le bouton Modifier les paramètres, puis écrivez sur le site Web l'URL où votre application s'exécute ;
4. Dans Modifier les paramètres, créez 2 URI de redirection, ton_application_url/home et yton_application_url/playlist (copiez ces 2 URL quelque part) ;

Vous pouvez maintenant enregistrer les paramètres et mettre votre clé et votre URL dans ProjectMultimedia -> projets -> spotify -> src -> app -> services -> global.service.ts (ligne 8 à 11).
Cela fait, vous pouvez utiliser l'API Spotify.

## Deezer API

Pour utiliser l'API Deezer dans ce projet, vous devrez vous inscrire pour les demandes d'utilisation.
Tout d'abord, si vous n'en avez pas déjà un, vous devrez créer un [compte Deezer](https://www.deezer.com/fr/register).
Une fois cela fait, rendez-vous sur la page [Développeurs Deezer](https://developers.deezer.com/).
Une fois cela fait, suivez les étapes ci-dessous pour paramétrer l'API :
1. Cliquez sur le bouton MyApp, à côté de votre nom de connexion ;
2. Cliquez ensuite sur le bouton Créer une nouvelle Application et entrez des informations comme, Nom (=ProjetMultimédia), Domaine (=url de votre application), etc...
3. Copiez l'AppId et l'URL de votre application et stockez-les dans un endroit sûr ;

Maintenant, allez dans ProjectMultimedia -> src -> assets -> FilesJs -> deezer.js et mettez votre appID à la ligne 9 et mettez votre url à la ligne 10.
Cela fait, vous pouvez utiliser l'API Deezer.
