import { getDatabase, ref, set, remove } from 'firebase/database';

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
}

export default CardRepository;
