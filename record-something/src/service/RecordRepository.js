import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class RecordRepository {
	constructor() {
		this.db = getDatabase();
	}

	saveReocrd(userId, record) {
		set(ref(this.db, `${userId}/records/${record.id}`), record);
	}

	removeReocrd(userId, record) {
		remove(ref(this.db, `${userId}/records/${record.id}`));
	}

	syncRecord(userId, onUpdate) {
		const recordRef = ref(this.db, `${userId}/records/`);
		onValue(recordRef, (snapshot) => {
			const value = snapshot.val();
			value &&
				onUpdate(
					Object.keys(value).map(
						(key) =>
							value[key].tags && {
								...value[key],
								tags: JSON.parse(value[key].tags),
							}
					)
				);
		});
		return () => off(recordRef);
	}
}

export default RecordRepository;
