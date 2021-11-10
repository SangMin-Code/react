import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepository {
	constructor() {
		this.db = getDatabase();
	}

	saveCard(userId, card) {
		set(ref(this.db, `${userId}/cards/${card.id}`), card);
	}

	removeCard(userId, card) {
		remove(ref(this.db, `${userId}/cards/${card.id}`));
	}

	syncCards(userId, onUpdate) {
		const cardsRef = ref(this.db, `${userId}/cards/`);
		onValue(cardsRef, (snapshot) => {
			const value = snapshot.val();
			value && onUpdate(value);
		});
		return () => off(cardsRef);
	}
}

export default CardRepository;
