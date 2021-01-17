import { formatDate } from '../utils/formateDate';

export default function Date({ datetime }) {
	return <time datetime={datetime}>{formatDate(datetime)}</time>;
}
