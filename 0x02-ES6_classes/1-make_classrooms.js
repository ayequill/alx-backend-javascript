import ClassRoom from './0-classroom';

const values = [19, 20, 34];

const initializeRooms = () => values.map((value) => new ClassRoom(value));

export default initializeRooms;
