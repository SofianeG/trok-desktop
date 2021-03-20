import deleteAds from '../../../../assets/ParametersScreenIcons/premium_ads.png';
import addPictures from '../../../../assets/ParametersScreenIcons/premium_pictures.svg';
import MoreInfos from '../../../../assets/ParametersScreenIcons/premium_infos.svg';

const CardsPremium = [
  {
    id: 1,
    title: 'Supprimer les publicités',
    image: deleteAds,
    subTitle: 'Pour un meilleur confort de navigation ',
  },
  {
    id: 2,
    title: 'Ajouter plus des photos',
    image: addPictures,
    subTitle: 'Mettez en valeur votre annonce pour une annonce optimale !',
  },
  {
    id: 3,
    title: 'Ne rien louper ',
    image: MoreInfos,
    subTitle: ' Suivre des annonces, être alerter pour une recherche ',
  },
];

export default CardsPremium;
