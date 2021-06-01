import PropTypes from 'prop-types';

export const foodsILike = [
  {
    id: 1,
    rating: 4.9,
    name: 'meat',
    image:
      'https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png',
  },
  {
    id: 2,
    rating: 4.7,
    name: 'burger',
    image:
      'http://bk-emea-prd.s3.amazonaws.com/sites/burgerking.no/files/300x270px_BaconKing.png',
  },

  {
    id: 3,
    rating: 4.1,
    name: 'chocolate',
    image:
      'https://www.100picsquizanswers.net/images/hundred/207/chocolate.jpg',
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

function Food(props) {
  function change(food) {
    return food.toString().toUpperCase();
  }
  return (
    <div>
      <h3>Я люблю кушать {change(props.name)}</h3>
      <h4>Rating {props.rating} / 5</h4>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      image={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return (
    <div>
      <h1>Привет!</h1>
      {foodsILike.map(renderFood)}
    </div>
  );
}
export default App;
