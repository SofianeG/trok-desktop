import style from './Review.module.css';
import yellowStars from '../../assets/Icons/icons8-star-yellow.svg';
import whiteStars from '../../assets/Icons/icons8-star-white.svg';
import Reviews from './Reviews';

const Review = () => {
  return (
    <div
      style={{
        // backgroundColor: 'yellowgreen',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          // backgroundColor: 'yellow',
          width: 747,
          marginLeft: 25,
        }}
      >
        {Reviews.map((review) => (
          <>
            <div
              style={{ display: 'flex', flexDirection: 'row', marginTop: 21 }}
            >
              <div
                style={{
                  // backgroundColor: 'pink',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img src={review.image} alt="#" className={style.picture} />
              </div>
              <div style={{ marginLeft: 17 }}>
                <div key={review.id}>{review.name}</div>
                <div style={{ marginTop: 6 }}>
                  {review.ratings.map((stars) => (
                    <img src={stars} alt="#" />
                  ))}
                </div>
                <div style={{ marginTop: 6 }}>{review.text}</div>
              </div>
            </div>
            <hr className={style.hrLine} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Review;
