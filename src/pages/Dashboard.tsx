import { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { Card } from '../redux/cards/types';
import { fetchCards } from '../redux/cards/asyncActions';
import { getCardsSelector } from '../redux/cards/selectors';

import { Page, CardItem, CardsList } from '../components/blocks';

const Dashboard = () => {
    const dispatch = useAppDispatch();
    const {items} = useSelector(getCardsSelector);
    const cards = items.map((obj: Card) => <CardItem {...obj}/>);
    const getCards = async () => {
        dispatch(fetchCards());
    };

    useEffect(() => {
        getCards();
    }, []);

    return (
        <Page title="Дашборд">
            <CardsList>{ cards }</CardsList>
        </Page>
    )
}

export default Dashboard;