import { normalize, schema } from 'normalizr';

// Define a wishes schema
const wishesSchema = new schema.Entity('wishes', {}, {
  idAttribute: '_id'
});
const wishesListSchema = { wishes: [wishesSchema] };

export const normalizedWishes = data => normalize(data, wishesListSchema);
