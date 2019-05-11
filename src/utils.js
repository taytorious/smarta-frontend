

export function getScheduleType(date) {
    const day = date.getDay();

    if (day === 0) {
        return "Sunday";
    } else if (day === 7) {
        return "Saturday";
    } else {
        return "weekday";
    }
}
