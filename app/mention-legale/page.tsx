const MentionLegale = () => {
  return (
    <div className="px-10 bg-[#FCF9F6]">
      <div id="mention-legale ">
        <h2 className="text-3xl uppercase py-4">Mentions Légales</h2>
        <div id="société">
          <h4 className="">INFORMATIONS CONCERNANT LA SOCIÉTÉ</h4>
          {/* TODO  : ajouter nom de l'entreprise et numéro de Siret */}
          <p>
            XXXXXXXX est une autoentreprise enregistrée à l’URSSAF du
            Nord-Pas-de-Calais sous le numéro de siret XXXXXXXXX
          </p>
        </div>
        <br />
        <div id="responsable">
          <h4>REPRESENTANT LEGALE</h4>
          <p>Mme Carlier Anaïs</p>
        </div>
        <br />
        <div id="siege-social">
          <h4>SIEGE SOCIAL</h4>
          <p>11 rue Jacques Prévert</p>
          <p>59880 Saint-Saulve</p>
          <p>France</p>
        </div>
        <br />
        <div id="contact">
          <h4>CONTACT</h4>
          <p>anaiscarlier.naturopathe@gmail.com</p>
        </div>
        <br />
        <div id="site">
          <p>Ce site a été réalisé par Zoonekynd Alexande EI</p>
        </div>
        <br />
        <div id="hebergement">
          {/* TODO: Ajouter hébergement et adresse */}
          <h4>HEBERGEMENT</h4>
          <p>Le site est hébergé par XXXXXXXX</p>
        </div>
      </div>
      <br />
      <div id="cookies">
        <h2 className="text-3xl uppercase my-4">Cookies</h2>
        <p className="mb-3">
          Les cookies sont des fichiers” texte” envoyés par notre site à votre
          navigateur et stockés sur votre ordinateur. Le site
          https://www.naturopathe-valenciennes.com utilise un cookie dans les
          cas suivants :
        </p>
        <ul>
          <li>
            - optimiser le site en facilitant votre connexion et votre
            navigation.
          </li>
          <li>
            - vous permettre de retrouver le contenu de votre panier jusqu’à 90
            jours après votre passage sur notre site.
          </li>
          <li>
            - permettre de vous fournir un service plus rapide tel que l’accès à
            certains service.
          </li>
        </ul>
        <br />
        <p>
          Le cookie prend en compte uniquement vos actions réalisées sur le site
          {/* mettre le nom du site */}
          XXXXXXXXXXXX. Il ne nous permet en aucun cas de connaître les autres
          sites que vous avez visités ou que vous allez visiter.
        </p>
        <p>
          Nous attirons votre attention sur le fait qu’il vous ait possible de
          supprimer vos cookies. Vous avez également la possibilité d’interdit
          ceux-ci mais l’authentification à{/* mettre le nom du site */}
          XXXXXXXXXXXXXX sera dès lors impossible. De même, chaque nouvelle
          venue sur le site XXXXXXXXXXXXXX mettra automatiquement en place un
          nouveau cookie.
        </p>
        <br />
        <p>
          Vous pouvez vous opposer à l’enregistrement des cookies en paramétrant
          votre navigateur de la manière suivante :
        </p>
        <br />
        <ul>
          <li>
            <span className="text-xl my-3">Edge</span>
            <ol>
              <li>1. Dans le menu “Outils”, sélectionnez “Options Internet”</li>
              <li>
                2. Dans l’onglet “Général” ou “historique de navigation”,
                cliquez sur le bouton “Supprimer les cookies” et validez
              </li>
            </ol>
          </li>
          <br />
          <li className="my-4">
            <span className="text-xl my-3">Firefox</span>
            <ol>
              <li>
                1. Dans le menu “Outils”, sous-menu “Options Internet”,
                sélectionnez “Effacer mes traces”
              </li>
              <li>2. Sélectionner “cookies” et validez</li>
            </ol>
          </li>
          <br />
          <li>
            <span className="text-xl my-3">Google Chrome</span>

            <ol>
              <li>1. Dans le menu “paramètres” sélectionnez “historique”</li>
              <li>2. Cochez la case “supprimer les cookies” puis validez</li>
            </ol>
          </li>
          <br />
          <li>
            <span className="text-xl my-3">Safari</span>
            <ol>
              <li>1. Dans la barre de menu, chosiir le menu Edition</li>
              <li>2. Dans le menu déroulant, choisir Préférences</li>
              <li>3. Choisir l’icône « Sécurité »</li>
              <li>
                4. Pour interdire les cookies, choisir l’option « Jamais ». Il
                n’est pas possible de bloquer les cookies au cas par cas avec ce
                navigateur
              </li>
              <br />
            </ol>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MentionLegale;
