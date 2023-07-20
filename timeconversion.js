function convertTimeToMilitary(time) {
    // Parse the input string to extract the hours, minutes, and AM/PM indicator
    const [timeStr, amPm] = time.split(' ');
    const [hoursStr, minutesStr] = timeStr.split(':');
    
    let hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);
    
    // Convert the hours to 24-hour format
    if (amPm === 'PM' && hours !== 12) {
      hours += 12;
    } else if (amPm === 'AM' && hours === 12) {
      hours = 0;
    }
    
    // Format the military time string
    const hoursStrMilitary = hours.toString().padStart(2, '0');
    const minutesStrMilitary = minutes.toString().padStart(2, '0');
    const militaryTime = `${hoursStrMilitary}:${minutesStrMilitary}`;
    
    return militaryTime;
  }

  const time12Hour = '03:25 PM';
const militaryTime = convertTimeToMilitary(time12Hour);
console.log(`The military time is ${militaryTime}.`);

  