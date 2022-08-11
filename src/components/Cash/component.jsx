import {connect} from 'react-redux';

import {selectCash, selectEnterCash, selectCurrency} from '../../store/cash/selectors';
import {addCash, setEnterCash} from '../../store/cash/actions';

import CashComponent from './CashComponent';

const Cash = ({cashItems, enterCash, addCash, setEnterCash}) => {

  const handleEnterCash = e => {
    setEnterCash(e.target.value);
  }

  const handleAddCash = () => {
    const newCash = {
       id: Math.round(Math.random() * 100),
       value: enterCash,
     }
     setEnterCash('');
     addCash(newCash);
    }

  const isCashEmpty = cashItems.length === 0;

  return (
    <div>
      <CashComponent
        enterCash={enterCash}
        items={cashItems}
        isCashEmpty={isCashEmpty}
        onEnterCash={handleEnterCash}
        onAddCash={handleAddCash}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  cashItems: selectCash(state),
  enterCash: selectEnterCash(state),
});

const mapDispatchToProps = {
  addCash,
  setEnterCash
}

export default connect(mapStateToProps, mapDispatchToProps)(Cash);