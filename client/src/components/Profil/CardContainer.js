import Pen from '../../assets/FicheProfil/icons8-edit-1.svg';
import Heart from '../../assets/FicheProfil/icons8-heart-2.svg';
import Hands from '../../assets/FicheProfil/icons8-handshake.svg';
import Perso from '../../assets/FicheProfil/icons8-tune.svg';
import Param from '../../assets/FicheProfil/icons8-settings.svg';
import About from '../../assets/FicheProfil/icons8-about.svg';
import Conditions from '../../assets/FicheProfil/icons8-bulleted_list.svg';
import ThumbsUp from '../../assets/FicheProfil/icons8-thumbs_up.svg';
import Help from '../../assets/FicheProfil/icons8-help.svg';

export const Card1 = [
  {
    id: 1,
    text: 'Voir mon profil',
    icon: Pen,
  },
  {
    id: 2,
    text: 'Personnalisation',
    icon: Perso,
  },
  {
    id: 3,
    text: 'Conditions d’utilisation',
    icon: Conditions,
  },
];
export const Card2 = [
  {
    id: 4,
    text: 'Favoris',
    icon: Heart,
  },
  {
    id: 5,
    text: 'Paramètres',
    icon: Param,
  },
  {
    id: 6,
    text: 'Evaluer l’application',
    icon: ThumbsUp,
  },
];
export const Card3 = [
  {
    id: 7,
    text: 'Mode association',
    icon: Hands,
  },
  {
    id: 8,
    text: 'A propos de Trokéo',
    icon: About,
  },
  {
    id: 9,
    text: 'Centre d’aide',
    icon: Help,
  },
];

export default {Card1, Card2, Card3};
