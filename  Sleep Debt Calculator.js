const getSleepHours = day => {

    switch(day) {
      case 'Monday':
        return 8
        break;
      case 'Tuesday':
        return 10
        break;
      case 'Wednesday':
        return 10
        break;
      case 'Thursday':
        return 9
        break;
      case 'Friday':
        return 10
        break;
      case 'Suturday':
        return 7
        break;
      case 'Sunday':
        return 10
        break;

    default:
        return 'Error!'

    }
  };

  const getActualSleepHours = () =>
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Suturday') +
    getSleepHours('Sunday');

    console.log(getSleepHours('Sunday'));
    console.log(getActualSleepHours());

    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours * 7;
    };

    calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
      console.log("You've got the perfect amount of sleep!");
    }

    else if(actualSleepHours > idealSleepHours) {
      console.log("You've got " + (actualSleepHours - idealSleepHours) + " hours more sleep this week that you needed.");
    }

    else if(actualSleepHours < idealSleepHours) {
      console.log("You should get some more rest because you slept " + (idealSleepHours - actualSleepHours) + " less that you should have this week!");
    }

    else{
    console.log("Error! Somethimg went wrong, check your code mistakes!");
    }
    };

    calculateSleepDebt();
