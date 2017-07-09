import ms from 'ms';

function getNextLunchtime (hours, minutes) {
	var lunchtime = new Date();

	lunchtime.setHours(hours);
	lunchtime.setMinutes(minutes);
	lunchtime.setSeconds(0);
	lunchtime.setMilliseconds(0);

	// if we've already had lunch today, start planning
	// tomorrow's lunch
	if (lunchtime < Date.now()) { lunchtime.setDate(lunchtime.getDate() + 1); }

	return lunchtime;
}

function millisecondsUntil(date) {
	return date - Date.now();
}

function howLongUntilLunch(hours, minutes) {
	if ( hours === void 0 ) hours = 12;
	if ( minutes === void 0 ) minutes = 30;

	var millisecondsUntilLunchTime = millisecondsUntil(getNextLunchtime(hours, minutes));
	return ms(millisecondsUntilLunchTime, { long: true });
}

export default howLongUntilLunch;
