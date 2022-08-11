import {connect} from 'react-redux';

import {selectCards, selectEnterCard} from '../../../store/cards/selectors';
import {addCard, setEnterCard} from '../../../store/cards/actions';

import CardsComponent from "./component";

const CreateCard = ({items, addCard, enterCard, setEnterCard}) => {

  const handleEnterCard = e => {
    setEnterCard(e.target.value);
  }

  const handleAddCard = () => {
   const newCard = {
      id: Math.round(Math.random() * 100),
      value: enterCard,
    }
    setEnterCard('');
    addCard(newCard);
  }

  const isCardsEmpty = items.length === 0;
 
  return (
    <div>
      <CardsComponent
        enterCard={enterCard}
        items={items}
        isCardsEmpty={isCardsEmpty}
        onEnterCard={handleEnterCard}
        onAddCard={handleAddCard}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  items: selectCards(state),
  enterCard: selectEnterCard(state),
});

const mapDispatchToProps = {
  addCard,
  setEnterCard,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);